import { baseApi } from "./api/baseApi";
import adminModal from "./features/modal/modalSlice";
import profile from "./features/profile/profileSlice";
import data from "./features/property/propertySlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  modal: adminModal,
  user: profile,
  property: data,
};
