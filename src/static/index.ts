import { FaLeaf, FaPalette } from "react-icons/fa";
import type { Features, FurnitureItem, Stats } from "../types";
import { HiWrench } from "react-icons/hi2";

export const features: Features[] = [
    {
      id: 1,
      icon: FaLeaf,
      title: 'Tabiy materiallar',
      description: 'Yog\'och, mato va aksessuarlar sifat nazoratingan o\'tgan premium materiallardan tayyorlangan.',
    },
    {
      id: 2,
      icon: FaPalette,
      title: 'Moslashtiriilgan dizayn',
      description: 'Har bir buyurtma interyer uslubnigizga mos rang, o\'lcham va kompositsiya bilan tayyorlandi.',
    },
    {
      id: 3,
      icon: HiWrench,
      title: 'Kafolat va servis',
      description: 'Yetkazib berishdan keyin ham montaj va servis qo\'llab-quvvatlovi davom etadi.',
    },
  ]

export const stats: Stats[] = [
    { value: '12+', label: 'Yillik tajriba' },
    { value: '4.9', label: 'Mijoz bahosi' },
    { value: '900+', label: 'Tayyor loyiha' },
]


export const furnitureData: FurnitureItem[] = [
    {
      id: 1,
      name: 'Divan To\'plami',
      category: 'Divan',
      price: 2500000,
      originalPrice: 3000000,
      image: 'https://images.unsplash.com/photo-1759722665935-0967b4e0da93?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Zamonaviy dizayn, qulay o\'rindiq',
      inStock: true,
    },
    {
      id: 2,
      name: 'Stol To\'plami',
      category: 'Stol',
      price: 800000,
      originalPrice: 1000000,
      image: 'https://images.unsplash.com/photo-1731176622143-d93a60c045bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Keng va mustahkam, zamonaviy dizayn',
      inStock: true,
    },
    {
      id: 3,
      name: 'Lounge Kreslo',
      category: 'Kreslo',
      price: 1200000,
      originalPrice: 1500000,
      image: 'https://images.unsplash.com/photo-1765663241884-ebd171bdda1d?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Qolgan o\'rinda tungi dam olish',
      inStock: true,
    },
    {
      id: 4,
      name: 'Yotoq To\'plami',
      category: 'Yatak',
      price: 3500000,
      originalPrice: 4200000,
      image: 'https://images.unsplash.com/photo-1606136944609-5e8ecd4a3c56?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Premium kashmir, ortopedik' ,
      inStock: false,
    },
    {
      id: 5,
      name: 'Shkaf To\'plami(Garderob)',
      category: 'Garderob',
      price: 600000,
      originalPrice: 800000,
      image: 'https://images.unsplash.com/photo-1722859183750-fdf609e56b99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Keng va tartibli, zamonaviy dizayn',
      inStock: true,
    },
    {
      id: 6,
      name: 'Oshxona mebellari to\'plami',
      category: 'Stol',
      price: 1800000,
      originalPrice: 2200000,
      image: 'https://images.unsplash.com/photo-1684928365167-e91916573122?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Zamonaviy va funksional, oshxonangizni bezang',
      inStock: true,
    },
]