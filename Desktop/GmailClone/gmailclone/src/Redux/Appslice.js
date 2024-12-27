import { createSlice } from "@reduxjs/toolkit" 
const appslice = createSlice({
    name:"appslice",
    initialState: {
        open:false,
        emails:[],
        selectedEmail:null,
        searchtext:"",
        user:null
    },
    reducers:{
        //actions hote hai iss mai  so apan ek ation bnayege
        setOpen:(state, action )=>{
            state.open = action.payload;
        },
        setEmails:(state,action)=>{
            state.emails = action.payload
        },
        setselectedEmail:(state,action)=>{
            state.selectedEmail = action.payload
        },
        setsearchtext:(state,action)=>{
            state.searchtext = action.payload
        },
        setuser:(state,action)=>{
            state.user = action.payload
        }
    }
});
export const {setOpen,setEmails,setselectedEmail,setsearchtext,setuser} = appslice.actions 
export default appslice.reducer