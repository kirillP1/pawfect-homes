import { customFetch, endpoints } from "@/shared/api";
import { IAuthResponse, IRegisterCredentials } from "../model/types/types";

export async function registrationApi(
  credentials: IRegisterCredentials,
  token?: string
): Promise<IAuthResponse> {
  try {
    const response = await customFetch<IAuthResponse>(endpoints.registration, {
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
