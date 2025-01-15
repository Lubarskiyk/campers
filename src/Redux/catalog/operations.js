import axios from '../../api/campersapi.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
