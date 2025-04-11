import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import dropdownStyles from "./Dropdown.css?inline";

@customElement("widget-two-dropdown-component")
export class DropdownComponent extends LitElement {
  static styles = unsafeCSS(dropdownStyles);

  @property({ type: Array }) options: { value: string; label: string }[] = [];
  @property({ type: String }) value: string = "";

  render() {
    return html`
      <div class="dropdown-wrapper">
        <select
          class="dropdown"
          .value=${this.value}
          @change=${this._handleDropdownChange}
        >
          ${this.options.map(
            (option) => html`
              <option value="${option.value}">${option.label}</option>
            `
          )}
        </select>
      </div>
    `;
  }

  private _handleDropdownChange(e: Event) {
    const newValue = (e.target as HTMLSelectElement).value;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: newValue,
        bubbles: true,
        composed: true,
      })
    );
  }
}
