import axios from '../../api/campersapi.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (search, thunkAPI) => {
    try {
      const page = thunkAPI.getState().pagination.pagination.page;

      const { data } = await axios.get(`/campers?${search}`);

      return {
        data: data,
        page: page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
