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
