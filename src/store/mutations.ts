import {
    initialState,
} from "./index";

const SET_LOGIN_SESSION = (state: any, loginResponse: any) => {
    state.sessionObject = loginResponse.sessionInfo;
    state.clientInfo = loginResponse.clientInfo;
    state.imageSrc = loginResponse.imageSrc;
    state.isLoggedIn = loginResponse.isLoggedIn;
};

const SET_DATA = (state:any, data:any) => {
    state.sessionObject = data;
}

export default {
    SET_LOGIN_SESSION,
    SET_DATA
}