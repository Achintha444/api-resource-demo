import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string;
    session: string;
    allowedScopes: string[];
};

const initialState: AuthState = {
    token: "",
    session: "",
    allowedScopes: []
};

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        signInDataSave: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.session = action.payload.session;
            state.allowedScopes = action.payload.allowedScopes;
        },
        signOutDataCleat: (state) => {
            state = initialState;
        }
    }
});

export const { signInDataSave, signOutDataCleat } = auth.actions;
export default auth.reducer;
