<template>
    <div class="contact">
        <InnerHero title="Contact Me" subTitle="If you have any questions, or are interested in working with me..." para="Feel free to get in touch!" />
        <ContactForm />
        <CallToAction />

        <transition name="fade">
            <Nav v-if="navOpen"/>
        </transition>
    </div>
</template>

<script>
    import InnerHero from '@/layouts/InnerHero';
    import ContactForm from '@/layouts/ContactForm';
    import CallToAction from '@/layouts/CallToAction';
    import Nav from '@/layouts/Nav';

    export default {
        name: "contact.vue",
        computed: {
            navOpen() {
                return this.$store.state.nav.navOpen;
            }
        },
        components: {
            InnerHero,
            ContactForm,
            CallToAction,
            Nav
        }
    }
</script>

<style scoped>

</style>