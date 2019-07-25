<template>
    <aside class="navigation">
        <div class="navigation__button" @click="closedNav">
            <span class="navigation__button__line"></span>
            <span class="navigation__button__line"></span>
        </div>
        <div class="navigation__header">
            <p>Where to, pal?</p>
        </div>
        <ul>
            <li>
                <a href="/">
                    Home
                </a>
            </li>
            <li>
                <a href="/about">
                    About
                </a>
            </li>
            <li>
                <a href="/work">
                    My Work
                </a>
            </li>
            <li>
                <a href="/contact">
                    Contact
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            openNav: String
        },
        methods: {
            closedNav () {
                this.$store.commit('nav/TOGGLE_NAV')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/global.scss';
    .navigation {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background: $gradient;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        &__button {
            position:absolute;
            top:4rem;
            right:4rem;
            width:2.75rem;
            height:1.625rem;
            cursor:pointer;
            &__line {
                width:100%;
                height:2px;
                position: absolute;
                top:50%;
                left:0;;
                background:#fff;
                display:block;
                margin-bottom:.7rem;
                &:first-child {
                    transform: translate(0, 50%) rotate(45deg);
                }
                &:last-child {
                    transform: translate(0, 50%) rotate(-45deg);
                }
            }
        }
        &__header {
            p {
                color:#fff;
                font-size: 2.25rem;
                font-weight:600;
                margin:0;
            }
        }
        ul {
            list-style:none;
            padding-left:0;
            li {
                padding:1rem 0;
                transition:all .8s;
                text-align:center;
                a {
                    color:#fff;
                    text-decoration:none;
                    font-size:1.3125rem;
                    font-weight:300;
                }
            }
        }
    }
</style>