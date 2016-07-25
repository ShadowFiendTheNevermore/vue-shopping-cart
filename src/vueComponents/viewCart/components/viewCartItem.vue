<template>
    <section class="view-cart-item">
        <div class="view-cart-item__name">
            Name: {{ item.name }}
        </div>
        <div class="view-cart-item__price">
            Price for count: {{ item.price | currency '' }} $
        </div>
        <div class="view-cart-item__type">
            Item type: {{ item.type }}
        </div>
        <!-- <div class="view-cart-item__"></div> -->
        <div class="view-cart-item__counter">
            <div class="counter__info">
                <!-- <span v-show="!showCounterBinder">{{ item.count }}</span> -->
                <input class="counter__input-field" type="text" v-model="item.count" number value="{{ item.count }}">
            </div>
            <div class="counter__buttons">
                <button @click="plusOneToShoppingCart" class="counter__button counter__button--inc">+</button>
                <button @click="deleteOneFromShoppingCart" class="counter__button counter__button--dec">-</button>
            </div>
        </div>
        <div class="view-cart-item__summary-price">
            Total price: {{ item.price * item.count | currency '' }} $
        </div>
    </section>
</template>
<script>
export default {
    props: [
        'item'
    ],
    methods: {
        plusOneToShoppingCart() {
            this.item.count += 1
        },
        deleteOneFromShoppingCart() {
            if (this.item.count > 0)
                this.item.count -= 1
            return false
        }
    }
}
</script>
<style lang='sass'>
    $increment-button-color: #2ecc71;
    $decrement-button-color: #e74c3c;
    .view-cart-item {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid darken(#fff, 10%);
        &__counter {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .counter__input-field {
                padding: 5px;
                border-radius: 2px;
                font-size: 14px;
                font-weight: bold;
                width: 50px;
                /*width: 40px;*/
                border: 1px solid rgba(0,0,0, .3);
                box-shadow: 0px 0px 3px rgba(0,0,0, .5);
            }
            .counter__info {
                margin-right: 20px;
            }
            .counter__buttons {
                display: flex;
                flex-direction: column;
                .counter__button {
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                    padding: 3px 7px;
                    background: transparent;
                    border: transparent;
                    height: 50%;
                    outline: none;
                    &--inc{
                        border: 1px solid $increment-button-color;
                        &:hover {
                            background: $increment-button-color;
                        }
                    }
                    &--dec{
                        border: 1px solid $decrement-button-color;
                        &:hover {
                            background: $decrement-button-color;
                        }
                    }
                }
            }
        }
    }
</style>

