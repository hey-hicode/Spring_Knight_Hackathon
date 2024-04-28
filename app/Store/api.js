import axiosInstance from "./axiosInstance";

// Generalized function to perform API requests
const performRequest = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;  // Return the data part of the response directly
  } catch (error) {
    
    // Log error and return error message or status for handling in components
    console.error('API error:', error.response?.data?.message || 'Unknown Error');
    return {
      error: true,
      message: error.response?.data?.message || 'An unexpected error occurred',
      statusCode: error.response?.status,
    };
  }
}

// Specific API calls
export const loginInvestor = (data) => {
  return performRequest('post', '/auth/investor/login.php', data);
};

export const loginStartup = (data) => {
  return performRequest('post', '/auth/startup/login.php', data);
};

export const signUpInvestor = (data) => {
  return performRequest('post', '/auth/investor/signup.php', data);
};

export const signUpStartup = (data) => {
  return performRequest('post', '/auth/startup/signup.php', data);
};

// You can continue to expand with more specific functions as needed
