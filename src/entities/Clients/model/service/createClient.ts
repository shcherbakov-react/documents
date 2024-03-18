import { api } from "shared/api/api";

const clientData = api.injectEndpoints({
    endpoints: (build) => ({
        getClient: build.query({
            query: (id) => `/clients/${id}`
        }),
        createClient: build.query({
            query: (id) => `/clients/${id}`
        }),
        updateClient: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `/clients/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetClientQuery,
    useUpdateClientMutation,
} = clientData;