import { combineReducers } from "@reduxjs/toolkit"
import ContactUsReducer from "./ContactUsReducer"
import NewsletterReducer from "./NewsletterReducer"
export default combineReducers({
    ContactUsStateData: ContactUsReducer,
    NewsletterStateData: NewsletterReducer,
})