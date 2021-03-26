import React, { useEffect } from "react";
import { store } from ".";
import "./App.css";
import CheckList from "./components/CheckList";
import InitialList from "./components/InitialList";
import Cuisines from "./db/cuisines.json";
import { cuisineFile, restaurantFile } from "./store/actions";

function App() {
  useEffect(() => {
    store.dispatch(cuisineFile());
    store.dispatch(restaurantFile());
  }, []);

  return (
    <div className="App">
      <CheckList />
      <InitialList />
    </div>
  );
}

export default App;
