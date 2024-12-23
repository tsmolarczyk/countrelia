import { Aurelia } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import environment from "../config/environment.json";

import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/app-tailwind.css";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
