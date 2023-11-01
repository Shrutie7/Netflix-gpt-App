import { createSlice } from "@reduxjs/toolkit";



const configSlice = createSlice({
    name:"config",
    initialState:{
        language:"en",
        theme:"dark"
    },
    reducers:{
      
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        },
        changeTheme:(state,action)=>{
            state.theme=action.payload;
        }
    }
})

export const {changeLanguage,changeTheme}=configSlice.actions
export default configSlice.reducer;