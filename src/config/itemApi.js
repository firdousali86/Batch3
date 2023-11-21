import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemRTK',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => 'items',
      providesTags: ['Items'],
    }),
    postItem: builder.mutation({
      query: newItem => ({
        url: 'items',
        method: 'POST',
        body: {
          title: newItem.title,
          image: newItem.image,
          details: newItem.details,
        },
        headers: {'X-Access-Token': newItem?.accessToken},
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
