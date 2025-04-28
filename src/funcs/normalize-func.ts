interface Post {
	id: string
	title: string
	body: string
}

interface NormalizedData {
	byId: {
		[id: string]: Post
	}
	allIds: string[]
}

export const normalizeData = (unnormalizedData: Post[]): NormalizedData => {
	const newObject: NormalizedData = { byId: {}, allIds: [] }
	unnormalizedData.forEach((post) => {
		const { id } = post
		newObject.byId[id] = { ...post }
		newObject.allIds.push(id)
	})

	return newObject
}

/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
