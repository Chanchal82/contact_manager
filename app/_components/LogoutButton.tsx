"use client"

import { logoutAction } from "../actions/auth"

function LogoutButton() {
    const handelLogout =async() => {    
        try{
            await logoutAction()
        }catch(error){
            console.log("Logout Failed: ",error)
        }
    }
  return (
    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={handelLogout}>Logout</button>
  )
}

export default LogoutButton
