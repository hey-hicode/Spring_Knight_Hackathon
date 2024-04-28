import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://hackathon.buildhubb.com/',
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Try to get the user token from localStorage
//     const userToken = localStorage.getItem('userToken');
//     // If a token is found, append it to headers
//     if (userToken) {
//       config.headers['Authorization'] = `Bearer ${userToken}`;
//     }
//     return config;
//   }, 
//   error => Promise.reject(error)
// );

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response) {
            switch (response.status) {
                case 401:
                    // Clear user data and redirect to sign-in
                    localStorage.clear();
                    window.location.href = '/auth/sign-in';
                    break;
                case 403:
                    console.error('Forbidden Error:', response.data.message);
                    // Optionally redirect to a forbidden page
                    break;
                case 404:
                    console.error('Not Found Error:', response.data.message);
                    // Optionally redirect to a not found page
                    break;
                case 500:
                    console.error('Internal Server Error:', response.data.message);
                    // Optionally redirect to an error page
                    break;
                default:
                    console.error('Unhandled HTTP Error:', response.data.message);
            }
        } else {
            console.error('Network Error:', error.message);
            // Optionally handle network error globally
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
