import axios from '../../api/campersapi.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampersById = createAsyncThunk(
  'campers/fetchCampersById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


