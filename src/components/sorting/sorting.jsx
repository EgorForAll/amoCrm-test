import * as React from 'react';
import {SORT_TYPES} from "../../utils/utils";

const Sorting = ({hook, sortType}) => {

    const changeHandler = (e) => {
        e.preventDefault()
        hook(e.target.value)
    }

    return (
        <div className='sorting'>
            <label htmlFor="sorting">Сортировать:</label>
            <select onChange={(e) => changeHandler(e)} id='sorting' className='form-select sorting-input'
                    defaultValue={sortType}>
                <option value={SORT_TYPES.NAME}>По названию</option>
                <option value={SORT_TYPES.PRICE}>По цене</option>
            </select>
        </div>
    );
};

export default Sorting;