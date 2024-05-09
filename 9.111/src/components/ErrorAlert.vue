<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  z-index: 100;
  margin: 0;
}
</style>
