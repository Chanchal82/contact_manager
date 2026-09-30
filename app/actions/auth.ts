"use server";

import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
    );

    const user: UserType = response.data[0];

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    await setSession({
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    throw new Error("Failed to login");
  }

  redirect("/contact");
};

export const registerAction = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  await axios.post(`${API_URL}/users`, {
    name,
    email,
    password,
  });

  redirect("/login");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};