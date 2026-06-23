
export function formatPrice(amount:string, currency: string = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(parseFloat(amount))
}