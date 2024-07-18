import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';

export const getInfoByToday = createAsyncThunk(
  'date/getInfoByToday',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.get(`/water/day/${date}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: getInfoByDay('2024-07-02')
);

export const getInfoBySelectedDay = createAsyncThunk(
  'date/getInfoBySelectedDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.get(`/water/day/${date}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: getInfoByDay('2024-07-02')
);

export const getInfoByMonth = createAsyncThunk(
  'water/getInfoByMonth',
  async (month, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.get(`/water/month/${month}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: getInfoByMonth('2024-07')
);
export const addWaterIntake = createAsyncThunk(
  'water/addWaterIntake',
  async (waterData, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.post('/water', waterData);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: addWaterIntake({
  //   time: "09:00:05",
  //   date: "2024-07-01",
  //   volume: 150
  // })
);

export const updateWaterIntake = createAsyncThunk(
  'water/updateWaterIntake',
  async ({ _id, ...waterData }, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.patch(`/water/${_id}`, {
        ...waterData,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  //Example: updateWaterIntake({
  //  _id: '669657233a9e3788a6f219b0',
  //  time: '10:30:00',
  //  volume: 50,
  // })
);

export const deleteWaterIntake = createAsyncThunk(
  'water/deleteWaterIntake',
  async (_id, { rejectWithValue }) => {
    try {
      await AXIOS_INSTANCE.delete(`/water/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: deleteWaterIntake('669659783a9e3788a6f21a13')
);
