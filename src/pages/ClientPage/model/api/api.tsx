import { api } from "shared/api/api";

const clientData = api.injectEndpoints({
    endpoints: (build) => ({
        getClient: build.query({
            query: (id) => `/clients/${id}`
        }),
    }),
    overrideExisting: false,
});


export const {
    useGetClientQuery
} = clientData;