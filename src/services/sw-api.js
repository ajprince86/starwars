import axios from "axios";

export const getAllStarShips = async () => {
  try {
    const response = await axios.get(`https://swapi.dev/api/starships/`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
