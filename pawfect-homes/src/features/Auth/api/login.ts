import { customFetch, endpoints } from "@/shared/api";
import { ILoginCredentials, IAuthResponse } from "../model/types/types";

export async function loginApi(
  credentials: ILoginCredentials,
  token?: string
): Promise<IAuthResponse> {
  try {
    const response = await customFetch<IAuthResponse>(endpoints.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      token,
    });
    return response;
  } catch (e) {
    throw e; // Propagate error with message from customFetch
  }
}
