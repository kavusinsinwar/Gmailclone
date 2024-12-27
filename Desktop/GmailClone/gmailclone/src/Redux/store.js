import {configureStore} from "@reduxjs/toolkit"

import appReducer from "./Appslice"
const store= configureStore({
    reducer:{
        appslice : appReducer
    }
});
export default store;