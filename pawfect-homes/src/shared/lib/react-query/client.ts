import { customFetch } from '@/shared/api'
import { isServer, QueryClient } from '@tanstack/react-query'

function makeQueryClient(){
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60,
				queryFn: async ({ queryKey }) => {
					return customFetch(queryKey[0] as string);
				},
			}
		}
	})
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient () {
	if (isServer) {
		return makeQueryClient()
	} else {
		if(!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}