'use client'

import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../auth-store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useCheckAuth = () => {
  const router = useRouter()
  const { checkAuth } = useAuthStore()

  const { isLoading, error } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      await checkAuth()
      return null
    },
    retry: false
  })

  useEffect(() => {
    if (error) {
      router.push('/')
    }
  }, [error, router])

  return { isLoading }
}