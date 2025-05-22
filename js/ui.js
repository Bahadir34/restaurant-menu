const uiElements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  wrapper: document.querySelector("#wrapper"),
};

const renderCards = (data) => {
  const menuEl = data
    .map(
      (item) =>
        `
  <a href="/detail.html?id=${
    item.id
  }" id="card" class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none">
          
        <img
           src="${item.img}"
           alt="card-image"
           class="rounded img-fluid shadow"
         />
         
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="fw-bold text-success">${(item.price * 60).toFixed(2)}</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a>
      `
    )
    .join("");

  uiElements.menuList.innerHTML = menuEl;
};

const renderDetailPage = (item, outlet) => {
  console.log(item);
  outlet.innerHTML = `
  <div class="d-flex justify-content-between">
        <a href="/">
          <img src="./images/home.png" width="35px" alt="menu-icon" />
         </a>
        <a href="#" class="text-dark text-decoration-none">
          anasayfa / breakfast / Süzme Pankek
        </a>
      </div>
      <h1 class="text-center">Suzme Pankek</h1>

      <img
        src="${item.img}"
        alt="product-image"
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
      />
      <h4>
        Urun Kategorisi : <span class="fw-bold text-success">${
          item.category
        }</span>
      </h4>
      <h4>Urun Fiyati : <span class="fw-bold text-success">${(
        item.price * 60
      ).toFixed(2)}₺</span></h4>
      <p class="lead">
        ${item.desc}
      </p>
  `;
};

export { uiElements, renderCards, renderDetailPage };
