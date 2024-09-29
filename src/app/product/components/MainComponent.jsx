import { useDispatch, useSelector } from "react-redux";
import { IoAddSharp } from "react-icons/io5";
import { addProductRow, updateProductRows } from "@/redux/slices/productSlice";
import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductRowCard } from "./ProductRowCard";

export const MainComponent = () => {
  const { productRows } = useSelector((state) => state.product);
  const [newProductRows, setNewProductRows] = useState(productRows.slice(1));
  const dispatch = useDispatch();

  useEffect(() => {
    const slicedProductRows = productRows.slice(1);
  
    // Check if the length of newProductRows is different or if the ids do not match
    if (
      newProductRows.length !== slicedProductRows.length ||
      !newProductRows.every((row, index) => row.id === slicedProductRows[index].id)
    ) {
      setNewProductRows(slicedProductRows);
    } else {
      // Check if any variant name in the product rows has changed
      const hasVariantNameChanged = newProductRows.some((row, rowIndex) => {
        const currentVariants = row.variants || [];
        const newVariants = productRows[rowIndex + 1]?.variants || []; // +1 because we're slicing from index 1
  
        return currentVariants.length !== newVariants.length ||
          currentVariants.some((variant, variantIndex) => 
            variant.name !== newVariants[variantIndex]?.name
          );
      });
  
      // Update newProductRows if any variant name has changed
      if (hasVariantNameChanged) {
        setNewProductRows(slicedProductRows);
      }
    }
  }, [productRows]);
  

  const handleReorder = (updatedRows) => {
    setNewProductRows(updatedRows);
    dispatch(updateProductRows(updatedRows));
  };

  return (
    <div className="flex flex-col items-center">

      <div className="w-full bg-white shadow-md rounded-md p-5 mb-5">
        <h1 className="text-3xl font-bold text-slate-800">Product Management</h1>
        <p className="text-md text-slate-600">Easily manage to your product rows</p>
      </div>

      {/* Main Component Container */}
      <div className="flex flex-col w-[95%] overflow-x-scroll select-none flex-grow gap-5 bg-slate-100 border-2 border-solid border-slate-200 ml-[50px] mr-[50px] rounded-md">
        {/* Header row for the product page */}
        <div className="ml-[228px] min-h-[40px] text-md font-bold text-slate-500 mt-[20px] flex flex-row gap-10">
          <div className="ml-[90px] min-w-[300px] flex justify-center items-center border-b-2 border-slate-300">
            {productRows[0].product_filter}
          </div>
          <div className="flex flex-row">
            {productRows[0].variants.map((variant, index) => (
              <div
                key={index}
                className={`border-l-2 min-w-[250px] flex justify-center items-center ${index + 1 === productRows[0].variants.length && "border-r-2"}`}
              >
                {variant}
              </div>
            ))}
          </div>
        </div>

        {/* Remaining product rows for the page */}
        <div>
          <Reorder.Group axis="y" values={newProductRows} onReorder={handleReorder}>
            {newProductRows.map((productRow, index) => (
              <ProductRowCard key={productRow.id} productRow={productRow} num={index + 1} />
            ))}
          </Reorder.Group>
        </div>

        {/* Add icon to add new product rows */}
        <div className="border-r-2 ml-[180px] w-[100px] flex justify-center items-center cursor-pointer">
          <IoAddSharp
            onClick={() => {
              dispatch(addProductRow());
            }}
            className="text-4xl font-bold border-2 rounded-md p-1 box-border mb-5"
          />
        </div>
      </div>
    </div>
  );
};
