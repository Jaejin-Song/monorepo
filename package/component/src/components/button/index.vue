<script setup lang="ts">
import { Button, type ButtonProps } from 'ant-design-vue'

const props = defineProps<ButtonProps>();
</script>

<template>
    <Button v-bind="{ ...props }">
        <slot />
    </Button>
</template>

<style scoped></style>
