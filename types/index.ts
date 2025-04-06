export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
	length: number
}

export interface IAuthor {
	name: string
	bio: string
	id: string
	image: {
		url: string
	}
	blogs: IBlog[]
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs: IBlog
}

export interface IArchiveBlogs {
	year: string
	blogs: IBlog[]
}