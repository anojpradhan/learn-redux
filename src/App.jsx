// import { useState } from "react";
// import "./App.css";
// import Counter from "./components/Counter";
// import { useDispatch } from "react-redux";

// function App() {
//   const dispatch = useDispatch();

//   return (
//     <div className="app">
//       <Counter />
//       <div className="btns">
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import products from "./products.json";
import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Products";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
