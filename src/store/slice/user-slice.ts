import { UserState } from "./interface";
import { createSlice} from "@reduxjs/toolkit";

const initalUserState: UserState = {
isVisable: false,
notifcation: {
    status: "",
    title: "",
    message: "",
},
}

const userSlice = createSlice({
    name: 'user',
    initialState: initalUserState,
    reducers: {
        toggleVisable(state:UserState) {
            state.isVisable = !state.isVisable;
        },
        showNotifcation(state:UserState, action) {
            state.notifcation = {
                status: action.payload.status, 
                title: action.payload.title,
                 message: action.payload.message}
            }
        }
});

export const userActions = userSlice.actions;
export default userSlice;