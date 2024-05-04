import Filter from "./components/Filter/Filter.jsx";
import Badge from "./components/Badge/Badge.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card.jsx";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit: 10,
            offset: 0,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      setData(json?.jdList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Badge />
      <Filter data={data} />
      <Card data={data} />
    </div>
  );
}

export default App;
