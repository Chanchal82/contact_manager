"use client"

import { loginAction } from "../actions/auth"

function LoginForm() {
  return (
    <form action={loginAction} className="space-x-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" placeholder="Enter your email" required 
            className="mt-1 block w-full rounded-md border-gray-400 shadow-sm p-2"></input>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" placeholder="Enter your password" required 
            className="mt-1 block w-full rounded-md border-gray-400 shadow-sm p-2"></input>
        </div>
        <button type="submit" className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounde-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-900">
            Login
        </button>
    </form>
  )
}

export default LoginForm
 