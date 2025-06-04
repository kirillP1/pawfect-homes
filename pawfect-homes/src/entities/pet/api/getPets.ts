import { customFetch, IPet } from '@/shared/api';

export const getPets: () => Promise<IPet[]> = async () => {
  try{
    const data = await customFetch<{ pets: IPet[] }>('/pets', {
      cache: 'force-cache',
      next: {
        revalidate: 60,
      },
    });

    return data.pets;
  }catch(e){
    throw e
  }
};