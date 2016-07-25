<template>
    <div class="sell-basket">
        <div class="sell-basket__header">
            <h2>SELL BASKET ITEMS</h2>
        </div>
        <div class="sell-basket__body">
            <div v-for="item in addedItems | orderBy 'count' -1" class="sell-basket__item">
                <div class="sell-basket__item-block item-block--main">
                    <div class="sell-basket__content-block content-block--name">
                        {{item.name}}
                    </div>
                    <div class="sell-basket__content-block contet-block--total-price">
                        total price: {{ item.count * item.price | currency ''}} $
                    </div>
                </div>
                <div class="sell-basket__item-block item-block--info">
                    <div class="sell-basket__info-splitter info-splitter--type">
                        {{item.type}}
                    </div>
                    <div class="sell-basket__info-splitter info-splitter--price">
                        {{item.price}} <span>$</span>
                    </div>
                </div>
                <div class="sell-basket__item-block item-block--counter">
                    <span>{{item.count}}</span>
                    <button @click="addCount(item)" class="sell-basket__counter-button counter-button--inc">+</button>
                    <button @click="removeCount(item)" class="sell-basket__counter-button counter-button--dec">-</button>
                </div>
            </div>
        </div>
        <div v-show="addedItems.length == 0" class="sell-basket__empty-message">
            Sell basket is empty
        </div>
        <div v-show="addedItems.length > 0" class="sell-basket__purchase">
            <a v-link="{path: '/viewCart'}" class="sell-basket__purchase-button">Purchase</a>
        </div>
    </div>    
</template>
<style lang='sass'>
    $counter-color: #e74c3c;
    $split-price-color: #2ecc71;
    $split-type-color: #95a5a6;
    $purchase-button-color: #f39c12;
    .sell-basket {
        &__header {
            h2 {
                text-align: center;
            }
        }
        &__body {
        }
        &__item {
            display: flex;
            min-height: 80px;
            margin-bottom: 10px;
            background: #fff;
            box-shadow: 0px 0px 3px rgba(0,0,0, .45);
            justify-content: space-between;
            &-block {
                display: flex;
                &.item-block--main{
                    padding: 10px;
                    flex-direction: column;
                    justify-content: space-around;
                    flex-grow: 2;
                }
                &.item-block--info {
                    flex-basis: 20%;
                    flex-direction: column;
                    justify-content: space-between;
                    .sell-basket__info-splitter {
                        height: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        text-shadow: 1px 1px 3px rgba(0,0,0, .34);
                        &.info-splitter--type {
                            background-color: $split-type-color;
                        }
                        &.info-splitter--price {
                            background-color: $split-price-color;
                        }
                    }
                }
                &.item-block--counter{
                    position: relative;
                    background: $counter-color;
                    justify-content: center;
                    align-items: center;
                    flex-basis: 10%;
                    color: #fff;
                    text-shadow: 1px 1px 2px rgba(0,0,0, .3);
                }
            }
        }
        &__empty-message {
            font-size: 17px;
            text-align: center;
        }
        &__purchase{
            margin-top: 30px;
            &-button {
                padding: 10px;
                text-decoration: none;
                color: #fff;
                display: block;
                background: $purchase-button-color;
                text-align: center;
            }
        }
        &__content-block {
            display: flex;

            &.content-block--name {

                font-size: 19px;
            }
            &.content-block--total-price {
                
            }
        }
        &__counter-button {
            position: absolute;
            width: 100%;
            height:50%;
            opacity: 0;
            cursor: pointer;
            background: rgba(0,0,0, .5);
            border: none;
            font-size: 18px;
            color: #fff;
            outline: none;
            &.counter-button--inc {
                top: 0;
                left: 0;
            }
            &.counter-button--dec {
                bottom: 0;
                left: 0;
            }
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
<script>
export default {
    props: [
        'addedItems'
    ],
    methods: {
        addCount(item) {
            item.count += 1
        },
        removeCount(item) {
            item.count -= 1
            this.$dispatch('sell-item-remove')
        }
    }
}
</script>


