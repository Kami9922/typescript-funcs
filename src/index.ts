import { totalPrice } from './funcs/sale-func'

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})
