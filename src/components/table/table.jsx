import * as React from 'react';
import {useEffect, useState} from 'react';
import Row from "../row/row";
import {nanoid} from "nanoid";
import {SORT_TYPES, sortByName, sortByPrice} from "../../utils/utils";


const Table = ({rows, sortType}) => {
    const [sortedRows, setSortedRows] = useState(rows)

    useEffect(() => {
        switch (sortType) {
            case SORT_TYPES.PRICE:
                setSortedRows([...sortByPrice(rows)])
                break
            case SORT_TYPES.NAME:
                setSortedRows([...sortByName(rows)])
                break
            default:
                setSortedRows([...rows])
        }
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
            {sortedRows.map((item, index) => <Row key={nanoid()} data={item} index={index}/>)}
            </tbody>
        </table>
    );
};

export default Table;