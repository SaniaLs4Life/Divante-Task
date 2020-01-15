import axios from 'axios';

export const ProductServices = {
  getProducts: async () => {
    const response = await axios.get(
      'https://divante-server.herokuapp.com/products'
    );
    return response.data;
  },
  getProductById: async id => {
    const response = await axios.get(
      `https://divante-server.herokuapp.com/products/${id}`
    );
    return response.data;
  }
};
