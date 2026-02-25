export interface Feature {
    id: number
    title: string
    icon: any,
    style: string,
}

export interface FurnitureItem {
    id: number
    name: string
    category: string
    price: number
    originalPrice: number
    image: string
    description: string
    inStock: boolean
}

export interface Features{
    id: number,
    icon: any,
    title: string,
    description: string
}

export interface Stats{
    value: string,
    label: string
}