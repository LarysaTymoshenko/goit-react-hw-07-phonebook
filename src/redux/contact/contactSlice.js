import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ee8ed5d593d20017dbaf3c.mockapi.io/contacts/contacts',
  }),
  endpoints: builder => ({
    fetchContact: builder.query({
      query: () => {
        '/contacts';
      },
    }),
  }),
});
export const { usefetchContactQuery } = contactApi;
