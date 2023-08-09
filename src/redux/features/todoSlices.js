import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const fetchListData = createAsyncThunk("getList", async (userid) => {
  const response = await axios.get(`http://62.72.27.124/api/list/${userid}`);
  return response.data.list;
});

export const addList = createAsyncThunk("addList", async (props) => {
  const response = await axios.post(
    `http://62.72.27.124/api/list/${props.id}`,
    {
      list: props.list,
    }
  );

  return response.data.list;
});

export const editList = createAsyncThunk("editList", async (props) => {
  const response = await axios.patch(
    `http://62.72.27.124/api/list/update/${props.id}`,
    {
      list: props.list,
    }
  );

  return response.data.list;
});

export const deleteList = createAsyncThunk("deleteList", async (listid) => {
  await axios.delete(`http://62.72.27.124/api/list/delete/${listid}`);

  return listid;
});

const ListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(editList.fulfilled, (state, action) => {
        const updatedList = action.payload;
        const updatedData = state.data.map((item) =>
          item.id === updatedList.id ? updatedList : item
        );
        state.data = updatedData;
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default ListSlice.reducer;
