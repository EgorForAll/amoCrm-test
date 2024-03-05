import * as React from 'react';
import {useEffect, useState} from 'react';
import Row from "../row/row";
import {nanoid} from "nanoid";
import {PAGINATION_TYPE, SORT_TYPES, sortByName, sortByPrice} from "../../utils/utils";
import PaginationButton from "../pagination-button/pagination-button";

const Table = ({rows, sortType, paginationType}) => {
    const [rowsPaginated, setPaginatedRows] = useState([])
    const [lastIndex, setLastIndex] = useState(10);
    const [sortedRows, setSortedRows] = useState(rows)

    useEffect(() => {
        switch (paginationType) {
            case PAGINATION_TYPE.TWO:
                setLastIndex(2)
                break
            case PAGINATION_TYPE.FIVE:
                setLastIndex(5)
                break
            case PAGINATION_TYPE.TEN:
                setLastIndex(10)
                break
            default:
                setLastIndex(-1)
        }
    }, [paginationType])

    useEffect(() => {
        setPaginatedRows([...rows.slice(0, lastIndex)])
    }, [lastIndex])

    useEffect(() => {
        switch (sortType) {
            case SORT_TYPES.PRICE:
                setSortedRows([...sortByPrice(rowsPaginated)])
                break
            case SORT_TYPES.NAME:
                setSortedRows([...sortByName(rowsPaginated)])
                break
            default:
                setSortedRows([...rowsPaginated])
        }
    }, [sortType, rowsPaginated])

    return (
        <>
            <div className="row">
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
            </div>
            <div className="row mt-3">
                <PaginationButton paginationType={paginationType} lastIndex={lastIndex} hook={setLastIndex}/>
            </div>
        </>
    );
};

export default Table;