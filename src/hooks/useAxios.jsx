import axios from 'axios';
import React from 'react';


const axiosInstance = axios.create({
    baseURL: 'https://sarker-shift-server.vercel.app'
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;