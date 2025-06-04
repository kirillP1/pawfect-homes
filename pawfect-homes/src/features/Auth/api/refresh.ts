import { customFetch, endpoints } from "@/shared/api";
import { IRefreshResponse } from "../model/types/types";

export async function refreshApi(): Promise<IRefreshResponse> {
  try {
    const response = await customFetch<IRefreshResponse>(endpoints.refresh, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    throw e; // Propagate error with message from customFetch
  }
}
