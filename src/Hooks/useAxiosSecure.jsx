import axios from 'axios';

// base url; 
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Set your base URL here
});

const useAxiosSecure = () => {
    return [axiosSecure];
};

export default useAxiosSecure;