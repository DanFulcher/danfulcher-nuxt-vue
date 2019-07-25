<template>
    <section class="contact-form">
        <div class="container">
            <div class="contact-form__content">
                <h1>Please fill out the simple form below...</h1>
                <p>Or email me direct at me@danfulcher.co.uk<br/>
                I am usually quick to respond, so you won’t be left hanging for long!</p>
                <form class="form" @submit.prevent="submit">
                    <div class="form__row">
                        <input placeholder="Name" v-model="name" />
                        <input placeholder="Email" v-model="email" />
                    </div>
                    <div class="form__row">
                        <textarea placeholder="Message" v-model="message"></textarea>
                    </div>
                    <Button text="Submit" type="submit" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
        name: "contact-form.vue",
        data: function() {
            return {
                name: '',
                email:'',
                message: '',
                submitted: false
            }
        },
        methods: {
            submit: function() {
                this.submitted = true;

                // var api_key = '9bcac97002679dea57514c15e5a23473-16ffd509-0e67354c';
                // var domain = 'sandboxb812b2c93b76415a8c76015c41961fbc.mailgun.org';
                // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
                
                // var data = {
                // from: 'Excited User <pkfulch1408@gmail.com>',
                // to: 'pkfulch1408@gmail.com',
                // subject: 'Mailgun test',
                // text: 'Testing some Mailgun awesomeness!'
                // };
                
                // mailgun.messages().send(data, function (error, body) {
                //     if(error) {
                //         console.log(error);
                //     } else {
                //         console.log(body);
                //     }
                // });
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/global.scss';
    .contact-form {
        padding:6.25rem 0;
        .form {
            &__row {
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                @media(min-width:$screen-md) {
                    flex-direction:row;
                }
                input {
                    width:100%;
                    padding: 15px;
                    margin-bottom: 30px;
                    border-radius: 3px;
                    color: #43aec4;
                    font-size: 18px;
                    border: 1px solid #43aec4;
                    @media(min-width:$screen-md) {
                        width:49%;
                    }
                }
                textarea {
                    width:100%;
                    height:150px;
                    padding: 15px;
                    margin-bottom: 30px;
                    border-radius: 3px;
                    color: #43aec4;
                    font-size: 18px;
                    border: 1px solid #43aec4;
                }
            }
        }
    }
</style>