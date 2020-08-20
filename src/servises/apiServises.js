import axios from "axios";
import config from "../config/apiConfig";

class Api {
  constructor(config) {
    this.api = config.url;
  }
  async countries() {
    try {
      const response = await axios.get(`${this.api}/countries`);
      return response.data;
    } catch (err) {
      console.log(err);
      return new Promise.reject(err);
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.api}/cities`);
      return response.data;
    } catch (err) {
      console.log(err);
      return new Promise.reject(err);
    }
  }
  async airlines() {
    try {
      const response = await axios.get(`${this.api}/airlines`);
      return response.data;
    } catch (err) {
      console.log(err);
      return new Promise.reject(err);
    }
  }

  async prices(params) {
    try {
      const response = await axios.get(`${this.api}/prices/cheap`, {
        params
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return new Promise.reject(err);
    }
  }
}

const api = new Api(config);
export default api;
