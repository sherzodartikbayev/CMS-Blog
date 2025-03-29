import { IAuthor } from '@/types'
import Image from 'next/image'

const AuthorCard = ({image, name }: IAuthor) => {
	return (
		<div className='flex flex-col space-y-2 w-52 text-center'>
			<div className='w-full h-52 relative'>
				<Image
					src={image}
					alt={name}
					fill
					className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
				/>
			</div>
			<h2 className='text-2xl font-creteRound'>{name}</h2>
			<p className='text-muted-foreground'>
				<span className='font-bold text-white'>04</span> Published posts
			</p>
		</div>
	)
}

export default AuthorCard
