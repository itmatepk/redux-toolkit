"use client";
import CartList from "./components/cartList";
import ProductList from "./components/productList";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./store/slices/postApi";

export default function Home() {
  // const { data } = useGetAllPostQuery("Bret");

  const [updatePost,res]= useCreatePostMutation()

  return (
    <main className=" p-5">
      <h1 className="text-center">Redux Toolkit RTK query</h1>
      <br />
      <button onClick={() => updatePost({ name: "ratan lal", id: 1 })}>
        create user
      </button>
       <ProductList/>

      <h1 className="mt-5">Cart List</h1>
      <CartList/> 
    </main>
  );
}
