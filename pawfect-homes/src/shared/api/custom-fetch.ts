import { getApiUrl } from '@/shared/lib';



export async function customFetch<T>(
  url: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  try {
    const headers = new Headers(options.headers || {});
    
    if (options.token) {
      headers.set('Authorization', `Bearer ${options.token}`);
    }

    const response = await fetch(`${getApiUrl()}${url}`, {
      ...options,
      credentials: 'include',
      headers,
    });

    if (!response.ok) {
      let errorMessage = `HTTP error! Status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // If JSON parsing fails, use default message
      }
      throw new Error(errorMessage);
    }

    return response.json() as Promise<T>;
  } catch (e) {
    throw e;
  }
}