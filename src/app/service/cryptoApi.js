import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CRYPTO_API_URL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST)
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi
