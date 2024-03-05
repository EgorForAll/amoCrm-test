import {ACCESS_TOKEN} from "../const/const";
import {customFetch} from "../utils/utils";

export const fetchFive = async (page) => await  customFetch(`/api/v4/leads?limit=5&page=${page}`, {
    headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Access-Control-Allow-Headers": '*'
    }
})
