import { Module } from "vuex";
import { UserInterface } from "./types";
import {RootState} from "./types";

const state: UserInterface = {
    sessionObject : {},
    userData : {}
}

export const defaultState:Module<UserInterface,RootState> = {
    state
}