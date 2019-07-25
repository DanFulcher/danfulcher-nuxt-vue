<template>
    <div class="work">

        <InnerHero title="My Work" subTitle="Aside from the beauty of a site you're currently viewing." para="Here’s some examples of other work that I’ve designed and built." />

        <WorkRepeater />

        <CallToAction />

        <transition name="fade">
            <Nav v-if="navOpen"/>
        </transition>
    </div>
</template>

<script>
    import InnerHero from '@/layouts/InnerHero';
    import WorkRepeater from '@/layouts/WorkRepeater';
    import CallToAction from '@/layouts/CallToAction';
    import Nav from '@/layouts/Nav';

    export default {
        name: "work.vue",
        computed: {
            navOpen() {
                return this.$store.state.nav.navOpen;
            }
        },
        components: {
            InnerHero,
            WorkRepeater,
            CallToAction,
            Nav
        }
    }
</script>

<style scoped>

</style>