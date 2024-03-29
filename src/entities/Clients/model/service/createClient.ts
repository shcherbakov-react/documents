import { api } from "shared/api/api";

const clientData = api.injectEndpoints({
    endpoints: (build) => ({
        getClient: build.query({
            query: (id) => `/clients/${id}`
        }),
        createClient: build.mutation({
            query: (body) =>  ({
                url: '/clients',
                method: 'POST',
                body
            })
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
    useCreateClientMutation,
    useUpdateClientMutation,
} = clientData;