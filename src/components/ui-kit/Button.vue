<template>
    <!-- takes in button--inherit -->
    <div class="button">
        <span class="button__text text text--action">
            <slot />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    position: relative;
    align-items: center;
    width: max-content;
    color: $white;


    padding: 1rem 1.25rem;
    background-color: $brand-light;
    border-radius: 1rem;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: $brand;
    }

    &:active {
        background-color: none;
    }
}
</style>