import axios from "axios";

export default function fetch(url){
    return axios.get(url).then((response) => {
        return response.data;
    });
}