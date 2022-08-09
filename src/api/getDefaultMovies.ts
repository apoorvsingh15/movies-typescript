import axios from "axios";
import { API_KEY, BASE_URL } from "./config";

interface IResponse {
    data: {
        Search: []
    }
}



export const getDefaultMovies = async (page: Number, movieName: string): Promise<IResponse> => {
    console.log(movieName)
    try {
        const response = await axios.get(`${BASE_URL}/?s=${movieName ? movieName : 'Batman'}&apikey=${API_KEY}&page=${page}`);
        console.log(response);
        return response;

    } catch (error: any) {
        console.error(error);
        return error;
    }
}