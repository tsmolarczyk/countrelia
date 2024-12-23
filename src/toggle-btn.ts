export class ToggleBtn {
  public isDarkMode = false;

  public toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle("dark", this.isDarkMode);
  }
}
