import { configureStore } from "@reduxjs/toolkit";
import language from "./languageSlice";

const store = configureStore({
    reducer: {
        language,



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
