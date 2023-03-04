import axios from "axios";
 export const apiKey="d69dc027b42642d6bcc44148230403";
 export const client = axios.create({
     baseURL :`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`,
});