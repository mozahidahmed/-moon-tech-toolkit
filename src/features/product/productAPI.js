import axios from "../../utils/axios.config"

export const fetchProducts=async ()=>{
    const data= await axios.get("/products");
    console.log(data)
    return data.data.data;
}


export const postProducts=async (productData)=>{
    await axios.post("/product",productData);
   
}
export const deleteProducts=async (id)=>{
    await axios.delete(`/product/${id}`,id);
   
}
