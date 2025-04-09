import { LitElement, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeCSS } from "lit";
import widgetStyles from "./widget2.css?inline";
import { DROPDOWN_OPTIONS, DROPDOWN_IDS } from "../../utils/common";
import "../../components/DropDown/Dropdown";
import "../../components/Button/Button";

@customElement("widget-two")
export class WidgetTwo extends LitElement {
  static styles = unsafeCSS(widgetStyles);

  @state() private dropdownValues = DROPDOWN_IDS.reduce(
    (acc, id) => ({
      ...acc,
      [id]: "option1",
    }),
    {} as Record<string, string>
  );

  @state() private result: string | null = null;
  @state() private isLoading = false;

  render() {
    return html`
      <div class="widget-container">
        <h1 class="widget-title">Widget Two</h1>

        <div class="dropdowns-grid">
          ${DROPDOWN_IDS.map(
            (id) => html`
              <dropdown-component
                class="dropdown-item"
                .options=${DROPDOWN_OPTIONS}
                .value=${this.dropdownValues[id]}
                @change=${(e: CustomEvent) =>
                  this._handleDropdownChange(id, e.detail)}
              ></dropdown-component>
            `
          )}
        </div>

        <button-component
          class="submit-button"
          label="Show Result"
          ?loading=${this.isLoading}
          @click=${this._handleSubmit}
        ></button-component>

        ${this.result
          ? html`
              <div class="result-display">
                <p class="result-text">${this.result}</p>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _handleDropdownChange(id: string, value: string) {
    this.dropdownValues = { ...this.dropdownValues, [id]: value };
  }

  private async _handleSubmit() {
    this.isLoading = true;
    this.result = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Get labels instead of values
      const results = DROPDOWN_IDS.map((id) => {
        const value = this.dropdownValues[id];
        const option = DROPDOWN_OPTIONS.find((opt) => opt.value === value);
        return `${id.replace("dropdown", "Option ")}: ${
          option?.label || "Unknown"
        }`;
      });

      this.result = `Widget Two Results: ${results.join(", ")}`;
    } catch (error) {
      this.result = "Error processing request";
    } finally {
      this.isLoading = false;
    }
  }
}
