import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [forms, setForms] = useState([]);
  return (
    <>
      <Header forms={forms} />
      <Cards forms={forms} setForms={setForms} />
    </>
  );
}

export default App;
