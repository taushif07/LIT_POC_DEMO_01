import { WidgetOne as Widget1 } from "./widgets/widget1/widget1";
import { WidgetTwo as Widget2 } from "./widgets/widget2/widget2";

// Export both widgets to be bundled together
export { Widget1, Widget2 };

document.addEventListener("DOMContentLoaded", () => {
  // Widget 1
  const widgetOneContainer = document.createElement("div");
  widgetOneContainer.innerHTML = "<widget-one></widget-one>";
  document.body.appendChild(widgetOneContainer);

  // Widget 2
  const widgetTwoContainer = document.createElement("div");
  widgetTwoContainer.innerHTML = "<widget-two></widget-two>";
  document.body.appendChild(widgetTwoContainer);
});
