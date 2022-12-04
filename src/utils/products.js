const products = [
  {
    id: 30,
    name: "Miss Dior (Floral) - 100 ml",
    stock: 15,
    cost: 3500,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 1500,
    image: [
      "https://i.pinimg.com/736x/60/d6/79/60d679e1f6497577d22ce57885008732.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-9T05:11:04.952Z",
    updatedAt: "2022-11-9T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Floral",
      id: 9
    },
    brand: {
      id: 95,
      name: "Miss Dior"
    },
    reviews: []
  },
  {
    id: 29,
    name: "Las Pepas (Floral) - 50 ml",
    stock: 10,
    cost: 5000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 50,
    image: [
      "https://latinafy.com/images/detailed/30/las-pepas-ninfa-eau-de-parfum-perfume-fragancia-violeta-100-ml-1.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Floral",
      id: 9
    },
    brand: {
      id: 95,
      name: "Las pepas"
    },
    reviews: [
      {
        "comment": "Muy rico y refrescante",
        "rating": "4"
      }
    ]
  },
  {
    id: 76,
    name: "Boss (Dulce) 50 ml",
    stock: 32,
    cost: 4700,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo",
    capacity: 50,
    image: [
      "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2022/06/30/16565958034327.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.030Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Dulce",
      id: 1
    },
    brand: {
      id: 10,
      name: "Boss"
    },
    reviews: []
  },
  {
    id: 170,
    name: "Dolce Gabbana (Dulce) - 70ml",
    stock: 24,
    cost: 5075,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 70,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutGUsERGW_hzW5FCAKyCfjNWyoeHqSgW94A&usqp=CAU"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.032Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Dulce",
      id: 1
    },
    brand: {
      id: 10,
      name: "Dolce Gabbana"
    },
    reviews: []
  },
  {
    id: 233,
    name: "Calvin Klein (Fresco) 100 ml",
    stock: 18,
    cost: 7650,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 100,
    image: [
      "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/05/28/16222335667625.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.031Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Calvin Klein One",
      id: 1
    },
    brand: {
      id: 10,
      name: "Fresco"
    },
    reviews: []
  },
  {
    id: 139,
    name: "Chanel Chance (Fresco) 50 ml",
    stock: 30,
    cost: 4900,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 50,
    image: [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colonias-frescas-chanel-1660030510.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.030Z",
    categoryId: 1,
    brandId: 16,
    packingId: null,
    category: {
      name: "Fresco",
      id: 1
    },
    brand: {
      id: 16,
      name: "Chanel Chance"
    },
    reviews: []
  },
  {
    id: 68,
    name: "Tommy Girl  (Citrico) - 70 ml",
    stock: 42,
    cost: 5090,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 70,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs-_QYMhWctpeO5Y-1ZUGhrsq5PJybU4zRA&usqp=CAU"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.032Z",
    categoryId: 1,
    brandId: 16,
    packingId: null,
    category: {
      name: "Citrico",
      id: 1
    },
    brand: {
      id: 16,
      name: "Tommy Girl"
    },
    reviews: []
  },
  {
    id: 222,
    name: "Escada (Citrico) - 75 ml",
    stock: 10,
    cost: 3000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 75,
    image: [
      "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/08/08/5fa5072193424.jpeg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.032Z",
    categoryId: 1,
    brandId: 16,
    packingId: null,
    category: {
      name: "Citrico",
      id: 1
    },
    brand: {
      id: 16,
      name: "Escada"
    },
    reviews: []
  },
  {
    id: 135,
    name: "Touch Tous (Frutal) - 50 ml",
    stock: 20,
    cost: 4900,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 50,
    image: [
      "https://phantom-telva.unidadeditorial.es/bb8fd98d4ec65f769773b23f61854b93/crop/0x147/2046x1230/resize/828/f/webp/assets/multimedia/imagenes/2020/01/02/15779901844073.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T16:10:21.032Z",
    categoryId: 1,
    brandId: 16,
    packingId: null,
    category: {
      name: "Frutal",
      id: 1
    },
    brand: {
      id: 16,
      name: "Touch Tous"
    },
    reviews: []
  },
  {
    id: 31,
    name: "BurBerry (Frutal) - 80 ml",
    stock: 9,
    cost: 6500,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 80,
    image: [
      "https://media.glamour.mx/photos/61905b862d97bd4c522a3e76/master/w_1600%2Cc_limit/252211.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-09T05:11:04.952Z",
    updatedAt: "2022-11-09T11:08:17.792Z",
    categoryId: 5,
    brandId: 17,
    packingId: null,
    category: {
      name: "Frutal",
      id: 5
    },
    brand: {
      id: 17,
      name: ""
    },
    reviews: []
  }
];

module.exports = {
  products
}
