<template>
    <main class="about">
        <InnerHero title="About Me" subTitle="So who is Dan Fulcher? I hear you ask..." para="Well the truth is, I’m no hero. I’m just a man with a passion for designing and building nice things for the internet!" />

        <section class="content">
            <div class="container">
                <div class="content__text">
                <h1>It’s not who I am, but what I do, that defines me...</h1>
                <p><strong>Whether I'm designing or coding, the users interactions and overall experience is my main concern.</strong></p>
                <p>Although I've mainly done development work professionally, my passion is with UX and overall aesthetic of a website. I just get a kick out of designing and building something that looks cool and works well!</p>
                <p>I love a great looking site, and won’t stop a design until I’m 100% sure it’s as good as it can be! By spending my free time looking through blog articles about current web design trends, and scouring the web for inspiration (neerd!), you can be sure that I’ll have a handful of ideas to start your project and the end product will be something we can all be proud of.</p>
                </div>
                <div class="content__image">
                <img src="../assets/images/aboutFulch.png" />
                </div>
            </div>
            </section>

            <section class="content content--gradient">
            <div class="container">
                <div class="content__text">
                <h1>My Origin Story</h1>
                <p><strong>My first taste of web design came when I was in college. By that I mean that we did some designs in Microsoft Publisher and coded html tables using Notepad (Ugh! Disgusting!) but somehow it was enough to make me think I wanted to do it for a living.</strong></p>
                <p>After months of applying for jobs, I was eventually offered an apprenticeship by a digital agency in Rayleigh, Essex. I was taken on with 4 other apprentices and was taught how to use Photoshop to mock up designs that we would then be given feedback on by senior members of staff. It wasn't long before I was producing work that was good enough to be presented to and used by clients!</p>
                <p>It was on my apprenticeship that I also learnt to code using HTML, CSS and a little bit of PHP. I started to code my designs into static html pages when I didn't have anything else to do. I also coded my first portfolio site and implemented some jQuery plugins for added functionality.</p>
                <p>After my apprenticeship, I worked for a web design company in Leigh-On-Sea where I worked heavily with Wordpress and templated themes. This job was my introduction to the content management system and the experience enabled me to move on to other jobs where I would produce bespoke Wordpress themes from scratch. These jobs would further my knowledge of various coding languages and make me into a more rounded developer.</p>
                </div>
            </div>
            </section>

            <section class="content">
            <div class="container">
                <div class="content__image">
                <img src="../assets/images/aboutFulch2.png" />
                </div>
                <div class="content__text">
                <h1>The Man Behind the Code...</h1>
                <p><strong>When I’m not working I have a few hobbies that keep me out of trouble.</strong></p>
                <p>I’ve been into parkour & freerunning for about 8 years. I train regularly after work and at weekends, attending gym sessions and meeting up with friends. I have recently become a level 1 qualified coach and have classes that I teach every Friday and Saturday. Doing parkour has greatly increased my confidence and creativity, even outside of the sport.</p>
                <p>I also play guitar. Starting out playing songs by pop-punk bands such as Sum-41, Blink 182 and Green Day. However, as my taste in music has grown, so has my style of guitar playing. Now I enjoy playing acoustic, fingerpicking music by artists such as Ben Howard, Mumford & Sons, Jose Gonzalez and John Butler.</p>
                <p>Rock Climbing & Bouldering kind of tie in with my parkour training, but I’ve recently been enjoying doing it as a seperate activity by going to indoor climbing centres in London as well as Fairlop Bouldering Park in Hainault.</p>
                <p>A couple of years ago, I went on a road trip to Cornwall with some friends and spent the week surfing and camping. Having never surfed before, I was pleased with how I picked it up, and it was so much fun! We’ve been back once since and intend to do it again in the future.</p>
                </div>
            </div>
            </section>

            <CallToAction />

        <transition name="fade">
            <Nav v-if="navOpen"/>
        </transition>
    </main>
</template>

<script>
    import InnerHero from '@/layouts/InnerHero';
    import Nav from '@/layouts/Nav';
    import CallToAction from '@/layouts/CallToAction';
    export default {
        name: 'about',
        computed: {
            navOpen() {
                return this.$store.state.nav.navOpen;
            }
        },
        components: {
            InnerHero,
            Nav,
            CallToAction
        }
    }
</script>

<style lang="scss">
</style>