import axios from 'axios';

export const ProductServices = {
  getProducts: async () => {
    const response = await axios.get('http://localhost:9000/products');
    return response.data;
  },
  getProductById: async id => {
    const response = await axios.get(`http://localhost:9000/products/${id}`);
    return response.data;
  }
};
