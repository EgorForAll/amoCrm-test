import './App.css';
import {useEffect, useState} from "react";
import {ACCESS_TOKEN} from "../../const/const";
import Sorting from "../sorting/sorting";
import {PAGINATION_TYPE, SORT_TYPES} from "../../utils/utils";
import Table from "../table/table";
import Pagination from "../pagination/pagination";

function App() {
    const [leads, setLeads] = useState([])
    const [sortType, setSortType] = useState(SORT_TYPES.NAME)
    const [paginationType, setPaginationType] = useState(PAGINATION_TYPE.DEFAULT)

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
                <div className='row mt-5 d-flex justify-content-between'>
                    <Sorting hook={setSortType} sortType={sortType}/>
                    <Pagination hook={setPaginationType} value={paginationType}/>
                </div>
                <div className="row mt-5">
                    {leads.length > 0 ? <Table rows={leads} sortType={sortType} paginationType={paginationType}/> : <span className='loading'>Загрузка...</span>}
                </div>
            </div>
        </div>
    );
}

export default App;
