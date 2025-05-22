// JS de URLSearchParams class'i sayesinde url'deki arama parametrelerine erisip kullanabiliriz.

import { fetchMenu } from "./api.js";
import { renderDetailPage } from "./ui.js";

console.log(window.location.search);
// URLSearchParams() icerisine 'window.location.search' ozelligini vermemiz gerekiyor.
const params = new URLSearchParams(window.location.search);

const menuElId = +params.get("id"); // burada + operatoru otomatik olarak Numbe'a cevirir.

document.addEventListener("DOMContentLoaded", async () => {
  // Api'dan menü elemanlarını al
  const data = await fetchMenu();
  const detailProduct = data.find((item) => item.id == menuElId);

  renderDetailPage(detailProduct , wrapper);
});
