import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const API_TIMEOUT = 5000;

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await api.post("/newUser", userData);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await api.post("/user/login", userData);
      console.log(response);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const sendOTPMessage = createAsyncThunk(
  "user/send-otp",
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      const response = await api.post(
        "/sendOtp",
        { email: userData },
        {
          timeout: API_TIMEOUT,
        }
      );
      console.log(response);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "user/verify-otp",
  async (userData, thunkAPI) => {
    try {
      const response = await api.post("/getOtp", { email: userData.email });
      console.log(response.data.otp);
      if (userData.otp === response.data.otp) {
        return { data: "OTP code has been verified", status: "200" };
      } else {
        return { data: "OTP code is not verified", status: "400" };
      }
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async (userData, thunkAPI) => {
    try {
      const response = await api.patch("/user/changePassword", userData);
      console.log(response);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
        console.log(action.payload);
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendOTPMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOTPMessage.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(sendOTPMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
