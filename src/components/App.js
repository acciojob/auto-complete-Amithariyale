
import React ,{useState}from "react";
import './../styles/App.css';

const data = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [fruits, setFruits] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncing(() => {
      setFruits(
        data.filter((fruit) => {
          return fruit.toLowerCase().includes(value.toLowerCase());
        })
      );
    }, 500);
  };
  let timeout;
  const debouncing = (callback, delay) => {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
  return (
    <div>
      <h1>Search item</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default App
