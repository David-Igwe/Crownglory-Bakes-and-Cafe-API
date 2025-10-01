const connectDB = require("../utils/connectDB.js");
connectDB();

const Item = require("../models/item.js");

const items = [
  {
    name: "Royal Sunrise Espresso",
    price: 1500,
    description:
      "A bold, rich shot of espresso with a smooth crema finish — perfect for kickstarting your day.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459653/Crownglory%20Bakes%20and%20Cafe/Beverages/espresso_r2xcfb.jpg",
  },
  {
    name: "Majesty Americano",
    price: 1800,
    description:
      "Our espresso mellowed with hot water for a smooth, lighter sip—ideal for those who like depth without the richness.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459649/Crownglory%20Bakes%20and%20Cafe/Beverages/americano_dr6ipm.jpg",
  },
  {
    name: "Velvet Crown Cappuccino",
    price: 1800,
    description:
      "Steamed milk and airy foam layered over espresso, dusted with a hint of cocoa—luxurious and comforting.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459650/Crownglory%20Bakes%20and%20Cafe/Beverages/cappucino_lfvafd.jpg",
  },
  {
    name: "Silken Latte",
    price: 2000,
    description:
      "Creamy and mellow—espresso meets steamed milk in harmony, with optional vanilla or caramel swirl for sweetness.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459660/Crownglory%20Bakes%20and%20Cafe/Beverages/latte_kwvlqt.jpg",
  },
  {
    name: "Chocolate Throne Mocha",
    price: 1800,
    description:
      "Indulgent mocha with melted chocolate, whipped cream, and a dusting of cocoa—dessert in a cup.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459665/Crownglory%20Bakes%20and%20Cafe/Beverages/mocha_mh0wn7.jpg",
  },
  {
    name: "Classic Filter Brew",
    price: 1400,
    description:
      "Hand-poured, mild roast, smooth finish—served with optional milk or sugar; perfect for a lingering morning",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459649/Crownglory%20Bakes%20and%20Cafe/Beverages/filter_coffee_z6hqvk.jpg",
  },
  {
    name: "Regal Black Tea",
    price: 1000,
    description:
      "Our masterfully selected leaves are hand-rolled and fully oxidized to produce a deep, amber liquor with a rich, malty profile. Experience velvety caramel and a hint of brisk spice that culminates in a smooth, lingering finish.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459649/Crownglory%20Bakes%20and%20Cafe/Beverages/black_tea_pwul1j.jpg",
  },
  {
    name: "Golden Leaf Green Tea",
    price: 2000,
    description:
      "Light, delicate, naturally refreshing—serves as a palate cleanser or gentle start to the morning.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459662/Crownglory%20Bakes%20and%20Cafe/Beverages/green_tea_x49fn1.jpg",
  },
  {
    name: "Crystal Iced Tea",
    price: 1200,
    description:
      "Slow-steeped locally roasted beans served over ice; refreshing, crisp, and made for the heat.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459655/Crownglory%20Bakes%20and%20Cafe/Beverages/iced_tea_jeipsw.jpg",
  },
  {
    name: "Queen's Chai Tea",
    price: 1700,
    description:
      "Aromatic spiced tea brewed with cinnamon, cloves & cardamom, stirred in creamy milk—sweet, warming, fragrant.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459651/Crownglory%20Bakes%20and%20Cafe/Beverages/chai_tea_juhgfk.jpg",
  },
  {
    name: "Premium Bottled Water",
    price: 500,
    description:
      "With a crisp, clean taste with a naturally balanced mineral composition, it's not just water, it's a refreshing taste of the beautiful, untouched world.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459656/Crownglory%20Bakes%20and%20Cafe/Beverages/bottled_water_kg2ksa.jpg",
  },
  {
    name: "Zobo Hibiscus Drink",
    price: 1200,
    description:
      "A refreshing Nigerian hibiscus drink brewed with spices and served chilled.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758616521/Crownglory%20Bakes%20and%20Cafe/Beverages/zobo_pkcc5y.jpg",
  },
  {
    name: "Fresh Orange Juice",
    price: 1500,
    description:
      "Squeeze the day with our perfectly crafted orange juice. Picked at the peak of ripeness to ensure a bright, sweet, and tangy flavor in every bottle",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459659/Crownglory%20Bakes%20and%20Cafe/Beverages/orange_juice_pux7hl.jpg",
  },
  {
    name: "Fresh Pineapple Juice",
    price: 1500,
    description:
      "Experience the exquisite balance of sweet and tangy with our premium pineapple juice.With its rich, golden color and invigorating taste, it's a naturally energizing and delicious treat for any time of day.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459657/Crownglory%20Bakes%20and%20Cafe/Beverages/pineapple_juice_jr7n6x.jpg",
  },
  {
    name: "Fresh Mango Juice",
    price: 1500,
    description:
      "Indulge in the velvety smoothness and lush sweetness of our mango juice.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459652/Crownglory%20Bakes%20and%20Cafe/Beverages/mango_juice_dkthey.jpg",
  },
  {
    name: "Vanilla Buttercream Cake",
    price: 2000,
    description:
      "Light vanilla sponge filled and frosted with creamy butter-vanilla frosting; classic, elegant, unforgettable.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459605/Crownglory%20Bakes%20and%20Cafe/Food/Vanilla_Buttercream_Cake_t13btw.jpg",
  },
  {
    name: "Red Velvet Royale",
    price: 2300,
    description:
      "Deep red crimson cake with tangy cream cheese icing—sophisticated and visually stunning.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459604/Crownglory%20Bakes%20and%20Cafe/Food/Red_Velvet_Cake_knl9w5.jpg",
  },
  {
    name: "Crown Chocolate Cake",
    price: 2500,
    description:
      "Layers of moist chocolate sponge, covered with velvety chocolate fudge icing—decadent, rich, and a choc lover's dream.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459599/Crownglory%20Bakes%20and%20Cafe/Food/chocolate_cake_gol9fm.jpg",
  },
  {
    name: "Lemon Drizzle Cake",
    price: 2200,
    description:
      "Tangy lemon-infused sponge drenched in lemon syrup, with a glossy citrus glaze—bright, zesty, invigorating.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459594/Crownglory%20Bakes%20and%20Cafe/Food/Lemon_Drizzle_Cake_zoneap.jpg",
  },
  {
    name: "Carrot Walnut Jubilee Cake",
    price: 2500,
    description:
      "Spiced carrot cake studded with crunchy walnuts, swirled with cream cheese frosting and topped with a sprinkle of nutmeg.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459595/Crownglory%20Bakes%20and%20Cafe/Food/Carrot_Cake_fqtd72.jpg",
  },
  {
    name: "Chin-Chin",
    price: 1200,
    description:
      "Crunchy Nigerian snack biscuits, lightly sweetened—great for nibbling with tea.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459610/Crownglory%20Bakes%20and%20Cafe/Food/Chin_Chin_2100x_y9ljs4.png",
  },
  {
    name: "Glazed Doughnut",
    price: 1000,
    description:
      "Soft ring doughnut with choice of classic sugar, chocolate, or glazed icing—fun, sweet, perfect with coffee.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459607/Crownglory%20Bakes%20and%20Cafe/Food/Doughnut_qztcaz.jpg",
  },
  {
    name: "Golden Butter Croissant",
    price: 1500,
    description:
      "Flaky European-style croissant—rich butter, layered texture, slightly crisp outside, tender inside.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459603/Crownglory%20Bakes%20and%20Cafe/Food/croissant_yyvwau.jpg",
  },
  {
    name: "Puff-Puff",
    price: 1000,
    description:
      "Light, fluffy Nigerian fried dough balls, dusted with sugar or cinnamon—sweet, comforting, nostalgic.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459603/Crownglory%20Bakes%20and%20Cafe/Food/easy-puff-puff_ktdaqg.png",
  },
  {
    name: "Danish Delight",
    price: 1300,
    description:
      "Jelly-filled danishes, glazed and shimmering—balanced sweetness.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459598/Crownglory%20Bakes%20and%20Cafe/Food/Danish_Bagel_xamgky.jpg",
  },
  {
    name: "Spicy Sausage Rolls",
    price: 1500,
    description:
      "Puff pastry wrapped around seasoned sausage; spicy, savory, perfect grab-and-go.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459594/Crownglory%20Bakes%20and%20Cafe/Food/Sausage_Rolls_lueh2h.jpg",
  },
  {
    name: "Savory Meat Pie Royale",
    price: 1600,
    description:
      "Flaky pastry pocket filled with spiced minced meat, peas, carrots—comforting and hearty.",
    image:
      "https://res.cloudinary.com/dmgrue5xh/image/upload/q_100,r_60/v1758459594/Crownglory%20Bakes%20and%20Cafe/Food/Meat_Pie_nhlba9.jpg",
  },
];

Item.insertMany(items);
