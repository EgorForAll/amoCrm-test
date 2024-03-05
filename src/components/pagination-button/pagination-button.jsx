// @flow
import * as React from 'react';
import {PAGINATION_TYPE} from "../../utils/utils";
import {fetchFive} from "../../api/fetch-five";
import {useEffect, useState} from "react";

const PaginationButton = ({paginationType, lastIndex, hook, setLeads, length, setError}) => {
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (paginationType !== PAGINATION_TYPE.DEFAULT) {
            if (lastIndex + 1 === length) {
                setDisabled(true)
            }
        }
    }, [paginationType, lastIndex]);

    useEffect(() => {
        setError('')
        setDisabled(false)
    }, [paginationType])

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
            case PAGINATION_TYPE.DEFAULT:
                hook(lastIndex + 1)
                fetchFive(lastIndex + 1).then((res) => {
                    if (res.status === 204) {
                        setDisabled(true)
                        setError('Сделки закончились')
                        return
                    }
                    return res.json()
                }).then((res) => {
                    if (res) {
                        setLeads(res._embedded.leads)
                    }
                }).catch((e) => console.error(e));
                break
            default:
                hook(0)
        }
    }
    return (
        <div className='pagination-btn'>
            <button className='btn btn-secondary' disabled={disabled} onClick={() => onClickHandler()}>Загрузить еще</button>
        </div>
    );
};

export default PaginationButton;