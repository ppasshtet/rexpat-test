<template>
    <div class="add-product">
        <div class="container add-product__container">
            <h1>Создать объявление</h1>
            <FieldInput :title="'Наименование товара'" v-model="title" :validate="checkIsEmpty">
            </FieldInput>

            <FieldSelect :title="'Выберете местоположение'" v-model="city" :validate="checkIsEmpty">
            </FieldSelect>

            <FieldInput :title="'Фото'" v-model="imageSrc" :validate="checkIsEmpty">
            </FieldInput>

            <FieldInput :maxLength="32" :title="'Цена'" v-model="price" :validate="checkIsEmpty">
            </FieldInput>
            

            <Button @click="addProduct" class="add-product__button">Опубликовать</Button>
        </div>
    </div>
</template>

<script setup>
import FieldInput from '@/components/ui-kit/FieldInput.vue'
import FieldSelect from '@/components/ui-kit/FieldSelect.vue'
import Button from '@/components/ui-kit/Button.vue'
import { useUserStore } from "@/stores/products"
import { ref } from 'vue'
import { useRouter } from "vue-router";

const store = useUserStore()
const router = useRouter();

const title = ref('')
const imageSrc = ref('')
const price = ref('')
const city = ref('')
const currency = '$'

const addProduct = () => {
    if (imageSrc.value && title.value && price.value && city.value) {
        let imagesSrc = imageSrc.value.split(',')

        store.addProduct(imagesSrc, title, price, city, currency)
        router.push("/")
    } else {
        alert('Все поля обязательны для заполнения')
    }

}

const checkIsEmpty = (event) => {
    if (event.target.value) {
        return null
    }
    return "Обязательно для заполнения"
}

</script>

<style>
.add-product__container {
    display: block;
    margin-top: 64px;
}

.add-product__button {
    margin-top: 24px;
}
</style>