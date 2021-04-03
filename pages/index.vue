<template>
  <div class="container">
    <Nav></Nav>
    <MainWidget></MainWidget>
  </div>
</template>

<script lang="ts"></script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  /*@apply min-h-screen justify-center items-center text-center mx-auto; */
  @apply bg-gradient-to-tl items-start from-green-800 to-green-500 text-white font-mono flex flex-col min-h-screen;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
