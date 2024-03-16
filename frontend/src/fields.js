import { useState } from "react";
import Table from "./table";

function Fields() {
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [records, setRecords] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    fetchRecords(lastName, city);
  };

  const fetchRecords = async (lastName, city) => {
    const response = await fetch(
      `http://127.0.0.1:3001/api/${lastName}/${city}`
    );
    const data = await response.json();
    console.log(data);
    setRecords(data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
      <Table records={records} />
    </>
  );
}

export default Fields;
