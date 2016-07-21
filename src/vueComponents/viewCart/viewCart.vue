<template>
    <div class="row-container">
        <div class="view-cart">
            <div class="view-cart__header">
                <h2>Your order</h2>
            </div>
            <view-cart-item v-for="item in items" :item="item"></view-cart-item>
            <div class="view-cart__order-info">
                <h2>Your order total: {{ totalSum | currency ''}} $</h2>
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



