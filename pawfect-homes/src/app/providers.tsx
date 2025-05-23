import { ReactNode } from 'react'
import { QueryProvider } from './_providers'

export default function Providers({children}: {children: ReactNode}){
	return (
		<QueryProvider>
			{children}
		</QueryProvider>
	)
}