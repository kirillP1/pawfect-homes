'use client'

import { IPet } from '@/shared/api'
import { createContext } from 'react';

export const PetCardContext = createContext<{ isInsidePetCard: boolean, pet: IPet } | null>(null);