// @flow
import * as React from 'react';
import "./pagination..css"
import {PAGINATION_TYPE} from "../../utils/utils";

const Pagination = ({hook, value}) => {

    const changeHandler = (e) => {
        e.preventDefault()
        hook(e.target.value)
    }

    return (
        <div className='pagination'>
            <label htmlFor="pagination">Показывать:</label>
            <select onChange={(e) => changeHandler(e)} id='pagination' className='form-select pagination-input'
                    defaultValue={value}>
                <option value={PAGINATION_TYPE.DEFAULT}>Все</option>
                <option value={PAGINATION_TYPE.TWO}>По два</option>
                <option value={PAGINATION_TYPE.FIVE}>По пять</option>
                <option value={PAGINATION_TYPE.TEN}>По десять</option>
            </select>
        </div>
    );
};

export default Pagination;