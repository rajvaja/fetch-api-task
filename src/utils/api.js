import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchDataFromApi = async(url) => {
    try {
       const {data} = await axios.get(BASE_URL + url)
         return data
    } catch (error) {
       console.log(error)
       return error
    }
   }