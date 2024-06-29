<template>
  <div>
    <button @click="toggleAnimation">Toggle Animation</button>
    <div style="height: 100px"></div>
    <div style="width: 800px">
      <AnimatedBorder :isActive="isActive">
        <div style="padding: 20px;height: 100px;width: 800px">Content goes here</div>
      </AnimatedBorder>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimatedBorder from "@/components/AnimatedBorder.vue";

export default defineComponent({
  name: 'App',
  components: {
    AnimatedBorder
  },
  setup() {
    const isActive = ref(true);

    const toggleAnimation = () => {
      console.log('set ', isActive.value);
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      toggleAnimation
    };
  }
});
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
