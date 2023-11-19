// App.js
import "./index.css";
import shop1Image from "./assets/images/shop1.png";
import shop2Image from "./assets/images/shop2.png";
import shop3Image from "./assets/images/shop3.png";
import ShopCard from "./components/ShopCard";

const shopsData = [
  {
    id: 1,
    name: "Shop 1",
    image: shop1Image,
    taxAmount: 1500,
    dueDate: "2023-08-15",
    isPaid: true, // Add a property to track if tax is paid or not
  },
  {
    id: 2,
    name: "Shop 2",
    image: shop2Image,
    taxAmount: 1200,
    dueDate: "2023-08-20",
    isPaid: true,
  },
  {
    id: 3,
    name: "Shop 3",
    image: shop3Image,
    taxAmount: 1800,
    dueDate: "2023-08-10",
    isPaid: false,
  },
  // Add more shops here...
];

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Shops Tax Details</h1>
      </header>
      <div className="shops-container">
        {shopsData.map((shop) => (
          <ShopCard shop={shop} key={shop.id} />
        ))}

      </div>
    </div>
  );
};

export default App;
