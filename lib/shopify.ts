const shop = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
const endpoint = `https://${shop}/api/2026-04/graphql.json`

async function shopifyFetch({query, variables}: {query:string; variables?: Record<string,unknown>}) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
        },
        body: JSON.stringify({query, variables}),
    })
    return response.json()
}

export async function getCollectionByHandle(handle: string) {
    const query = `{
        collection(handle: "${handle}") {
            title
            products(first:10, reverse:true) {
                edges {
                node {
                    id
                    title
                    handle
                    createdAt
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images (first:1 ) {
                            edges {
                                node {
                                    url
                                    altText
                                }
                            }
                           
                        }
                    }
                }
            }
        }
    }`
    const data = await shopifyFetch({ query })
    return data.data.collection
}


export async function getProductByHandle(
    handle:string
    ) {
    const query = `{
        product(handle: "${handle}") {
            id
            title
            handle
            description
            priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
            images(first: 5) {
                edges {
                    node {
                        url
                        altText
                    }
                }
            }
            variants(first: 10) {
                edges {
                    node {
                        id
                        title
                        price {
                            amount
                            currencyCode
                        }
                    availableForSale
                    }
                }
        }

        }
    }`
    const data = await shopifyFetch({ query })
    return data.data.product
}

export async function cartCreate(
    merchandiseId: string, 
    quantity: number
) {
  const data = await shopifyFetch({
    query: `
      mutation cartCreate($input: CartInput) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            cost {
                subtotalAmount {
                    amount
                    currencyCode
                }
                totalAmount {
                    amount
                    currencyCode
                }
            }
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  cost {
                    totalAmount {
                        amount
                        currencyCode
                    }
                }
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                    }
                    image {
                        url
                        altText
                    }
                    product {
                        title
                    }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      input: {
        lines: [{ merchandiseId, quantity }]
      }
    }
  })
  return data.data.cartCreate.cart
}

export async function cartLinesAdd(
  cartId: string,
  merchandiseId: string,
  quantity: number
) {
  const data = await shopifyFetch({
    query: `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            cost {
                subtotalAmount {
                    amount
                    currencyCode
                }
                totalAmount {
                    amount
                    currencyCode
                }
            }
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  cost {
                    totalAmount {
                        amount
                        currencyCode
                    }
                }

                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                    }
                    image {
                        url
                        altText
                    }
                    product {
                        title
                }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      cartId,
      lines: [{ merchandiseId, quantity }],
    },
  })
  return data.data.cartLinesAdd.cart
}

export async function getCart(cartId: string) {
  const data = await shopifyFetch({
    query: `
      query getCart($cartId: ID!) {
        cart(id: $cartId) {
          id
          checkoutUrl
          cost {
            subtotalAmount {
                amount
                currencyCode
            }
            totalAmount {
                amount
                currencyCode
            }
        }
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                cost {
                    totalAmount {
                        amount
                        currencyCode
                    }
                }

                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { cartId },
  })
  return data.data.cart
}