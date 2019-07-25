<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
    @import '../assets/global.scss';
    #app {
        font-family: "Lato", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        margin: 0;
        h1 {
            font-size: 2.25rem;
            line-height: 1.1;
            font-weight: 700;
            margin-top:0;
            margin-bottom:1rem;
        }
    }
    .container {
        width:auto;
        margin:0 auto;
        padding:0 1rem;
        display:flex;
        justify-content: space-between;
        flex-wrap:wrap;
        @media(min-width:$screen-sm) {
            width:750px;
            max-width:100%;
            flex-wrap:nowrap;
        }
        @media(min-width:$screen-md) {
            width:970px;
            max-width:100%;
        }
        @media(min-width:$screen-lg) {
            width:1170px;
            max-width:100%;
        }
    }
    html {
        font-size: 16px;
    }
    .content {
        &__text {
            flex-basis:100%;
            padding:6.25rem 0;
            @media (min-width:$screen-sm) {
                flex-basis:50%;
            }
            @media(min-width:$screen-md) {
                flex-basis:60%;
            }
        }
        &__image {
            display:flex;
            flex-basis:0%;
            @media(min-width:$screen-sm) {
                flex-basis:45%;
            }
            @media(min-width:$screen-md) {
                flex-basis:25%;
            }
            img {
                align-self:flex-end;
                width:100%;
            }
        }
        &--gradient {
            text-align:center;
            background:$gradient;
            color:#fff;
            .content__text {
                flex-basis:75%;
                margin:0 auto;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
