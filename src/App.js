import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Web Application</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
