import { ICategoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

const CategoriesTagsCard = (item: Props) => {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center justify-center gap-4 hover:bg-secondary/80 transition-colors dark:shadow-white/10'
		>
			{item.type === 'categories' ? <Layers2 /> : <Tags />}
			<h1 className='text-2xl font-creteRound'>{item.name}</h1>
		</Link>
	)
}

export default CategoriesTagsCard
