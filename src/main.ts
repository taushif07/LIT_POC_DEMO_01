import "./widgets/widget1";
import "./widgets/widget2";

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
