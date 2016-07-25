<template>
    <div class="sell-item">
        <div class="sell-item__header">
            <div class="sell-item__header-image-wrapper">
                <img src="http://lorempixel.com/400/200" alt="image">
                <div class="sell-item__header-buttons hide-if-small">
                    <div class="sell-item__header-button header-button--inc" @click="addToBasket()">
                        <div class="header-button__target-icon">+</div>
                        <div class="header-button__target-description">
                            add to cart
                        </div>
                    </div>
                    <div class="sell-item__header-button header-button--dec" @click="removeFromBasket()">
                        <div class="header-button__target-icon">-</div>
                        <div class="header-button__target-description">
                            remove from cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sell-item__body">
            <div class="sell-item__description">
                <h3 class="sell-item__description-header">{{ item.name }}</h3>
                <p>{{ item.description }}</p>
            </div>
            <div class="sell-item__info-block">
                <div class="sell-item__info-item item--price">
                    <span>price: {{item.price}}</span> <span>$</span> 
                </div>
                <div class="sell-item__info-item">
                    <span>type: {{item.type}}</span>
                </div>
            </div>
            <div class="sell-item__action-panel hide-if-notsmall">
                <div class="action-panel__action-buttons">
                    <button @click="addToBasket()" class="action-panel__action-button action-button--inc">Add to cart</button>
                    <button @click="removeFromBasket()" class="action-panel__action-button action-button--dec">Remove from cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='sass'>
    $link-green: #2ecc71;
    $link-orange: #f39c12;
    $border-image-color: mix($link-orange, white, 10%);
    .sell-item {
        width: 40%;
        box-sizing: border-box;
        box-shadow: 0px 0px 3px darken(#fff, 40%);
        margin-bottom: 20px;
        &__header {
        }
        &__header-image-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            height: 195px;
            border-bottom: 1px solid $link-orange;
            img {
                height: 100%;
            }
        }
        &__header-buttons {
            z-index: 999;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 100%;
            width: 100%;
            display: flex;
            .sell-item__header-button {
                display: flex;
                position: relative;
                width: 50%;
                opacity: 0;
                transition: opacity .3s ease;
                cursor: pointer;
                justify-content: center;
                color: #fff;
                align-items: center;
                &:hover {
                    opacity: 1;
                }
                &.header-button--inc {
                    background-color: transparentize($link-orange, .35);
                }
                &.header-button--dec {
                    background-color: transparentize($link-green, .35);
                }
                .header-button__target-icon {
                    font-size: 48px;
                }
                .header-button__target-description {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px 0px;
                    background: rgba(0,0,0, .45);
                    text-align: center;
                    text-transform: uppercase;
                }
            }
        }
        &__action-panel {
            margin: 15px 0;
            .action-panel__action-buttons {
                display: flex;
                justify-content: space-between;
                .action-panel__action-button {
                    display: flex;
                    justify-content: center;
                    flex-basis: 50%;
                    padding: 15px 0;
                    color: #fff;
                    text-decoration: none;
                    font-size: 110%;
                    cursor: pointer;
                    border: none;
                    &.action-button--inc {
                        background-color: $link-orange;
                        &:hover {
                            background-color: darken($link-orange, 5%);
                        }
                    }
                    &.action-button--dec {
                        background-color: $link-green;
                        &:hover {
                            background-color: darken($link-green, 5%);
                        }
                    }
                }
            }
        }
        &__body {
            padding: 20px;
        }
        &__description {
            &-header {
                margin-top: 0;
                margin-bottom: 15px;
            }
            p {
                margin: 0;
                margin-bottom: 15px;
            }
        }
        &__info-block {
            display: flex;
        }
        &__info-item {
            flex-basis: auto;
            text-align: center;
            padding: 7px;
            color: white;
            margin-right: 10px;
            border-radius: 2px;
            box-shadow: 0px 0px 2px rgba(0,0,0, .4);
            background-color: gray;
            &.item--price {
                background-color: $link-green;
            }
        }
    }
    /* MEDIA QURIES */
    @media all and (max-width: 800px) {
        .sell-item {
            width: 100%;
            &__header-image-wrapper {
                height: 265px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .aside-row {
            display: none;
        }
    }
</style>
<script>
export default {
    data() {
        return {
            passingItem: {
                name: this.item.name,
                description: this.item.description,
                price: this.item.price,
                type: this.item.type,
                count: 0
            }
        }
    },
    props: [
        'item'
    ],
    methods: {
        addToBasket() {
            console.log('added');
            this.passingItem.count += 1
            this.$dispatch('sell-item-add', this.passingItem)
        },
        removeFromBasket() {
            console.log('removed');
            if (this.passingItem.count === 0) return false;
            this.passingItem.count -= 1
            this.$dispatch('sell-item-remove')
        }
    }
}
</script>


