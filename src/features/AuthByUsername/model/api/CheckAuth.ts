import { api } from "shared/api/api";

const Auth = api.injectEndpoints({
    endpoints: (build) => ({
        isAuth: build.query({
            query: (id) => `/auth`
        }),
    }),
    overrideExisting: false,
});


export const {
    useIsAuthQuery
} = Auth;