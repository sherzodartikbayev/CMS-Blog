import { IBlog, ICategoryAndTags } from '@/types/index'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
				blogs {
					id
				}
			}
		}
	`

	const { tags } = await request<{ tags: ICategoryAndTags[] }>(
		graphqlAPI,
		query
	)
	return tags
}

export const getBlogsByTag = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blogs {
					title
					description
					createdAt
					author {
						name
						image {
							url
						}
					}
					category {
						name
						slug
					}
					description
					tag {
						name
						slug
					}
					image {
						url
					}
					content {
						html
					}
					slug
				}
				name
			}
		}
	`

	const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
		graphqlAPI,
		query,
		{ slug }
	)
	return tag
})
