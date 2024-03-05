import './App.css';
import {useEffect, useState} from "react";
import Sorting from "../sorting/sorting";
import {PAGINATION_TYPE, SORT_TYPES} from "../../utils/utils";
import Table from "../table/table";
import Pagination from "../pagination/pagination";
import {fetchFive} from "../../api/fetch-five";
import {fetchAll} from "../../api/fetch-all";

function App() {
    const [leads, setLeads] = useState([])
    const [sortType, setSortType] = useState(SORT_TYPES.NAME)
    const [paginationType, setPaginationType] = useState(PAGINATION_TYPE.DEFAULT)


    useEffect(() => {
        if (paginationType === PAGINATION_TYPE.DEFAULT) {
            fetchFive().then((res) => res.json()).then((res) => setLeads(res._embedded.leads)).catch((e) => console.error(e))
        } else {
            fetchAll().then((res) => setLeads(res._embedded.leads)).catch((e) => console.error(e))
        }

    }, [paginationType])


    return (
        <div className="App">
            <div className="container">
                <div className='row mt-5 d-flex justify-content-between'>
                    <Sorting hook={setSortType} sortType={sortType}/>
                    <Pagination hook={setPaginationType} value={paginationType}/>
                </div>
                <div className="row mt-5">
                    {leads.length > 0 ? <Table rows={leads} sortType={sortType} paginationType={paginationType}
                                               setLeads={setLeads}/> :
                        <span className='loading'>Загрузка...</span>}
                </div>
            </div>
        </div>
    );
}

export default App;
