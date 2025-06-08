import { customFetch, endpoints } from "@/shared/api";
import { IUser, UserSchema } from "../model/types";

export const getUsers: () => Promise<IUser[]> = async () => {
  try {
    const data = await customFetch<unknown>(endpoints.users, {
      cache: "force-cache",
      next: { revalidate: 60 },
      token: String(localStorage.getItem("accessToken")),
    });

    if (!Array.isArray(data)) throw new Error("Expected an array of users");

    // Validate each item individually as an IUser
    const users: IUser[] = data.map((item, index) => {
      try {
        return UserSchema.parse(item);
      } catch (e) {
        console.error(`User at index ${index} is invalid`, e);
        throw e; // Or collect errors and throw them together
      }
    });

    return users;
  } catch (e) {
    console.error("getUsers error", e);
    throw e;
  }
};
