// @flow
import * as React from 'react';
import {PAGINATION_TYPE} from "../../utils/utils";

const PaginationButton = ({paginationType, lastIndex, hook}) => {

    const onClickHandler = () => {
        switch (paginationType) {
            case PAGINATION_TYPE.TWO:
                hook(lastIndex + 2)
                break
            case PAGINATION_TYPE.FIVE:
                hook(lastIndex + 5);
                break
            case PAGINATION_TYPE.TEN:
                hook(lastIndex + 10);
                break
            default:
                hook(-1)
        }
    }
    return (
        <div className='pagination-btn'>
            <button className='btn btn-secondary' onClick={() => onClickHandler()}>Загрузить еще</button>
        </div>
    );
};

export default PaginationButton;