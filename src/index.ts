import { totalPrice } from './funcs/sale-func'
import { normalizeData } from './funcs/normalize-func'
import { posts } from './posts'

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})

console.log(price)
console.log(normalizeData(posts))
