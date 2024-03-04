import * as React from 'react';
import {OPTIONS} from "../../utils";
import Option from "../option/option";

const Sorting = ({hook, value}) => {
    return (
        <div className='sorting'>
            <label htmlFor="sorting">Сортировать:</label>
            <select className="form-select sorting-input" id='sorting' value={value}
                    onChange={(e) => hook(e.target.value)
                    }>
                {OPTIONS.map((item, index) => <Option key={index} label={item.label} value={item.value}/>)}
            </select>
        </div>
    );
};

export default Sorting;