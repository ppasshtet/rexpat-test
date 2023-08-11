import { ref } from 'vue'
import { defineStore } from 'pinia'
import { generateSixDigitNumber } from '@/utils/common.js'


export const useUserStore = defineStore('products', () => {
    const products = ref([
        {
            id: generateSixDigitNumber(),
            imageSrc: ['https://storage.yandexcloud.net/reg-exp-store-medium/31660/e759bf482f.JPEG'],
            title: 'Мастер Бьюти',
            price: '100',
            currency: '$',
            city: 'Istanbul'
        },
        {
            id: generateSixDigitNumber(),
            imageSrc: [
                'https://storage.yandexcloud.net/reg-exp-store-medium/31694/55f4d11ecf.JPEG',
                'https://storage.yandexcloud.net/reg-exp-store-medium/31660/e759bf482f.JPEG',
                'https://storage.yandexcloud.net/reg-exp-store-medium/31694/55f4d11ecf.JPEG',
            ],
            title: 'Гитара',
            price: '500',
            currency: '$',
            city: 'Istanbul'
        },
    ])



    const addProduct = (imageSrc, title, price, city, currency) => {
        const product = {
            id: generateSixDigitNumber(),
            imageSrc,
            title,
            price,
            city,
            currency
        }

        products.value.push(product)
    }

    const deleteProduct = (id) => {
        const index = products.value.findIndex(product => product.id === id)
        products.value.splice(index, 1)
    }

    return {
        products,
        addProduct,
        deleteProduct
    }
})