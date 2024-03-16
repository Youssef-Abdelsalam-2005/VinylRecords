import "./App.css";
import Table from "./table";
import Fields from "./fields";
import { useState, useEffect } from "react";

function App() {
  const [records, setRecords] = useState([]);

  return (
    <>
      <header>
        <h1>Vinyl Records</h1>
      </header>
      <div id="container">
        <Fields />
      </div>
    </>
  );
}

export default App;
