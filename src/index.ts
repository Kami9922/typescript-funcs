import { totalPrice } from './funcs/sale-func'
import { normalizeData } from './funcs/normalize-func'
import { posts } from './posts'
import { getData } from './funcs/get-data-func'
import { COMMENTS_URL } from './contstants'

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})

console.log(price)
console.log(normalizeData(posts))

interface Comment {
	id: number
	email: string
}

getData(COMMENTS_URL).then((data) => {
	if (data) {
		data.forEach((comment: Comment) => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`)
		})
	}
})
