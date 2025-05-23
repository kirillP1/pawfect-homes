import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ILoginResponse } from './types'
import { loginApi } from '../api/login'
import { LoginFormInputs } from './schema'
import { refreshApi } from '../api/refresh'

interface AuthState {
  user: ILoginResponse['user'] | null;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean)=>void;
  login: (inputs: LoginFormInputs)=>Promise<void>;
  checkAuth: ()=>Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      setIsAuth: (isAuth: boolean)=>set({ isAuth }),
      login: async ({email, password}: LoginFormInputs)=>{
        try{
          const data = await loginApi({email, password})
        
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)

          set({ isAuth: true, user: data.user})
        } catch (e) {
          const error = e as Error;
          console.error('Login error:', error.message); 
          throw error; 
        }
      },
      checkAuth: async ()=>{
        try{
          const data = await refreshApi()

          if(data.refreshToken && data.accessToken){
            localStorage.setItem('refreshToken', data.refreshToken)
            localStorage.setItem('accessToken', data.accessToken)

            set({ isAuth: true, user: data.user})
          }
        }catch (e) {
          const error = e as Error;
          console.error('Check auth error:', error.message); 

          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
          set({ isAuth: false })

          throw error; 
        }
      }
    }),
    {
      name: 'auth-storage', // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Persist to localStorage
    }
  )
);