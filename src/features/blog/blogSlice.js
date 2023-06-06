import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

const initialState = [];

const dateAndNameConversion = (data) => {
      const date = new Date(data.createdAt);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);
      console.log(formattedDate);
      const [month, day, year] = formattedDate.split(" ");
      const newDate = `${formattedDate.replace(",", "")} ${month}, ${year}`;
      console.log(newDate);
      let userName;
      const pattern = /^([^@]+)/;
      const match = data.email.match(pattern);
      if (match) {
        userName = `@${match[1]}`;
      }

      data = {
        ...data,
        createdAt: newDate,
        userName: userName,
      };
  return data;
}

export const fetchBlogPosts = createAsyncThunk(
  "blog/fetchBlogPosts",
  async (token) => {
    try {
      const response = await api.get("/getAllPosts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response?.data?.map((item) => {
        const date = new Date(item.createdAt);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
        }).format(date);
        let userName;
        const pattern = /^([^@]+)/;
        const match = item.email.match(pattern);
        if (match) {
          userName = `@${match[1]}`;
        }

        return {
          ...item,
          createdAt: formattedDate,
          userName: userName,
        };
      });
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getPostById = createAsyncThunk(
  "getACertainPost",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/getPost/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = dateAndNameConversion(response.data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postBlog = createAsyncThunk(
  "postBlog",
  async (post) => {
    try {
      const response = await api.post(`/post`, {
        title: post.values.title,
        blogBody: post.values.description,
        tags: post.values.tags.map(({name})=> name)
      }, {
        headers: {
          Authorization: `Bearer ${post.token}`,
        },
      });
      console.log(response.data);
      let data = dateAndNameConversion(response.data);
      return data;
    } catch (error) {
      return error;
    }
  }
);


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        return action.payload;
      }).addCase(postBlog.fulfilled, (state, action)=> {
        state.push(action.payload);
      } );
  },
});

export const allPosts = (state) => state.blog;

export default blogSlice.reducer;
