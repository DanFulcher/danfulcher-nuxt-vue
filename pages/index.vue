<template>
  <main class="home">

    <Hero title="Dan Fulcher" subTitle="Web Developer & Times Person of the Year 2006"/>

    <section class="content">
      <div class="container">
        <div class="content__text">
          <h1>Hi there! I didn't hear you come in...</h1>
          <p><strong>Welcome to my portfolio! My name's Dan Fulcher. Man, myth, Legend.</strong></p>
          <p>I've been a web developer since 2012, when a spider bite left me with a hunger for learning code, built-in error linting and the most amazing glutes the world has ever seen! Since then I've used my powers to work on a wide variety of websites, use a plethora of technologies, and hone my skills to become the ultimate front-end developer! (Oh yeah, I just used plethora. Not bad, eh!)</p>
          <p>Jokes and nerdy references aside, I've had 5 years of agency experience, working with React, Vue, Wordpress, Laravel, PHP, Scss, Git, Mercurial, Firebase, jQuery, HTML, Css and Javascript.</p>
          <Button text="Read More..." link="http://google.com"/>
        </div>
        <div class="content__image">
          <img src="../assets/images/introFulch.png" />
        </div>
      </div>
    </section>

    <ParallaxSection
      :content="[
        {
          icon: this.vueLogo,
          bold: 'Room with a Vue',
          text: 'Since gaining exposure to javascript frameworks like React and Vue, I\'ve had the opportunity to use them on various commercial projects, as well as personal passion projects. Including this very website you\'re on now, which is built entirely in Vue.'
        },
        {
          icon: this.gitLogo,
          bold: 'Agency Experience',
          text: 'Having worked for multiple digital agencies, both in and out of London, I have gained experience in a wide variety of technologies. From coding languages and frameworks, version control software and best practises, as well as project management tools like JIRA.'
        },
        {
          icon: this.nextIcon,
          bold: 'What\'s next for Dan Fulcher?',
          text: 'I\'m looking to explore javascript frameworks, and become a more experienced javascript developer. At the moment a lot of my work is done in PHP (and laravel) with Wordpress. Javascript development is something I\'ve learnt more in my own time and on the occasional project at work.'
        }
      ]"
    />
    
    <WorkRepeater />

    <CallToAction />

     <transition name="fade">
        <Nav v-if="navOpen"/>
    </transition>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from '@/layouts/Hero.vue'
import Button from '@/components/Button.vue'
import Nav from '@/layouts/Nav.vue'
import ParallaxSection from '@/layouts/ParallaxSection.vue'
import WorkRepeater from '@/layouts/WorkRepeater.vue'
import CallToAction from '@/layouts/CallToAction.vue'
import vueLogo from '../assets/images/vuelogo.png'
import gitLogo from '../assets/images/git.png'
import nextIcon from '../assets/images/nexticon.png'
// import deskImg from '../assets/desk.jpg'

export default {
  name: 'home',
  data: function () {
    return {
        vueLogo: vueLogo,
        gitLogo: gitLogo,
        nextIcon: nextIcon,
        // deskImg: deskImg
    }
  },
  computed: {
    navOpen() {
      return this.$store.state.nav.navOpen;
    }
  },
  components: {
    Hero,
    Button,
    Nav,
    ParallaxSection,
    WorkRepeater,
    CallToAction
  },
}
</script>

<style lang="scss">

</style>
