import axios from "axios";
import { API_KEY, BASE_URL } from "./config";

interface IResponse {
    data: {
        Search: []
    }
}



export const getDefaultMovies = async (page: Number): Promise<IResponse> => {
    try {
        const response = await axios.get(`${BASE_URL}/?s=Batman&apikey=${API_KEY}&page=${page}`);
        console.log(response);
        return response;

    } catch (error: any) {
        console.error(error);
        return error;
    }
}