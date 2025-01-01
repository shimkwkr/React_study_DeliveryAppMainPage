let nextId = 20230420;

const generateId = (text = `${nextId++}`) => {
  const m = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; // 0 ~ 9
  let hash = "";

  for (let i = 0; i < text.length; i++) {
    if (i > text.length / 2) {
      hash += text[i];
    } else {
      hash += m[Number(text[i])];
    }
  }
  return hash.toUpperCase();
};

const data = {
  products: [
    {
      id: generateId(),
      name: "해물 계란 라면",
      price: 6000,
      thumbnail: "./images/menu-해물계란라면.jpg",
    },
    {
      id: generateId(),
      name: "햄 야채 토스트",
      price: 8000,
      thumbnail: "./images/menu-햄야채토스트.jpg",
    },
    {
      id: generateId(),
      name: "프레시 케밥",
      price: 8000,
      thumbnail: "./images/menu-프레시케밥.jpg",
    },
    {
      id: generateId(),
      name: "부드러운 치즈 버거",
      price: 15000,
      thumbnail: "./images/menu-부드러운치즈버거.jpg",
    },
    {
      id: generateId(),
      name: "매운 푸팟퐁 커리",
      price: 20000,
      thumbnail: "./images/menu-매운푸팟퐁커리.jpg",
    },
  ],

  order: [],
}

export default data;