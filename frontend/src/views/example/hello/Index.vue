<template>
  <section id="hero">
    <div id="ko"></div>
  </section>
</template>
<script>

export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
:root {
  --count: 60%;
}

body {
  display: flex;
  min-height: 100vh;
  margin: 0;
}

#ko {
  margin: auto;
  width: 200px;
  height: 160px;
  border-radius: 20px;
  position: relative;
  border: 1px solid #ddd;
  background-color: white;
}

#ko::after {
  content: '';
  display: block;
  position: absolute;
  left: -3px;
  top: -3px;
  right: -3px;
  bottom: -3px;
  background-color: transparent;
  background-image: conic-gradient(orange, orange var(--count), transparent var(--count));
  z-index: -100;
  border-radius: 21.5px;
}
</style>
