import { combineReducers } from "redux";
import auth from "./auth";
import job from "./job";
import topic from "./topic";

export default combineReducers({
    job,
    auth,
    topic
})