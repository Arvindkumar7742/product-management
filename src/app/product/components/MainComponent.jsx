import { useDispatch, useSelector } from "react-redux";
import { IoAddSharp } from "react-icons/io5";
import { addProductRow, updateProductRows } from "@/redux/slices/productSlice";
import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductRowCard } from "./ProductRowCard";

export const MainComponent = () => {
  const { productRows } = useSelector((state) => state.product);
  const [newProductRows, setNewProductRows] = useState(productRows.slice(1, productRows.length));
  const dispatch = useDispatch();

  useEffect(() => {
    const slicedProductRows = productRows.slice(1);
    if (
      newProductRows.length !== slicedProductRows.length ||
      !newProductRows.every((row, index) => row.id === slicedProductRows[index].id)
    ) {
      setNewProductRows(slicedProductRows);
    }
    if(newProductRows[0].variants.length !== productRows[0].variants.length){
      setNewProductRows(productRows.slice(1));
    }
  }, [productRows]);

  const handleReorder = (updatedRows) => {
    setNewProductRows(updatedRows);
    dispatch(updateProductRows(updatedRows));
  };

  return (
    <div className="flex flex-col min-w-min select-none flex-grow gap-5 bg-slate-100 border-2 border-solid border-slate-200 ml-[50px] mr-[50px] mt-[50px] mb-[50px] rounded-md">
      {/* Header row for the product page */}
      <div className=" ml-[228px] min-h-[40px] text-md font-bold text-slate-500 mt-[40px] flex flex-row gap-10">
        <div className="ml-[90px] min-w-[300px] flex justify-center items-center">
          {
            productRows[0].product_filter
          }
        </div>
        <div className="flex flex-row">
          {
            productRows[0].variants.map((variant, index) => (
              <div key={index} className={`border-l-2 min-w-[250px] flex justify-center items-center ${index + 1 == productRows[0].variants.length && "border-r-2"}`}>{variant}</div>
            ))
          }
        </div>
      </div>

      {/* The Remiaing all product rows for the page */}
      <div>
        <Reorder.Group axis="y" values={newProductRows} onReorder={handleReorder}>
          {newProductRows.map((productRow, index) => (
            <ProductRowCard key={productRow.id} productRow={productRow} num={index + 1} />
          ))}
        </Reorder.Group>
      </div>

      {/* add icon to add new product rows */}
      <div className="border-r-2 ml-[180px] w-[100px] flex justify-center items-center cursor-pointer">
        <IoAddSharp
          onClick={() => {
            dispatch(addProductRow());
          }}
          className="text-4xl font-bold border-2 rounded-md p-1 box-border mb-5"
        />
      </div>
    </div>
  );
};
