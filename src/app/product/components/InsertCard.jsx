import { insertDesign } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const InsertCard = ({ cardData, setEditModal, selectedVariant, setSelectedVariant }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div 
      className="flex flex-col ml-10 mr-10 w-[150px] h-auto border-2 border-dashed border-slate-300 rounded-md relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="flex justify-center items-center pt-5 relative">
        <img 
          src={cardData.design}
          className="rounded-md"
          width={80}
          height={90}
          alt="design_image" 
        />
        {isHovered && ( 
          <p
            onClick={() => {
              dispatch(insertDesign({
                row_id: selectedVariant.row_id,
                variant_id: selectedVariant.var_id,
                variant_name: cardData.name,
                variant_design: cardData.design
              }));
              setSelectedVariant(null);
              setEditModal(false);
            }}
            className="text-black rounded-md p-1 text-sm font-bold cursor-pointer bg-white absolute top-[60px] left-[50px]">
            Insert
          </p>
        )}
      </div>
      <p className="text-center text-sm pt-3 font-serif">
        {cardData.name.length <= 15 ? cardData.name : cardData.name.slice(0, 15) + "..."}
      </p>
    </div>
  );
};
