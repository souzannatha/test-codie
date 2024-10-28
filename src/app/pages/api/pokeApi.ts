import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getCities = async () => {
  return await api.get("/location?limit=5&offset=0");
};

export const getRegions = async () => {
  return await api.get("/region?limit=5&offset=0");
};

export const getPokemon = async () => {
  return await api.get("/pokemon?limit=5&offset=0");
};
