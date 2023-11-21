import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemRTK',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => '/items',
    }),
  }),
});

export const {useGetAllItemsQuery} = itemApi;
