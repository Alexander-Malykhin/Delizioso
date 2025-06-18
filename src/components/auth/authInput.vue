<script setup>
//SETTINGS
import {INPUT_AUTH_PROPS} from "@/components/auth/settings/props.js";
defineProps(INPUT_AUTH_PROPS)

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="field">
    <label class="label">
      {{ label }}:
    </label>
    <input class="input"
           :value="modelValue"
           :type="type"
           :placeholder="placeholder"
           @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.field {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.label {
  color: $black;
  font-weight: $fw_500;
}

.input {
  background-color: rgba($input, 0.1);
  border-radius: 0.7rem;
  padding: 1.3rem 2.2rem;
  font-weight: $fw_400;

  &::placeholder {
    color: $black;
  }
}
</style>