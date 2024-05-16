import axios from "axios"
import { config } from "../config/config"



const environment = config[process.env.NODE_ENV || "desarrollo"]
const ipApiBaseUrl = environment.ipApi


export const obtenerUbicacionPorIP = async (
    ipAddress: string,
    apiBaseUrl: string = ipApiBaseUrl) =>{

        try {
            
            const response = await axios.get(`${apiBaseUrl}/${ipAddress}`)

            if(response.data.status !== 'success'){
                throw new Error(
                    "La solicitud de la API no fue exitosa" + response.data.message
                )
            }
            console.log("Respuesta de la IP", response.data)
            return response.data;
        } catch (error) {
            console.error("Error al obtener la ubicacion por IP", error)
            throw error;
        }

    }


