import Cuisines from "../db/cuisines.json";
import Restaurants from "../db/restaurants.json";
export const GET_CUISINES = "GET_CUISINES";
export const GET_RESTAURANT = "GET_RESTAURANT";
export const GET_CHECKED = "GET_CHECKED";

export const cuisineFile = () => {
  return async (dispatch) => {
    const data = await Cuisines[0].data;
    dispatch({ type: GET_CUISINES, payload: data });
  };
};

export const restaurantFile = () => {
  return async (dispatch) => {
    const data = await Restaurants[0].data;
    dispatch({ type: GET_RESTAURANT, payload: data });
  };
};

export const checkCategory = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_CHECKED, payload: data });
  };
};
