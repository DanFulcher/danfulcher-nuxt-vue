<template>
    <section class="call-to-action">
        <div class="call-to-action__content">
            <h1 class="call-to-action__title">{{ this.title }}</h1>
            <p class="call-to-action__text">{{ this.content }}</p>
            <Button :text="this.buttonText" :link="this.buttonLink" :class="this.buttonClass"/>
        </div>
    </section>
</template>

<script>
    import Button from '@/components/Button.vue'
    export default {
        name: "CallToAction",
        data: function () {
            return {
                title: 'Like what you see?',
                content: 'I know they say "don\'t meet your heroes", but I promise I won\'t disappoint. In fact, we don\'t even have to meet! Feel free to just say hi, tell me about your day, or give me a favourite animal fact. I love animal facts!',
                buttonText: 'Get in Touch',
                buttonLink: 'contact',
                buttonClass: 'alt'
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped lang="scss">
@import '../assets/global.scss';
.call-to-action {
    background:$gradient;
    padding:5rem 1rem;
    text-align:center;
    color:#fff;
    &__content {
        width:100%;
        @media(min-width:$screen-md) {
            width:50%;
            margin:0 auto;
        }
        p {
            margin-bottom:1rem;
        }
        a.button {
            background:none;
            color:#fff;
            display:inline-block;
            padding:1rem 3rem;
            width:auto;
            transition:background .8s;
            &:hover {
                background:rgba(255,255,255,.4);
                border:1px solid #fff;
            }
        }
    }

}
</style>