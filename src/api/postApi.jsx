import axios from "axios";
import data from "../data.json";

const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
  timeout: 2000,
});

export const postData = async () => {
  try {
    const response = await apiClient.post("/deneme", data);
    console.log("APİ cevap:", response.data);
  } catch (error) {
    console.error("API POST Hatası:", error);
    throw error;
  }
};
