import axiosInstance from "./axiosInstance"

const fetchProduct =  async ()=>{
    try {
        const response = await axiosInstance.get(`/products`)
return response.data        
    } catch (error) {
        console.log('error fetching post',error);
        throw error
    }
}


const api ={
    fetchProduct
}
export default api