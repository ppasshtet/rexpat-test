<template>
    <Field :title="title" class="field-select-wrapper" :isFocused="isFieldFocused" :error="error">
        <select class="select field-select" :ref="'field'" type="text" :class="{
            'field-select--filled': selectValue || isFieldFocused,
        }" :value="selectValue" @input="onInput" @focus="onFocus" @blur="onBlur">
        <option v-for="city in cities" :key="city.id">{{city}}</option>
        </select>
    </Field>
</template>

<script setup>
import Field from '@/components/ui-kit/Field.vue';
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
        required: true,
    },
    title: {
        type: String,
        default: "",
        required: false,
    },
    validate: {
        type: Function,
        required: true
    },
    maxLength: {
        type: Number,
        required: false
    }
});

const cities = ['Moscow', 'Istanbul', 'Bar']

const emit = defineEmits(["update:modelValue"])

const selectValue = ref(props.modelValue);
const error = ref('')

function onInput(event) {
    if (!event.target) return;
    const value = event.target.value;
    selectValue.value = value;
    emit("update:modelValue", value);
}

const isFieldFocused = ref(false);
const onFocus = (event) => {
    error.value = null
    isFieldFocused.value = true;
};
const onBlur = (event) => {
    const validateValue = props.validate(event)
    if (validateValue) {
        error.value = validateValue
    }
    isFieldFocused.value = false;
};
</script>


<style lang="scss" scoped>
.field-select-wrapper {
    position: relative;
}

.field-select {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0px;

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    /* identical to box height, or 20px */
    padding: 0 16px;

    color: rgba($dark, 0.77);
    position: relative;
}
</style>
