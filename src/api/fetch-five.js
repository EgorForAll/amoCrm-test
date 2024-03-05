import {ACCESS_TOKEN} from "../const/const";

export const fetchFive = async (hook, page) => await fetch(`/api/v4/leads?limit=5&page=${page}`, {
    headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Access-Control-Allow-Headers": '*'
    }
}).then((res) => res.json()).then((res) => hook(res._embedded.leads)).catch((e) => console.error(e))
