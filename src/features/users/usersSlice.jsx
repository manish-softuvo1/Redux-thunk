import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = [
//   { id: '0', name: 'Batman' },
//   { id: '1', name: 'Superman' },
//   { id: '2', name: 'IronMan' },
]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.users
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
      [fetchUsers.fulfilled] : (state, action) => {
          return action.payload
      }
  }
})

export default usersSlice.reducer
