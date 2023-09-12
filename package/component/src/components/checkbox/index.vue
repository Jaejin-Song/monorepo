<script setup lang="ts">
import { Checkbox, type CheckboxProps } from 'ant-design-vue'

const props = defineProps<CheckboxProps>();
</script>

<template>
    <Checkbox v-bind="{ ...props }">
        <slot />
    </Checkbox>
</template>

<style scoped></style>
