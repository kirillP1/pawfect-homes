'use client';

import { getPets } from '@/entities/pet';
import { useSuspenseQuery } from '@tanstack/react-query';
import { LendingPetList } from './LendingPetList'

export const LendingPetListQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['pets'],
    queryFn: getPets,
    staleTime: 1000 * 60 * 5,
    retry: false
  });

  return <LendingPetList pets={data} />;
};