<template>
<div id="app">
    <div class="header">
        <div class="header__canvas-menu hide-if-notsmall">
            <div class="header__canvas-menu__toggle-button" @click="openMenu">menu</div>
        </div>
        <div class="header__logo-wrapper"><h1 class="brand__logo"><a v-link="{name: 'home'}">shopping-cart</a></h1></div>
        <!-- HIDE non off canvas menu on small devices --> 
        <div class="header__links-wrapper hide-if-small">
            <ul class="header__menu">
                <li class="header__link"><a v-link="{name: 'viewCart'}">
                    <div class="header__icon">
                        <svg class="header__icon--basket" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                          <g>
                            <g>
                              <path d="m455.8,175.7h-145.4l63.3-122c2.7-5.1 0.7-11.4-4.5-14.1-5.1-2.6-11.4-0.7-14.1,4.4l-68.3,131.6h-61.8l-68.2-131.6c-2.7-5.1-8.9-7.1-14.1-4.4-5.1,2.7-7.1,8.9-4.5,14.1l63.3,122h-145.3c-24.9,0-45.2,20.3-45.2,45.2 0,24.9 20.2,45.2 45.1,45.2l41.2,199.3c1,4.8 5.3,8.3 10.2,8.3h296.9c4.9,0 9.2-3.5 10.2-8.3l41.3-199.4c24.9,0 45.1-20.3 45.1-45.2 0-24.9-20.3-45.1-45.2-45.1zm-59.8,277h-280l-38.6-186.7h357.1l-38.5,186.7zm59.8-207.6h-399.6c-13.4,0-24.3-10.9-24.3-24.3 0-13.4 10.9-24.3 24.3-24.3h399.7c13.4,0 24.3,10.9 24.3,24.3-0.1,13.4-11,24.3-24.4,24.3z"/>
                              <path d="m137,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4z"/>
                              <path d="m208.3,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z"/>
                              <path d="m279.5,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z"/>
                              <path d="m350.7,337.4h16.3c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.3,10.4z"/>
                              <path d="m172.6,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4 0,5.7 4.7,10.4 10.4,10.4z"/>
                              <path d="m243.9,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4-2.84217e-14,5.7 4.6,10.4 10.4,10.4z"/>
                              <path d="m315.1,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4-5.68434e-14,5.7 4.7,10.4 10.4,10.4z"/>
                            </g>
                          </g>
                        </svg>
                    </div>
                        Cart
                    </a>
                </li>
            </ul>
        </div>
        <!-- SHOW off canvas menu -->
        <div class="header__links-wrapper links-wrapper--canvas hide-if-notsmall"
            v-bind:class="menuData.opened">
            <div class="header__close-block">
                <a href="#" class="header__canvas-button" @click.prevent="closeMenu">close</a>
            </div>
            <ul class="header__menu--canvas">
                <li class="header__link--canvas">
                    <a v-link="{name: 'home'}">
                        <i class="icon">
                            <svg class="header__icon--home-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve">
                            <g>
                                <path style="fill:#fff;" d="M30.22,5L1.241,34.218c-0.987,0.987-0.987,2.588,0,3.576l20.466,20.466
                                    c0.987,0.987,2.588,0.987,3.576,0L53.5,29.28L53.5,5H30.22z M43.5,19c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4
                                    C47.5,17.209,45.709,19,43.5,19z"/>
                                <path style="fill:#000;" d="M43.5,7c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S47.918,7,43.5,7z M43.5,19
                                    c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C47.5,17.209,45.709,19,43.5,19z"/>
                                <path style="fill:#000;" d="M43.5,16c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l14-14
                                    c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-14,14C44.012,15.902,43.756,16,43.5,16z"/>
                                <path style="fill:#000;" d="M22.55,44.399c-1.971,0-3.862-0.777-5.268-2.183c-2.905-2.905-2.905-7.633,0-10.538
                                    c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414c-2.125,2.126-2.125,5.584,0,7.71c1.137,1.137,2.71,1.713,4.312,1.578
                                    c0.806-0.067,1.539-0.461,2.063-1.107c0.553-0.683,0.808-1.574,0.699-2.447l-1.326-10.605c-0.176-1.411,0.235-2.853,1.13-3.956
                                    c0.871-1.073,2.096-1.727,3.45-1.839c2.193-0.181,4.338,0.603,5.892,2.156c2.905,2.905,2.905,7.633,0,10.538
                                    c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414c2.125-2.126,2.125-5.584,0-7.71c-1.137-1.136-2.703-1.714-4.312-1.578
                                    c-0.806,0.067-1.539,0.461-2.063,1.107c-0.553,0.682-0.808,1.574-0.699,2.447l1.326,10.605c0.176,1.41-0.236,2.853-1.13,3.955
                                    c-0.871,1.074-2.096,1.728-3.45,1.84C22.966,44.391,22.758,44.399,22.55,44.399z"/>
                                <path style="fill:#000;" d="M16.533,43.968c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l18.818-18.818
                                    c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L17.24,43.675C17.044,43.87,16.789,43.968,16.533,43.968z"/>
                            </g>
                            </svg>
                        </i>
                        <span>Shop</span>
                    </a>
                    <a v-link="{name: 'viewCart'}">
                        <i class="icon">
                            <svg class="header__icon--basket" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                              <g>
                                <g>
                                  <path d="m455.8,175.7h-145.4l63.3-122c2.7-5.1 0.7-11.4-4.5-14.1-5.1-2.6-11.4-0.7-14.1,4.4l-68.3,131.6h-61.8l-68.2-131.6c-2.7-5.1-8.9-7.1-14.1-4.4-5.1,2.7-7.1,8.9-4.5,14.1l63.3,122h-145.3c-24.9,0-45.2,20.3-45.2,45.2 0,24.9 20.2,45.2 45.1,45.2l41.2,199.3c1,4.8 5.3,8.3 10.2,8.3h296.9c4.9,0 9.2-3.5 10.2-8.3l41.3-199.4c24.9,0 45.1-20.3 45.1-45.2 0-24.9-20.3-45.1-45.2-45.1zm-59.8,277h-280l-38.6-186.7h357.1l-38.5,186.7zm59.8-207.6h-399.6c-13.4,0-24.3-10.9-24.3-24.3 0-13.4 10.9-24.3 24.3-24.3h399.7c13.4,0 24.3,10.9 24.3,24.3-0.1,13.4-11,24.3-24.4,24.3z"/>
                                  <path d="m137,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4z"/>
                                  <path d="m208.3,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z"/>
                                  <path d="m279.5,337.4h16.2c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z"/>
                                  <path d="m350.7,337.4h16.3c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.3,10.4z"/>
                                  <path d="m172.6,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4 0,5.7 4.7,10.4 10.4,10.4z"/>
                                  <path d="m243.9,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4-2.84217e-14,5.7 4.6,10.4 10.4,10.4z"/>
                                  <path d="m315.1,402.2h16.2c5.8,0 10.4-4.7 10.4-10.4 0-5.8-4.7-10.4-10.4-10.4h-16.2c-5.8,0-10.4,4.7-10.4,10.4-5.68434e-14,5.7 4.7,10.4 10.4,10.4z"/>
                                </g>
                              </g>
                            </svg>
                        </i>
                        <span>Cart</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main__block">
        <router-view
            keep-alive
            transition
            transition-mode="out-in"
            class="view">
        </router-view>
    </div>
</div>
</template>
<style lang='sass'>
    $main-color: #f39c12;
    body {
        font-family: 'Roboto', Arial, sans-serif;
        font-size: 100%;
        margin:  0;
        padding: 0;
    }
    .view {
        transition: opacity .4s ease;
        &.v-enter, &.v-leave {
            opacity: 0;
        }
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 30px;
        position: relative;
        border-bottom: 1px solid $main-color;
        align-items: stretch;
        &__canvas-menu {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            &__toggle-button {
                padding: 10px;
                cursor: pointer;
                background-color: transparentize($main-color, .2);
                text-transform: uppercase;
                color: white;
            }
        }
        &__logo-wrapper {
            font-size: 1.2em;
            display: flex;
            align-items: center;
            .brand__logo{
                font-weight: normal;
                margin: 0;
                a {
                    color: #000;
                    text-decoration: none;
                }
            }
        }
        &__links-wrapper {
            display: block;
            &.links-wrapper--canvas {
                transition: left ease .3s;
                position: fixed;
                left: -350px;
                width: 350px;
                top: 0;
                z-index: 999;
                background: $main-color;
                display: block;
                height: 100%;
                &.open {
                    left: 0;
                }
                .header__close-block {
                    margin: 12px;
                    .header__canvas-button {
                        font-size: 28px;
                        text-decoration: none;
                        color: #fff;
                        text-align: left;
                    }
                }
            }
            .header__menu {
                display: flex;
                padding: 0;
                margin: 0;
                .header__link {
                    list-style: none;
                    display: flex;
                    text-align: center;
                    a{
                        min-width: 100px;
                        padding: 15px;
                        color: $main-color;
                        text-decoration: none;
                        .header__icon {
                            margin: 0 auto;
                            margin-bottom: 5px;
                            width: 40px;
                            height: 40px;
                            &--basket {
                                transition: transform .3s ease;
                                fill: darken($main-color, 5%);
                            }
                            &--home-icon {

                            }
                        }
                        &:hover {
                            background: darken(#fff, 5%);
                            color: darken($main-color, 5%);
                            .header__icon {
                                &--basket {
                                    transform: translateY(-5%);
                                    fill: #000;
                                }
                            }
                        }
                    }
                }
                &--canvas {
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    .header__link--canvas {
                        list-style: none;
                        a {
                            display: flex;
                            align-items: center;
                            color: #fff;
                            padding: 15px 20px;
                            text-decoration: none;
                            .icon {
                                transition: all .1s ease-out;
                                width: 30px;
                                display: inline-block;
                                fill: #fff;
                                margin-right: 10px;
                            }
                            &:hover {
                                background: darken($main-color, 15%);
                                .icon {
                                    margin-right: 20px;
                                    transform: scale(1.5);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /*  Media queries */

    @media all and (max-width: 800px) {
        .header {
            flex-direction: column;
            &__logo-wrapper {
                margin: 10px 0;
                justify-content: center;
            }
            &__links-wrapper {
                justify-content: space-around;
            }
        }
        .hide-if-small {
            display: none !important;
        }
    }
    @media all and (min-width: 800px) {
        /* basic helper */
        .hide-if-notsmall {
            display: none !important;
        }
    }
</style>
<script>
export default {
    data() {
        return {
            menuData: {
                opened:{ 
                    'open': false
                }
            },
            shoppingCart: []
        }
    },
    methods : {
        openMenu() {
            this.menuData.opened.open = true
        },
        closeMenu() {
            this.menuData.opened.open = false
        }
    }
}
</script>


