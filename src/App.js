import './App.css';
import {useEffect, useState} from "react";
import {ACCESS_TOKEN} from "./const";

function App() {
  const [leads, setLeads] = useState()
  useEffect(() => {
    fetch('/api/v4/leads', {headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Access-Control-Allow-Headers": '*'
      }}).then((res) => res.json()).then((res) => setLeads(res._embedded.leads))
  })
  return (
    <div className="App">
        <h1>This is amoCRM test</h1>
    </div>
  );
}

export default App;
