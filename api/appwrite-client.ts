import { Client, Account } from "react-native-appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("696bfc5a00074f4b7cca")
  .setPlatform("com.meysdays.food.app");

export const account = new Account(client);
