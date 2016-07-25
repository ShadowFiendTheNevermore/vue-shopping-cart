<template>
    <div class="notify__element" transition="notify">
        <p>Sell item with name: {{ notification.name }} has been added to basket</p>    
    </div>
</template>
<style lang='sass'>
    .notify-transition {
        transition: opacity .5s ease;
        &.v-leave, &.v-enter {
            opacity: 0;
        }
    }
    .notify__element {
        padding: 15px;
        background: rgba(0,0,0, .85);
        margin-bottom: 10px;
        color: #fff;
        box-shadow: 1px 0px 3px rgba(0,0,0, .5);
        text-align: center;
    }
</style>
<script>
export default {
    data() {
        return { timer: null}
    },
    props: ['notification'],
    ready() {
        this.timer = setTimeout(function(){
            this.triggerClose(this.notification)
        }.bind(this), 3500)
    },
    methods: {
        triggerClose(notification) {
            clearTimeout(this.timer)
            this.$dispatch('close-notification', notification)
        }
    }
}
</script>

