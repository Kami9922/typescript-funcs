interface SaleObject {
	price: number
	discount: number
	isInstallment: boolean
	months: number
}

const totalPrice = (obj: SaleObject): number => {
	const { price, discount, isInstallment, months } = obj
	if (isInstallment) {
		const discountedPrice = price - (price * discount) / 100
		const pricePerMonth = discountedPrice / months
		return pricePerMonth
	} else {
		const usualPrice = price / months
		return usualPrice
	}
}

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
})
