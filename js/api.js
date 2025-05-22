const fetchMenu = async () => {
  let response = await fetch("../db.json"); // bu bir asenkron islemdir,
  let data = await response.json(); // bu da bir asenkron islemdir.
  // Yukaridaki islemler sirasi ile yapilirsa sonuc saglikli sekilde alinabilir.

  return data.menu;
};

export { fetchMenu };
