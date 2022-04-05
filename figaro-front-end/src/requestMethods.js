import axios from "axios";

const BASE_URL = "http:localhost:2000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjhlMWJjN2U3ZjY5NGZiZjRhNGMzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA4OTkxNiwiZXhwIjoxNjQ5MzQ5MTE2fQ.jN_WuNRrHf32QV0R_4s0jkf3ZZYm9Dr5hRn5KDGxsPw"


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const USERRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`}
})