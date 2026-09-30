"use client"
import { useActionState } from "react";
import { ContactType } from "../_types/contact";
import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProps={
    action:(prevState:any, formData:FormData)=>Promise<any>
    contact?:ContactType
}

const DeleteButton = ({action,contact }: DeleteButtonProps) => {
    const [state,formAction]=useActionState(action,null)
  return (
    <form action={formAction}>
        <input type="hidden" name="id" value={contact?.id} />
      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 active:scale-95"
        onClick={(e)=>{if(!confirm("Are you sure you want to delete this contact?")){
            e.preventDefault()
        }}}
      >
        <FiTrash2 size={16} />
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;

