import { api } from "shared/api/api";
import { Client } from "entities/Clients/model/types/Client";

const Auth = api.injectEndpoints({
    endpoints: (build) => ({
        isAuth: build.query({
            query: (id) => `/auth`
        }),
        addClient: build.mutation({
            query: (body) => ({
                url: `clients`,
                method: 'POST',
                body,
            }),
        }),
        updateClient: build.mutation({
            query: ({id, ...patch}) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
    }),
    overrideExisting: false,
});


export const {
    useIsAuthQuery,
    useUpdateClientMutation,
    useAddClientMutation
} = Auth;