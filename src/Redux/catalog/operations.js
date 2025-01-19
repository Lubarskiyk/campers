import axios from '../../api/campersapi.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (search, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers?${search}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




