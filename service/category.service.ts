import { IBlog, ICategoryAndTags } from '@/types/index'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
				blogs {
					id
				}
			}
		}
	`

	const { categories } = await request<{ categories: ICategoryAndTags[] }>(
		graphqlAPI,
		query
	)
	return categories
}

export const getBlogsByCategory = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
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
						slug
						name
					}
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

	const { category } = await request<{
		category: { blogs: IBlog[]; name: string }
	}>(graphqlAPI, query, { slug })
	return category
})
