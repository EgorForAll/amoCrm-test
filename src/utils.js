import moment from "moment";
export const formatDate = (number) => moment(number).format('MMMM Do YYYY');

export const SORT_TYPES = {
    NAME: 'name',
    PRICE: 'price',
    DEFAULT: 'default'
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

export const OPTIONS = [
    {
        label: 'По умолчанию',
        value: SORT_TYPES.DEFAULT
    },
    {
        label: 'По цене',
        value: SORT_TYPES.PRICE
    },
    {
        label: 'По названию',
        value: SORT_TYPES.NAME
    },

]