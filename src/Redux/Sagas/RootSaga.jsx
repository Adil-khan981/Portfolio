import { all } from "redux-saga/effects";
import contactUsSagas from "./ContactUsSagas";
import newsletterSagas from "./NewsletterSagas";
export default function* RootSaga(){
    yield all([
        contactUsSagas(),
        newsletterSagas(),
    ])
}
