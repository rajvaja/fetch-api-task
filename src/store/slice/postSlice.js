import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postData : [],
  postDetails:[],
  comments:[]
}

export const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    getPostData: (state,actions) => {
        state.postData = actions.payload
    },
    getPostDetails: (state,actions) => {
      state.postDetails = actions.payload
  },
  getComments: (state,actions) => {
    state.comments = actions.payload
},
   
  },
})

// Action creators are generated for each case reducer function
export const { getPostData,getPostDetails,getComments } = postSlice.actions

export default postSlice.reducer