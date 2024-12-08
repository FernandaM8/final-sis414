    import axios from "axios";

    export const instanceProducts = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_PRODUCTS,
        timeout : 8000, /* subees el tieempo de espeeera depende a la carg */
        headers : { 'X-Custom-Header': 'foobar' }
    });

    instanceProducts.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });