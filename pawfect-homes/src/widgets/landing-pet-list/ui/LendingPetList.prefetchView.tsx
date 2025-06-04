import { getPets } from '@/entities/pet'
import { getQueryClient } from '@/shared/lib'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { LendingPetListView } from './LendingPetList.view';

export const LendingPetListPrefetchView = async () => {
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['pets'],
		queryFn: getPets,
	})
	
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<LendingPetListView />
		</HydrationBoundary>
	);
};