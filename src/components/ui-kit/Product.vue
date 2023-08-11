<template>
    <div class="product">
        <div class="product__image-wrapper">
            <img class="product__image" :src="currentImage" />
            <div v-if="product.imageSrc.length > 1" class="product__navigation">
                <div v-if="currentImageIndex !== 0" @click="currentImageIndex -= 1"
                    class="text product__navigation-button product__navigation-button--prev">prev</div>
                <div v-if="currentImageIndex + 1 != product.imageSrc.length" @click="currentImageIndex += 1"
                    class="text product__navigation-button product__navigation-button--next">next</div>
            </div>
        </div>
        <div class="product__info">
            <div class="product__description">
                <div class="product__title">{{ product.title }}</div>
                <div class="product__price">{{ product.price }} {{ product.currency }}</div>
                <div class="product__city">{{ product.city }}</div>
            </div>
            <Button @click="deleteProduct">Удалить</Button>
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/ui-kit/Button.vue'
import { useUserStore } from "@/stores/products"
import { computed, ref } from 'vue'

const store = useUserStore()

const props = defineProps({
    product: Object,
});

const deleteProduct = () => {
    store.deleteProduct(props.product.id)
}

const currentImageIndex = ref(0)
const currentImage = computed(() => {
    return props.product.imageSrc[currentImageIndex.value]
})
</script>

<style lang="scss">
.product {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 1.25rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, .06), 0 0 1px rgba(30, 30, 30, .12), 0 12px 20px rgba(30, 30, 30, .08);
    cursor: pointer;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.625rem;

    font-family: 'Roboto';
    font-weight: 500;
}

.product__image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
}

.product__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
}

.product__type {
    color: #6d6d6d;
    font-weight: 400 !important;
}

.product__title {
    font-size: 24px;
}

.product__city {
    font-size: 12px;
    color: $gray-black;
}

.product__info {
    display: flex;
    justify-content: space-between;
}

.product__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 50%;
}

.product__navigation {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    // justify-content: space-between;
    align-items: center;
    padding: 8px;
}

.product__navigation-button {
    color: white;
    padding: 4px 8px;
    border-radius: 0.5rem;
    background-color: rgba($dark, 0.3);
    user-select: none;

    &:hover {
        background-color: rgba($dark, 0.5);
    }

    &:active {
        background-color: rgba($dark, 0.8);
    }

    &--next {
        margin-left: auto;
    }

    &--prev {
        margin-right: auto;
    }
}
</style>