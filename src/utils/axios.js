import axios from "axios";
import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  if (error.response.status === 401) {
    dispatch(clearStore());
    return rejectWithValue("Unauthorized! Logging out...");
  }
  return rejectWithValue(error.response.data.msg);
};

export default customFetch;
