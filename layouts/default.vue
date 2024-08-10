<template>
    <div class="h-screen lg:max-h-[50rem] max-w-screen-xl mx-auto w-full overflow-hidden flex ">
      <SideBar />
      <section class="h-full bg-white w-full overflow-y-scroll scroll-smooth w-full sm:w-[77%] lg:w-[82%] grid grid-cols-12 py-4 gap-x-2">
        <div class="col-span-12 h-full w-full overflow-y-scroll scroll-smooth">
          <slot />
        </div>
      </section>
      <!-- <MenuBar/> -->
    </div>
  </template>

  <script setup>

  </script>
  <style scoped>

  </style>