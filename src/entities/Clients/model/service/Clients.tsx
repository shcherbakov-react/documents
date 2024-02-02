import { api } from "shared/api/api";

const Auth = api.injectEndpoints({
    endpoints: (build) => ({
        isAuth: build.query({
            query: (id) => `/auth`
        }),
        // addClient: build.mutation<Post, Partial<Post>>({
        //     query: (body) => ({
        //         url: `posts`,
        //         method: 'POST',
        //         body,
        //     }),
        //     invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        // }),
    }),
    overrideExisting: false,
});


export const {
    useIsAuthQuery
} = Auth;