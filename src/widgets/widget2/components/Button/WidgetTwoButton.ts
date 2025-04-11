import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import buttonStyles from "./WidgetTwoButton.css?inline";

@customElement("widget-two-button-component")
export class ButtonComponent extends LitElement {
  static styles = unsafeCSS(buttonStyles);

  @property({ type: String }) label: string = "Click Me";
  @property({ type: Boolean }) loading: boolean = false;

  render() {
    return html`
      <button class="btn" ?disabled=${this.loading} @click=${this._handleClick}>
        ${this.loading ? "Loading..." : this.label}
      </button>
    `;
  }

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("click", {
        bubbles: true,
        composed: true,
      })
    );
  }
}
