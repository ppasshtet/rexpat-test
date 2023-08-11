<template>
    <section class="home">
        <div class="container home__container">
            <div class="subtitle">Все товары</div>
            <div class="products">
                <Product v-for="product in store.products" :key="product.id" :product="product"></Product>
            </div>
        </div>
    </section>
</template>

<script setup>
import Product from '@/components/ui-kit/Product.vue'
import { useUserStore } from "@/stores/products"


const store = useUserStore()

</script>

<style lang="scss">
.home__container {
    display: block;
    margin-top: 64px;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.725rem;

    @include media-tablet-reduced {
        grid-template-columns: repeat(2, 1fr);
    }

    @include media-mobile {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>