<template>
    <section class="mywork">
        <div class="container">
            <div class="mywork__header">
                <h1>Take a gander at some of my latest work...</h1>
            </div>
        </div>
        <div class="container">
            <div class="mywork__content">
                <div class="mywork__content__project" :key="index" v-for="(project, index) in myWork" :class="index % 2 == 0 ? 'reverse' : ''">
                    <div class="project-content">
                        <h2>{{ project.title }}</h2>
                        <p>{{ project.content }}</p>
                        <Button text="Visit Site.." :link="project.URL"/>
                    </div>
                    <div class="project-image">
                        <img :src="project.image" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import Button from '@/components/Button.vue'
    export default {
        name: "WorkRepeater",
        computed: {
            myWork() {
                return this.$store.state.work.work;
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped lang="scss">
@import '../assets/global.scss';
.mywork {
    padding:6.25rem 0;
    &__header {
        margin-bottom:2.5rem;
        @media (min-width: $screen-sm) {
            margin-bottom:5rem;
        }
    }
    &__content {
        flex-basis:100%;
        &__project {
            display:flex;
            justify-content: space-between;
            flex-direction: column;
            margin-bottom:5rem;
            @media(min-width: $screen-sm) {
                flex-direction:row;
            }
            &.reverse {
                @media (min-width: $screen-sm) {
                    flex-direction: row-reverse;
                }
            }
            .project-content {
                flex-basis:100%;
                margin-bottom:2.5rem;
                @media(min-width:$screen-sm) {
                    flex-basis:48%;
                    margin-bottom:0;
                }
                @media (min-width: $screen-md) {
                    flex-basis:38%;
                }
            }
            .project-image {
                flex-basis:100%;
                @media(min-width: $screen-sm) {
                    flex-basis: 50%;
                }
                @media (min-width: $screen-md) {
                    flex-basis:60%;
                }
                img {
                    width:100%;
                }
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>