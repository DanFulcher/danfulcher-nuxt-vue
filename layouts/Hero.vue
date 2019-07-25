<template>
  <section class="hero">
    <div class="hero__nav-button" @click="openNav">
      <span class="hero__nav-button__line"></span>
      <span class="hero__nav-button__line"></span>
      <span class="hero__nav-button__line"></span>
    </div>
    <div class="hero__content">
      <img src="../assets/images/logo-large.png" class="hero__content__logo" />
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
    </div>
    <div class="hero__scroll">
      <p>Do the thing</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    subTitle: String
  },

  methods: {
      openNav () {
         this.$store.commit('nav/TOGGLE_NAV')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/global.scss';
.hero {
  background: $gradient;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  color:#fff;
  position: relative;
  &__nav-button {
    position:absolute;
    top:4rem;
    right:4rem;
    width:2.75rem;
    cursor:pointer;
    &__line {
      width:100%;
      height:2px;
      position: relative;
      background:#fff;
      display:block;
      margin-bottom:.7rem;
      &:last-child {
        margin-bottom:0;
      }
    }
  }
  &__content {
    text-align:center;
    padding:1rem;
    h1 {
      font-size:3.5rem;
      font-weight:100;
      margin-top:1rem;
      margin-bottom:1rem;
    }
    h2 {
      font-size: 1.875rem;
      font-weight: 400;
      margin: 0;
    }
  }
  &__scroll {
    position: absolute;
    bottom:2rem;
    p {
      margin:0;
      cursor:pointer;
      &::after {
        content:'';
        width:10px;
        height:10px;
        position:absolute;
        bottom:-15px;
        left:50%;
        transform: translateX(-50%) rotate(45deg);
        border-right:1px solid #fff;
        border-bottom:1px solid #fff;
      }
    }
  }
}
</style>
