import './App.css';
import {useEffect, useState} from "react";
import {ACCESS_TOKEN} from "./const";
import Sorting from "./components/sorting/sorting";
import {SORT_TYPES} from "./utils";
import Table from "./components/table/table";

function App() {
    const [leads, setLeads] = useState([])
    const [sortType, setType] = useState(SORT_TYPES.DEFAULT)

    useEffect(() => {
        fetch('/api/v4/leads', {
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`,
                "Access-Control-Allow-Headers": '*'
            }
        }).then((res) => res.json()).then((res) => setLeads(res._embedded.leads)).catch((e) => console.error(e))
    }, [])


    return (
        <div className="App">
            <div className="container">
                <div className='row mt-5'>
                    <Sorting hook={setType} value={sortType}/>
                </div>
                <div className="row mt-5">
                    {leads.length > 0 ? <Table rows={leads} sortType={sortType}/> : <span className='loading'>Загрузка...</span>}
                </div>
            </div>
        </div>
    );
}

export default App;
