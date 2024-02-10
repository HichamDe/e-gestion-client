import axios from "axios";

export default function fetcher(url){
    return axios.get(url).then((response) => {
        return response.data;
    }).catch((err)=>{
        console.error(err);
    });
}