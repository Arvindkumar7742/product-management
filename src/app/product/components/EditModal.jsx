import { RxCross2 } from "react-icons/rx";
import { data } from "./data"
import { InsertCard } from "./InsertCard";

export const EditModal = ({ setEditModal, selectedVariant, setSelectedVariant }) => {
  return (
    <div className='fixed inset-0 backdrop-dark  grid place-items-center z-40'>
      <div className='flex flex-col gap-2 bg-white p-5 rounded-lg border-2 border-slate-400 min-w-[800px] max-w-[800px] min-h-[200px]'>
        <div className="flex flex-row justify-between">
          <p className="text-xl font-sans font-bold">Select a Design link</p>
          <RxCross2 onClick={() => setEditModal(false)} className="text-xl font-sans font-bold cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {
            data.map((item) => (
              <InsertCard key={item.id} cardData={item} setEditModal={setEditModal} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
