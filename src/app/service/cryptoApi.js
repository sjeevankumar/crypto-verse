import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "x-rapidapi-host": import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '1689925f46msh11a0de77008c5b3p1b8528jsnee19ab85c670',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };
