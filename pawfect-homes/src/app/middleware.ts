import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest){
	const isAdmin = request.url.includes('admin')

	if(isAdmin){
		const accessToken = localStorage.get('accessToken')

		// TO-DO: add verifying of accessToken

		if(accessToken) return NextResponse.next()
	}

	return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
	matcher: '/admin/:path*'
}