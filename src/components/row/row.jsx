import * as React from 'react';
import {formatDate} from "../../utils";

const Row = ({data, index}) => {
    const date = formatDate(data.created_at * 1000)
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{date}</td>
            <td>{data._embedded.companies[0].id}</td>
        </tr>
    );
};

export default Row;