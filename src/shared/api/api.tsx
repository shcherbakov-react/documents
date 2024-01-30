import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://185.22.61.73:8088/',
        prepareHeaders: (headers) => {
            if (username) {
                headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
            }
        },
    }),
    endpoints: (builder) => ({
        getClients: builder.query({
            query: () => '/clients'
        })
    }),
});

export const {
    useGetClientsQuery
} = api