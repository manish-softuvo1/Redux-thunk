import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Batman' },
  { id: '1', name: 'Superman' },
  { id: '2', name: 'IronMan' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
