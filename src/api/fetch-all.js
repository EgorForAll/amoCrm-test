import {ACCESS_TOKEN} from "../const/const";


export const fetchAll = async () =>
    await fetch('/api/v4/leads', {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Access-Control-Allow-Headers": '*'
        }
    }).then((res) => res.json())

