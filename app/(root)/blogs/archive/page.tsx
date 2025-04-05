import { getArchiveBlogs } from '@/service/blog.service'
import { format } from 'date-fns'
import { Archive, Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Archive blogs'
}

const ArchivePage = async () => {
	const blogs = await getArchiveBlogs()

	return (
		<div className='max-w-6xl mx-auto max-md:px-10'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<p className='text-lg text-muted-foreground'>Showing posts from</p>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Archive</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href='/'
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<Link
						href='/blogs'
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Archive</p>
				</div>
			</div>

			{blogs.map(blog => (
				<Fragment key={blog.year}>
					<div className='flex flex-col space-y-3 mt-8'>
						<div className='relative'>
							<span className='text-5xl font-creteRound relative z-20'>
								{blog.year}
							</span>
							<Archive className='absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
						</div>
						{blog.blogs.map(item => (
							<div key={item.slug} className='flex flex-col space-y-2 mt-8'>
								<div className='flex gap-2 text-lg text-muted-foreground'>
									<p>{format(new Date(item.createdAt), 'dd MMM')}</p>
									<Dot className='text-white w-8 h-8' />
									<Link
										href={`/blogs/${item.slug}`}
										className='hover:text-white hover:underline cursor-pointer'
									>
										{item.title}
									</Link>
								</div>
							</div>
						))}
					</div>
				</Fragment>
			))}
		</div>
	)
}

export default ArchivePage
