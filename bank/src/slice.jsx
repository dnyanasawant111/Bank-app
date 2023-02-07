
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value:0 ,
}

export const counterapp=createSlice({
  name:"counter",
  initialState,
  reducers:{
    withdraw1:(state,action)=>{
      state.value += action.payload
    },
    withdraw2:(state,action)=>{
      state.value+=action.payload
    },
    
  }
})

export const { withdraw1,withdraw2}=counterapp.actions

export default counterapp.reducer