<template>
    <div class="notifyer">
        <notify-element v-for="notification in notifications" :notification="notification" @close-notification="removeNotification">
        </notify-element>
    </div>
</template>
<style lang='sass'>
    .notifyer {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 200px;
        color: #fff;
        max-height: 400px;
        overflow: hidden;
    }
</style>
<script>
import NotifyElement from './components/notifyElement.vue'
export default {
    props: [
        'notifications',
    ],
    methods: {
        removeNotification(notification) {
            this.notifications.$remove(notification)
        }
    },
    components: {
        NotifyElement
    }
}
</script>










