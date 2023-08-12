import axios from "axios";
import { URL_DELETE_LIGHT, URL_POST_CREATE_LIGHTS } from "../utils/config";
import datatoObject from "../constants/arrayDatatoObjec";

export default class Rall {
    Rall(){}
    async Create(data: any){

        try{
            const response = await axios.post(URL_POST_CREATE_LIGHTS, datatoObject(data));
            console.log(response.data);
        }
        catch(e: any){
            console.log(e.message);
        }

    }
    async Delete(id: any){
        try{
            const response = await axios.delete(URL_DELETE_LIGHT + id);
            console.log(response);
        }
        catch(e:any){
            console.log(e.message)
        }
    }
}