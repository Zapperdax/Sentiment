import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = {
  user:JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await api.post("/newUser", userData);
      return {data: response.data, status: response.status};
    } catch (error) {
      console.log(error.response.data)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk("user/login",
async (userData, thunkAPI) => {
  try {
    const response = await api.post("/user/login", userData);
    console.log(response)
    return {data: response.data, status: response.status};
  } catch (error) {
    console.log(error.response.data)
    return thunkAPI.rejectWithValue(error.response.data);
  }
}
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false;
        state.error = null
        state.user = action.payload; 
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false;
        state.error = null
        state.user = action.payload; 
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
