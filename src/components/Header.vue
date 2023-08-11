<template>
    <div class="header">
        <div class="container header__container">
            <router-link to="/">
                <div>
                    <img class="header__logo" src="@/assets/images/logo.svg" alt="">
                </div>
            </router-link>
            <router-link :to="route.name === 'add-product' ? '/' : '/add-product'">
                <Button>{{ route.name === "add-product" ? "Отменить" : "Создать объявление" }}</Button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/ui-kit/Button.vue'
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background-color: $white;
    box-shadow: 0px 4px 6px rgba($dark, 0.1);
}

.header__container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    height: 48px;
}
</style>