<template>
    <a :href="this.link" class="button" :type="this.type">
        {{ this.text }}
    </a>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
            link: String,
            type: String
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/global.scss';
    .button {
        background:$gradient;
        width: 200px;
        border-radius: .5rem;
        padding: 1rem 1rem;
        border: 1px solid #fff;
        text-align: left;
        color: #fff;
        font-size: 1rem;
        position: relative;
        z-index: 1;
        text-decoration: none;
        display:block;
        &.alt {
            background:none;
            &:hover {
                color:#43aec4;    
            }
        }
        &:hover {
            background:#fff!important;
            color:#43aec4;
            border:1px solid #43aec4;
        }
        &:not([href]) {
            color:#fff;
        }
        
    }
</style>