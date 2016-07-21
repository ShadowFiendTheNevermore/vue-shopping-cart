<template>
    <div class="row-container">
        <main class="main-row">
            <sell-item v-for="item in items" :item='item'>
            </sell-item>
        </main>
        <aside class="aside-row">
            <sell-basket :added-items.sync="cartItems"></sell-basket>
        </aside>
        <notifyer :item="notifyItem" v-show="notifyed"></notifyer>
    </div>
</template>
<script>
import SellItem from "./components/sellItem/sellItem.vue"
import SellBasket from "./components/sellBasket/sellBasket.vue"
import Notifyer from "./components/notifyer/sellItemNotifyer.vue"
export default {
    data() {
        return {
            items: [
                {name: 'Test Name #1', price: 32, type:'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quae neque dicta id quo asperiores hic, ratione ex dignissimos voluptate.'},
                {name: 'Test Name #2', price: 8, type:'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quae neque dicta id quo asperiores hic, ratione ex dignissimos voluptate.'},
                {name: 'Test Name #3', price: 4.55, type:'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quae neque dicta id quo asperiores hic, ratione ex dignissimos voluptate.'},
                {name: 'Test Name #4', price: 7.25, type:'TEST', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quae neque dicta id quo asperiores hic, ratione ex dignissimos voluptate.'}
            ],
            notifyItem: null,
            notifyed: false,
            cartItems: [],
        }
    },
    methods: {
        notifyAboutSellItem(item) {
            this.$set('notifyItem', item)
            this.notifyed = true
            setTimeout(() => {
                if (this.notifyed === true) this.notifyed = false
            }, 3500)
        }
    },
    events: {
        'sell-item-add': function (item) {
            let found = false
            for (var i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].name === item.name) {
                    let newItem = this.cartItems[i]
                    this.cartItems.$set(i, newItem)
                    this.$parent.shoppingCart.$set(i, newItem)
                    this.notifyAboutSellItem(newItem)
                    found = true
                    break;
                }
            }
            if (!found) {
                // If not found add item in cartItems
                this.cartItems.push(item)
                this.$parent.shoppingCart.push(item)
                this.notifyAboutSellItem(item)
            }
        },
        'sell-item-remove': function () {
            for (var i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].count === 0) {
                    // Remove item from cartItems
                    this.$parent.shoppingCart.$remove(this.cartItems[i])
                    this.cartItems.$remove(this.cartItems[i])
                }
            }
        }
    },
    components: {
        SellItem,
        SellBasket,
        Notifyer
    }
}
</script>

<style lang='sass'>
    .row-container {
        margin: 15px 0;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px 20px;
    }
    .main-row {
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .aside-row {
        width: 30%;
        display: block;
    }
    @media all and (max-width: 800px) {
        .row-container {
            flex-direction: column;
        }
        .main-row {
            width: 100%;
            flex-direction: column;
        }    
    }
</style>

