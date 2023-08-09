import "./styles.css";
import { useState } from "react";
import fruits from "./data";
export default function App() {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState(fruits);
  const searchResult = (e) => {
    setValue(e.target.value);
    if (value === "") {
      setProduct(fruits);
      return;
    }
    const filterBySearch = product.filter((item) => {
      if (item.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    setProduct(filterBySearch);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        placeholder="type here"
        value={value}
        onChange={searchResult}
      />
      {product.map((fruit, index) => {
        return <div key={index}>{fruit}</div>;
      })}
    </div>
  );
}
