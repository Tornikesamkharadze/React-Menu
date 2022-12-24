import { useState } from "react";
import items from "./Data/data";
import Menu from "./Menu";
import Categories from "./Categories";

const unicCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(unicCategories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const filteredItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
