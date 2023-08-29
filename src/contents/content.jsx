import { Button } from "@mui/material";

export const btnMenu = [
  { id: 1, title: "ข้อมูลลูกค้า" },
  { id: 2, title: "พนักงานรับออเดอร์" },
  { id: 3, title: "รวมโต๊ะ" },
  { id: 4, title: "ย้ายโต๊ะ" },
];
export const navItem = [
  { id: 1, title: "ขาย" },
  { id: 2, title: "โต๊ะ" },
  { id: 3, title: "ใบเสร็จ" },
  { id: 4, title: "บิลทั้งหมด" },
  { id: 5, title: "ลิ้นชักเงินสด" },
];

export const sideItem = [
  { id: 1, title: "Premium set" },
  { id: 2, title: "บุฟเฟต์" },
  { id: 3, title: "ข้าวเปียก" },
  { id: 4, title: "เพิ่มเครื่องข้าวเปียก" },
  { id: 5, title: "โจ๊ก" },
  { id: 6, title: "วุ้นเส้น" },
  { id: 7, title: "มาม่า" },
  { id: 8, title: "เครื่องดื่ม" },
  { id: 9, title: "ยำ" },
  { id: 10, title: "ลูกชิ้น" },
  { id: 11, title: "หมูยอ" },
  { id: 12, title: "ปากหม้อ" },
  { id: 13, title: "..." },
  { id: 14, title: "..." },
];

export const rows = [
  // {
  //     id:1222412336e5,
  //     title: "Brown eggs",
  //     type: "dairy",
  //     description: "Raw organic brown eggs in a basket",
  //     img: "https://images.pexels.com/photos/2831799/pexels-photo-2831799.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     height: 600,
  //     width: 400,
  //     price: 28.1,
  //     rating: 4
  // },
];

export const columns = [
  { field: "title", headerName: "รายการ", width: 180 },
  {
    field: "amount",
    headerName: "จำนวน",
    width: 150,
    renderCell: (columns) => {
      return <Button>{columns.row.amount}</Button>;
    },
  },
  { field: "price", headerName: "จำนวนเงิน", width: 90 },
];

export const foods = [
  {
    id: 1,
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    img: "https://images.pexels.com/photos/2831799/pexels-photo-2831799.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 600,
    width: 400,
    price: 28.1,
    quantity: 1,
  },
  {
    id: 2,
    title: "Sweet fresh stawberry",
    type: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    img: "https://images.pexels.com/photos/3186961/pexels-photo-3186961.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 450,
    width: 299,
    price: 29.45,
    quantity: 1,
  },
  {
    id: 3,
    title: "Asparagus",
    type: "vegetable",
    description: "Asparagus with ham on the wooden table",
    img: "https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 450,
    width: 299,
    price: 18.95,
    quantity: 1,
  },
  {
    id: 4,
    title: "Green smoothie",
    type: "dairy",
    description:
      "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    img: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 600,
    width: 399,
    price: 17.68,
    quantity: 1,
  },
  {
    id: 5,
    title: "Raw legums",
    type: "vegetable",
    description: "Raw legums on the wooden table",
    img: "https://images.pexels.com/photos/4963956/pexels-photo-4963956.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 450,
    width: 299,
    price: 17.11,
    quantity: 1,
  },
  {
    id: 6,
    title: "Baking cake",
    type: "dairy",
    description:
      "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    height: 450,
    width: 675,
    price: 11.14,
    quantity: 1,
  },

  //   {
  //     "title": "Pesto with basil",
  //     "type": "vegetable",
  //     "description": "Italian traditional pesto with basil, chesse and oil",
  //     "img": "6.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 18.19,
  //     "rating": 2
  //   }, {
  //     "title": "Hazelnut in black ceramic bowl",
  //     "type": "vegetable",
  //     "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
  //     "img": "7.jpg",
  //     "height": 450,
  //     "width": 301,
  //     "price": 27.35,
  //     "rating": 0
  //   }, {
  //     "title": "Fresh stawberry",
  //     "type": "fruit",
  //     "description": "Sweet fresh stawberry on the wooden table",
  //     "img": "8.jpg",
  //     "height": 600,
  //     "width": 399,
  //     "price": 28.59,
  //     "rating": 4
  //   }, {
  //     "title": "Lemon and salt",
  //     "type": "fruit",
  //     "description": "Rosemary, lemon and salt on the table",
  //     "img": "9.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 15.79,
  //     "rating": 5
  //   }, {
  //     "title": "Homemade bread",
  //     "type": "bakery",
  //     "description": "Homemade bread",
  //     "img": "10.jpg",
  //     "height": 450,
  //     "width": 301,
  //     "price": 17.48,
  //     "rating": 3
  //   }, {
  //     "title": "Legums",
  //     "type": "vegetable",
  //     "description": "Cooked legums on the wooden table",
  //     "img": "11.jpg",
  //     "height": 600,
  //     "width": 399,
  //     "price": 14.77,
  //     "rating": 0
  //   }, {
  //     "title": "Fresh tomato",
  //     "type": "vegetable",
  //     "description": "Fresh tomato juice with basil",
  //     "img": "12.jpg",
  //     "height": 600,
  //     "width": 903,
  //     "price": 16.3,
  //     "rating": 2
  //   }, {
  //     "title": "Healthy breakfast",
  //     "type": "fruit",
  //     "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
  //     "img": "13.jpg",
  //     "height": 450,
  //     "width": 350,
  //     "price": 13.02,
  //     "rating": 2
  //   }, {
  //     "title": "Green beans",
  //     "type": "vegetable",
  //     "description": "Raw organic green beans ready to eat",
  //     "img": "14.jpg",
  //     "height": 450,
  //     "width": 300,
  //     "price": 28.79,
  //     "rating": 1
  //   }, {
  //     "title": "Baked stuffed portabello mushrooms",
  //     "type": "bakery",
  //     "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
  //     "img": "15.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 20.31,
  //     "rating": 1
  //   }, {
  //     "title": "Strawberry jelly",
  //     "type": "fruit",
  //     "description": "Homemade organic strawberry jelly in a jar",
  //     "img": "16.jpg",
  //     "height": 400,
  //     "width": 600,
  //     "price": 14.18,
  //     "rating": 1
  //   }, {
  //     "title": "Pears juice",
  //     "type": "fruit",
  //     "description": "Fresh pears juice on the wooden table",
  //     "img": "17.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 19.49,
  //     "rating": 4
  //   }, {
  //     "title": "Fresh pears",
  //     "type": "fruit",
  //     "description": "Sweet fresh pears on the wooden table",
  //     "img": "18.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 15.12,
  //     "rating": 5
  //   }, {
  //     "title": "Caprese salad",
  //     "type": "vegetable",
  //     "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
  //     "img": "19.jpg",
  //     "height": 400,
  //     "width": 600,
  //     "price": 16.76,
  //     "rating": 5
  //   }, {
  //     "title": "Oranges",
  //     "type": "fruit",
  //     "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
  //     "img": "20.jpg",
  //     "height": 450,
  //     "width": 274,
  //     "price": 21.48,
  //     "rating": 4
  //   }, {
  //     "title": "Vegan food",
  //     "type": "vegetable",
  //     "description": "Concept of vegan food",
  //     "img": "21.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 29.66,
  //     "rating": 4
  //   }, {
  //     "title": "Breakfast with muesli",
  //     "type": "dairy",
  //     "description": "Concept of healthy breakfast with muesli",
  //     "img": "22.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 22.7,
  //     "rating": 2
  //   }, {
  //     "title": "Honey",
  //     "type": "bakery",
  //     "description": "Honey and honeycell on the table",
  //     "img": "23.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 17.01,
  //     "rating": 2
  //   }, {
  //     "title": "Breakfast with cottage",
  //     "type": "fruit",
  //     "description": "Healthy breakfast with cottage cheese and strawberry",
  //     "img": "24.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 14.05,
  //     "rating": 1
  //   }, {
  //     "title": "Strawberry smoothie",
  //     "type": "fruit",
  //     "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
  //     "img": "25.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 28.86,
  //     "rating": 2
  //   }, {
  //     "title": "Strawberry and mint",
  //     "type": "fruit",
  //     "description": "Homemade muesli with strawberry and mint",
  //     "img": "26.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 26.21,
  //     "rating": 4
  //   }, {
  //     "title": "Ricotta",
  //     "type": "dairy",
  //     "description": "Ricotta with berry and mint",
  //     "img": "27.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 27.81,
  //     "rating": 5
  //   }, {
  //     "title": "Cuban sandwiche",
  //     "type": "bakery",
  //     "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
  //     "img": "28.jpg",
  //     "height": 450,
  //     "width": 300,
  //     "price": 18.5,
  //     "rating": 4
  //   }, {
  //     "title": "Granola",
  //     "type": "dairy",
  //     "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
  //     "img": "29.jpg",
  //     "height": 450,
  //     "width": 300,
  //     "price": 29.97,
  //     "rating": 3
  //   }, {
  //     "title": "Smoothie with chia seeds",
  //     "type": "fruit",
  //     "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
  //     "img": "30.jpg",
  //     "height": 600,
  //     "width": 900,
  //     "price": 25.26,
  //     "rating": 5
  //   }, {
  //     "title": "Yogurt",
  //     "type": "dairy",
  //     "description": "Homemade yogurt with raspberry and mint",
  //     "img": "31.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 27.61,
  //     "rating": 4
  //   }, {
  //     "title": "Sandwich with salad",
  //     "type": "vegetable",
  //     "description": "Vegan sandwich with salad, tomato and radish",
  //     "img": "32.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 22.48,
  //     "rating": 5
  //   }, {
  //     "title": "Cherry",
  //     "type": "fruit",
  //     "description": "Cherry with sugar on old table",
  //     "img": "33.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 14.35,
  //     "rating": 5
  //   }, {
  //     "title": "Raw asparagus",
  //     "type": "vegetable",
  //     "description": "Raw fresh asparagus salad with cheese and dressing",
  //     "img": "34.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 22.97,
  //     "rating": 4
  //   }, {
  //     "title": "Corn",
  //     "type": "vegetable",
  //     "description": "Grilled corn on the cob with salt and butter",
  //     "img": "35.jpg",
  //     "height": 450,
  //     "width": 300,
  //     "price": 13.55,
  //     "rating": 2
  //   }, {
  //     "title": "Vegan",
  //     "type": "vegan",
  //     "description": "Concept of healthy vegan eating",
  //     "img": "36.jpg",
  //     "height": 600,
  //     "width": 398,
  //     "price": 28.96,
  //     "rating": 5
  //   }, {
  //     "title": "Fresh blueberries",
  //     "type": "fruit",
  //     "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
  //     "img": "37.jpg",
  //     "height": 450,
  //     "width": 321,
  //     "price": 21.01,
  //     "rating": 4
  //   }, {
  //     "title": "Smashed avocado",
  //     "type": "fruit",
  //     "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
  //     "img": "38.jpg",
  //     "height": 450,
  //     "width": 450,
  //     "price": 25.88,
  //     "rating": 0
  //   }, {
  //     "title": "Italian ciabatta",
  //     "type": "bakery",
  //     "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
  //     "img": "39.jpg",
  //     "height": 450,
  //     "width": 565,
  //     "price": 15.18,
  //     "rating": 1
  //   }, {
  //     "title": "Rustic breakfast",
  //     "type": "dairy",
  //     "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
  //     "img": "40.jpg",
  //     "height": 450,
  //     "width": 307,
  //     "price": 21.32,
  //     "rating": 0
  //   }, {
  //     "title": "Sliced lemons",
  //     "type": "fruit",
  //     "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
  //     "img": "41.jpg",
  //     "height": 600,
  //     "width": 900,
  //     "price": 27.14,
  //     "rating": 2
  //   }, {
  //     "title": "Plums",
  //     "type": "fruit",
  //     "description": "Yellow and red sweet plums",
  //     "img": "42.jpg",
  //     "height": 450,
  //     "width": 299,
  //     "price": 19.18,
  //     "rating": 1
  //   }, {
  //     "title": "French fries",
  //     "type": "bakery",
  //     "description": "Homemade oven baked french fries with ketchup",
  //     "img": "43.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 18.32,
  //     "rating": 3
  //   }, {
  //     "title": "Strawberries",
  //     "type": "fruit",
  //     "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
  //     "img": "44.jpg",
  //     "height": 450,
  //     "width": 352,
  //     "price": 15.13,
  //     "rating": 3
  //   }, {
  //     "title": "Ground beef meat burger",
  //     "type": "meat",
  //     "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
  //     "img": "45.jpg",
  //     "height": 450,
  //     "width": 675,
  //     "price": 11.73,
  //     "rating": 5
  //   }, {
  //     "title": "Tomatoes",
  //     "type": "fruit",
  //     "description": "Organic tomatoes made with love",
  //     "img": "46.jpg",
  //     "height": 450,
  //     "width": 675,
  //     "price": 26.03,
  //     "rating": 4
  //   }, {
  //     "title": "Basil",
  //     "type": "vegetable",
  //     "description": "Concept of vegan food with basil",
  //     "img": "47.jpg",
  //     "height": 450,
  //     "width": 678,
  //     "price": 15.19,
  //     "rating": 4
  //   }, {
  //     "title": "Fruits bouquet",
  //     "type": "fruit",
  //     "description": "Abstract citrus fruits bouquet on blue background",
  //     "img": "48.jpg",
  //     "height": 600,
  //     "width": 401,
  //     "price": 18.18,
  //     "rating": 1
  //   }, {
  //     "title": "Peaches on branch",
  //     "type": "fruit",
  //     "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
  //     "img": "49.jpg",
  //     "height": 600,
  //     "width": 400,
  //     "price": 25.62,
  //     "rating": 3
  //   }
];
