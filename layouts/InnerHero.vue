<template>
    <section class="inner-hero">
        <div class="inner-hero__nav-button" @click="openNav">
            <span class="inner-hero__nav-button__line"></span>
            <span class="inner-hero__nav-button__line"></span>
            <span class="inner-hero__nav-button__line"></span>
        </div>
        <div class="inner-hero__content">
            <h1>{{ title }}</h1>
            <h2>{{ subTitle }}</h2>
            <p>{{ para }}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'InnerHero',
        props: {
            title: String,
            subTitle: String,
            para: String
        },

        methods: {
            openNav () {
                this.$store.commit('nav/TOGGLE_NAV')
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../assets/global.scss';
.inner-hero {
    background: $gradient;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    color:#fff;
    position: relative;
    padding:10rem 0;
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
        @media(min-width:$screen-md) {
            width:50%;
        }
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
        p {
            font-size:1.5rem;
            font-weight:300;
        }
    }
}
</style>