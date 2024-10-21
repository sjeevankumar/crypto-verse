import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_API_URL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY)
      headers.set("x-rapidapi-host", import.meta.env.VITE_NEWS_RAPIDAPI_HOST)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => ({
        url: "/crypto/articles",
      }),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
