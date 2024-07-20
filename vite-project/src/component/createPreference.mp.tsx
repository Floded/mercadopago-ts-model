import axios from "axios";
import { product } from "./product";


   export const createPreference = async (productData: product) => {
        try {
            const response = await axios.post(
                "http://localhost:3030/create_preference",
                productData
            );
            const {redirectUrl} = response.data;
            return redirectUrl
        } catch (error) {
            console.log(error);      
        }
    };
