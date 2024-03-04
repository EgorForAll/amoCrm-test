import * as React from 'react';
import Row from "../row/row";
import {useEffect, useState} from "react";
import {SORT_TYPES, sortByName, sortByPrice} from "../../utils";

const Table = ({rows, sortType}) => {
    const [sortedLeads, setSortedLeads] = useState(rows)
    console.log(sortedLeads)

    useEffect(() => {
        let sorted;
        switch (sortType) {
            case SORT_TYPES.NAME:
                sorted = sortByName(rows)
                break
            case SORT_TYPES.PRICE:
                sorted = sortByPrice(rows)
                break
            case SORT_TYPES.DEFAULT:
                sorted = rows
                break
            default:
                sorted = rows
                break
        }
        setSortedLeads(sorted)
    }, [sortType])

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">ID сделки</th>
                <th scope="col">Название сделки</th>
                <th scope="col">Бюджет</th>
                <th scope="col">Дата создания</th>
                <th scope="col">ID компании</th>
            </tr>
            </thead>
            <tbody>
            {sortedLeads && sortedLeads.map((item, index) => <Row key={index} data={item} index={index}/>)}
            </tbody>
        </table>
    );
};

export default Table;