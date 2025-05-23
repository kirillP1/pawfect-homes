import { Button, ButtonSize } from '@/shared/ui/button'
import { LendingPetListPrefetchView } from '@/widgets/landing-pet-list'

export default function Landing() {
	return <div className="min-h-screen p-8 pb-20 gap-10 flex flex-col sm:p-20">
      <LendingPetListPrefetchView />
			<Button size={ButtonSize.MD} className='w-40 m-auto'>See more</Button>
	</div>
}