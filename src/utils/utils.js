import moment from "moment";
import throttledFetch from 'throttled-fetch';

export const formatDate = (number) => moment(number).format('MMMM Do YYYY');

export const SORT_TYPES = {
    NAME: 'name',
    PRICE: 'price',
    DEFAULT: 'default'
}

export const PAGINATION_TYPE = {
    DEFAULT: 'default',
    TWO: 'two',
    FIVE: 'five',
    TEN: 'ten'

}

export const sortByPrice = (array) => array.sort((a, b) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0
})

export const sortByName = (array) => array.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})


export const customFetch = throttledFetch(2, 2000)
