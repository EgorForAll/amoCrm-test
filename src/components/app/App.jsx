import './App.css';
import {useEffect, useState} from "react";
import {ACCESS_TOKEN} from "../../const/const";
import Sorting from "../sorting/sorting";
import {SORT_TYPES} from "../../utils/utils";
import Table from "../table/table";

function App() {
    const [leads, setLeads] = useState([])
    const [sortType, setSortType] = useState(SORT_TYPES.NAME)

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
                    <Sorting hook={setSortType} sortType={sortType}/>
                </div>
                <div className="row mt-5">
                    {leads.length > 0 ? <Table rows={leads} sortType={sortType}/> : <span className='loading'>Загрузка...</span>}
                </div>
            </div>
        </div>
    );
}

export default App;
