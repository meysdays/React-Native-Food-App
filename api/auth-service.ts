import { account } from "./appwrite-client";
import { ID } from "react-native-appwrite";

export const registerUser = async (email:string, password:string, name:string) => {
  return account.create({userId: ID.unique(), email, password, name});
};

export const loginUser = async (email:string, password:string) => {
  return account.createEmailPasswordSession({email, password});
};

export const getCurrentUser = async () => {
  return account.get();
};

// export const loginUser = async (email: string, password: string, name: string) => {

// }