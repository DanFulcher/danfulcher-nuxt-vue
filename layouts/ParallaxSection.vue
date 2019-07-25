<template>
    <section class="parallax">
        <div class="container">
            <div class="parallax__content" :key="index" v-for="(words, index) in content">
                <img class="icon" :src="words.icon" />
                <p><strong>{{ words.bold }}</strong></p>
                <p>{{ words.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ParallaxSection",
        props: {
            background: String,
            content: Array
        }
    }

</script>

<style scoped lang="scss">
    @import '../assets/global.scss';
    .parallax {
        background:$gradient;
        padding:5rem 0;
        text-align:center;
        &__content {
            color:#fff;
            padding:0 1.5rem;
            flex-grow:1;
            flex-basis:100%;
            margin-bottom:2rem;
            @media(min-width:$screen-sm) {
                flex-basis:33.3%;
                margin-bottom:0;
            }
            .icon {
                width:50%;
                margin-bottom:20px;
            }
        }
    }
</style>