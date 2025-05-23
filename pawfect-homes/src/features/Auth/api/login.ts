import { customFetch, endpoints } from '@/shared/api'
import { ILoginCredentials, ILoginResponse } from '../model/types'


export async function loginApi(credentials: ILoginCredentials, token?: string): Promise<ILoginResponse> {
  try {
    const response = await customFetch<ILoginResponse>(endpoints.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      token,
    });
    return response;
  } catch (e) {
    throw e; // Propagate error with message from customFetch
  }
}