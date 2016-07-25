<template>
    <div class="row-container">
        <div class="view-cart">
            <div class="view-cart__header">
                <h2>Your order</h2>
            </div>
            <div class="view-cart__items-table">
                <view-cart-item v-for="item in items" :item="item"></view-cart-item>
            </div>
            <div class="view-cart__order-info">
                <h2>Order total price: {{ totalSum | currency ''}} $</h2>
            </div>
            <div class="view-cart__actions">
                <button class="view-cart__action-button action-button--confirm">Buy items</button>
                <button class="view-cart__action-button action-button--decline">Don't buy</button>
            </div>
        </div>
    </div>
</template>
<script>
import viewCartItem from "./components/viewCartItem.vue"
export default {
    data(){
        return {
            items: []
        }
    },
    ready() {
        this.$set('items', this.$parent.shoppingCart)
    },
    computed: {
        totalSum() {
            let sum = 0
            for (var i = 0; i < this.items.length; i++) {
                let currentItem = this.items[i]
                sum = sum + currentItem.count * currentItem.price
            }
            return sum
        }
    },
    components: {
        viewCartItem
    }
}
</script>
<style lang='sass'>
    $button-confirm: #2ecc71;
    $button-decline: #e74c3c;
    .view-cart {
        display: block;
        width: 100%;
        &__header {
            margin-bottom: 20px;
        }
        &__actions {

        }
        &__action-button {
            padding: 8px;
            color: #fff;
            border: none;
            box-shadow: 0px 0px 1px rgba(0,0,0, .5);
            border-radius: none;
            outline: none;
            font-size: 18px;
            cursor: pointer;
            &:hover {
                box-shadow: 0px 0px 4px rgba(0,0,0, .75);
            }
            &:focus {
                outline: 1px solid gray;    
            }
            &.action-button{
                &--confirm {
                    background: $button-confirm;
                }
                &--decline {
                    background: $button-decline;
                }
            }
        }
    }
</style>


