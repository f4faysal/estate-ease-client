import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Property_URL = "/home-info";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getPropertys
    propertys: build.query({
      query: (arg) => ({
        url: `${Property_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta) => {
        return {
          property: response,
          meta,
        };
      },
      providesTags: [tagTypes.property],
    }),
    // getProperty
    property: build.query({
      query: (id) => ({
        url: `${Property_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.property],
    }),
    // getMyPropertys
    myPropertys: build.query({
      query: ({}) => ({
        url: `${Property_URL}/my-propertys`,
        method: "GET",
      }),
      providesTags: [tagTypes.property],
    }),
    // createProperty
    createProperty: build.mutation({
      query: (data) => ({
        url: `${Property_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.property],
    }),

    deleteProperty: build.mutation({
      query: (id) => ({
        url: `${Property_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.property],
    }),
  }),
});

export const {
  usePropertysQuery,
  usePropertyQuery,
  useCreatePropertyMutation,
  useMyPropertysQuery,
  useDeletePropertyMutation,
} = propertyApi;
