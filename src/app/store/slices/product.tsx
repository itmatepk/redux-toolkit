import { createSlice } from "@reduxjs/toolkit";

interface ProductSate {
  name: string;
  catagory: string;
  qty: number;
}

const initialState: ProductSate[] = [
  { name: "shoes1", catagory: "bata", qty: 2 },
  { name: "shoes2", catagory: "soz", qty: 5 },
  { name: "shoes3", catagory: "service", qty: 1 },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload)
    },
    deleteProduct(state, action) {},
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
