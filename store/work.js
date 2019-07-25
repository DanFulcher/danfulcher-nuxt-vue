export const state = () => ({
    work: [
        {
            title: 'The Wolseley',
            content: 'Corbin & King are one of Verb Brands biggest clients, and the first project we did for them was The Wolseley. A restaurant in Mayfair that offers Breakfast, Lunch, Afternoon Tea and Dinner. This project was given to me to build, as they trusted my attention to detail and knew I would deliver a finished product to meet the client\'s standards.\n The site needed to be ecommerce and use the SevenRooms API to show availability for bookings. I built a custom wordpress theme from scratch that would enable to client to update content as well as upload/edit products in their online store.',
            image: require('@/assets/images/wol.png'),
            URL: 'https://www.thewolseley.com'
        },
        {
            title: 'Verb Brands',
            content: 'Verb Brands is a digital agency based in Aldgate East thast specialise in luxury brands. In 2016 I joined their development team as a Mid-Weight Web Developer and quickly proved myself to be a competent developer who consistently produces high quality work.' +
            ' In the summer of 2018 the owners approached the development team with new designs for the company website, and each developer was given a section to work on. I was given the intro section, which I opted to build in Vue. The intro section was an animation that played the first time a user visited to site. There were pictures of the clients we had worked with that flashed up on screen, followed by a fullscreen portfolio video that shrunk down and became part of the homepage hero section after a few seconds. I used Vue to handle the timings and the different methods that were needed to run.',
            image: require('@/assets/images/verb.png'),
            URL: 'https://www.verbbrands.com'
        },
        {
            title: 'Mustique Island',
            content: 'Mustique Island is a private island in the Caribbean. They have villas that can be rented for holiday goers and wanted an online platform that listed these properties and enabled users to get in touch or book their time on the island.' +
            'To achieve the functionality on the \'villa archive\' page I opted to use React. I had been keen to use it for a while and thought it would be a great way to get the filter system to work the way they wanted it to. The villas are saved to the database as a custom post type of wordpress. I used the wp Rest API to fetch this data and output it on the page using React. When a filter is changed, it appends the query to the API and fetches the villas again excluding the ones that no longer apply to the new criteria.' +
            'Upon reflection, this was a great introduction to React and javascript frameworks as a whole, but it does run slower than I would like. I think this is down to the wordpress API being limited in it\'s speed, not necessarily React itself.',
            image: require('@/assets/images/mustique.png'),
            URL: 'https://www.mustique-island.com'
        },
        {
            title: 'Fife Arms',
            content: 'Fife Arms is a hotel in Scotland that offers all sorts of Highland activities as well as a cosy place to stay. The hotel was due to open and they had an ad going out in the press to advertise it. They just needed an online presence so that people could find out more.' +
            'The site is built using laravel and wordpress. This was my largest exposure to working with laravel and the blade templating engine that works with it. It was a good learning experience to find out more about PHP best coding practises and how to work with MVC apllications; keeping logic out of the view using controllers and methods.',
            image: require('@/assets/images/fife-arms.png'),
            URL: 'https://www.thefifearms.com'
        },
    ]
})