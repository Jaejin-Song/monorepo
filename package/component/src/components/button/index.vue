<script setup lang="ts">
import { Button, type ButtonProps } from 'ant-design-vue'
import { controller } from './controller'

export type DButtonProps = Omit<ButtonProps, 'type' | 'danger'> & {
    type: 'primary' | 'secondary' | 'error' | 'text' | 'link';
}

const props = defineProps<DButtonProps>();

const { formattedProps, btnClasses } = controller(props)
</script>

<template>
    <Button class="d-component" :class="btnClasses" v-bind="{ ...formattedProps }">
        <slot />
    </Button>
</template>

<style lang="scss" scoped></style>
