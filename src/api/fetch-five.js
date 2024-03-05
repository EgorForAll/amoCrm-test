import {ACCESS_TOKEN} from "../const/const";

export const fetchFive = async (page) => await  fetch(`/api/v4/leads?limit=5&page=${page}`, {
    headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Access-Control-Allow-Headers": '*'
    }
})
