import { JSX } from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	map(arg0: (blog: any) => JSX.Element): import("react").ReactNode
	length: ReactNode
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
}

export interface IAuthor {
	name: string
	bio: string
	id: string
	image: {
		url: string
	}
	blogs: IBlog
}

export interface ICategoryAndTags {
	name: string
	slug: string
}