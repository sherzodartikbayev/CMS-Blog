import { IAuthor } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				name
				bio
				id
				blogs {
					id
				}
				image {
					url
				}
			}
		}
	`

	const { authors } = await request<{ authors: IAuthor[] }>(graphqlAPI, query)
	return authors
}

export const getDetailedAuthor = async (id: string) => {
	const query = gql`
		query MyQuery($id: ID) {
			author(where: { id: $id }) {
				name
				bio
				image {
					url
				}
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
			}
		}
	`

	const { author } = await request<{ author: IAuthor }>(graphqlAPI, query, {
		id,
	})
	return author
}
