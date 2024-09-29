import { FiEdit } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

export const VariantCard = ({ variant }) => {

  return (
    <>
      {
        !variant.name ? (
        <div className="flex justify-center items-center ml-10 mr-10 w-[150px] h-full border-2 border-dashed border-slate-300 rounded-md relative">
          <div className="flex flex-row items-center justify-center gap-1 cursor-pointer border-2 p-1 border-slate-300 rounded-md">
          <IoMdAdd /> <span>Add design</span>
          </div>
        </div>
        ) : (
          <div className="flex flex-col ml-10 mr-10 w-[150px] h-full border-2 border-dashed border-slate-300 rounded-md relative">
            <div className="flex justify-center items-center pt-5">
              <img src={variant.design}
                className="rounded-md"
                width={90}
                height={120}
                alt="design_image" />
              <FiEdit className="text-black rounded-md p-1 text-2xl cursor-pointer bg-white absolute top-[60px] left-[60px] opacity-0 group-hover:opacity-100" />
            </div>
            <p className="text-center text-sm pt-3 font-serif">{variant.name.length <= 15 ? variant.name : variant.name.slice(0, 15) + "..."}</p>
          </div>
        )
      }
    </>
  );
};
