import { addFlagExtensionMethods } from '@shared/common/base/numbers';
import { addRouterExtensionMethods } from '@shared/common/base/router';
import { isUndefinedOrNull } from '@shared/common/base/types';
import { ApiEndpoint, SupportApiEndpoints } from '@shared/common/constants/api-endpoint';
import { navigateToErrorPage, navigateToNotAuthorizedPage } from '@shared/common/route-helper';
import { initialState } from '@shared/common/store/initial-state';
import { addCustomValidationRules } from '@shared/common/validation-rules/custom-validation-rules';
import { dialogPlugin, i18nPlugin, setupAgGrid } from '@shared/plugin-registry';
import { hasNoAccessTo } from '@shared/services/acl-service';
import { fetchUserPolicies } from '@shared/services/api/assets/user-api-service';
import { getApplicationSettings } from '@shared/services/application-api-service';
import { configureEndpoints, configureHttpClientForAssetsApi } from '@shared/services/default-fetch-client';
import { Config } from 'aurelia-api';
import { Aurelia } from 'aurelia-framework';
import { I18N } from 'aurelia-i18n';
import { PLATFORM } from 'aurelia-pal';
import { LogLevel } from 'aurelia-store';
import 'barcode-detector/side-effects';

import '../styles/main.css';
import '../styles/material-components.scss';

// The value is supplied by Webpack during the build
declare const IS_DEV_BUILD: boolean;

export async function configure(aurelia: Aurelia): Promise<void> {
    const webAppSettings = await getApplicationSettings();

    if (isUndefinedOrNull(webAppSettings)) {
        return navigateToErrorPage();
    }

    configureHttpClientForAssetsApi(webAppSettings);

    await fetchUserPolicies();

    if (hasNoAccessTo('Admin', 'SupportRead', 'Support')) {
        return navigateToNotAuthorizedPage();
    }

    configureAuPlugins(aurelia);
    setupAgGrid(webAppSettings.licenseKeys.agGridKey);
    configureEndpoints(aurelia, webAppSettings, SupportApiEndpoints);

    addFlagExtensionMethods();
    addRouterExtensionMethods();

    await aurelia.start();
    addCustomValidationRules();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}

function configureAuPlugins(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .feature(PLATFORM.moduleName('@shared/common/validation-renderer/index'))
        .feature(PLATFORM.moduleName('resources/value-converters/index'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/base'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/linear-progress'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'))
        .plugin(PLATFORM.moduleName('aurelia-dialog'), dialogPlugin)
        .plugin(PLATFORM.moduleName('aurelia-validation'))
        .plugin(PLATFORM.moduleName('aurelia-api'), (config: Config) =>
            config.setDefaultEndpoint(ApiEndpoint.sameOrigin)
        )
        .plugin(PLATFORM.moduleName('aurelia-i18n'), (instance: I18N) => i18nPlugin(aurelia, instance))
        .plugin(PLATFORM.moduleName('aurelia-store'), { initialState })
        .plugin(PLATFORM.moduleName('aurelia-ui-virtualization'))
        .feature(PLATFORM.moduleName('resources/index'))
        .developmentLogging(IS_DEV_BUILD ? LogLevel.debug : LogLevel.error);
}
