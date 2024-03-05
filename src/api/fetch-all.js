import {ACCESS_TOKEN} from "../const/const";
import {customFetch} from "../utils/utils";


export const fetchAll = async () =>
    await customFetch('/api/v4/leads', {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Access-Control-Allow-Headers": '*'
        }
    }).then((res) => res.json())

