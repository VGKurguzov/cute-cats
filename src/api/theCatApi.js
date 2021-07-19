import axios from "axios";

const api = {
  async getCatApi() {
    return await axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        return response.data[0].url;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
export default api;
