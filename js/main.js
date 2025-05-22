import { fetchMenu } from "./api.js";
import { renderCards, uiElements } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const menuList = await fetchMenu();
  renderCards(menuList);
  console.log(menuList);

  uiElements.inputs.forEach((item) => {
    item.addEventListener("change", () => {
      let newList = menuList.filter((el) => el.category == item.id);
      !newList.length ? renderCards(menuList) : renderCards(newList);
    });
  });
});

console.log(uiElements.inputs);
