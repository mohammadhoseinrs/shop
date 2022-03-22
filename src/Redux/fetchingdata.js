import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi=createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>`product?_limit=4`
        })
    })
})

export const {useGetAllProductsQuery} =productsApi