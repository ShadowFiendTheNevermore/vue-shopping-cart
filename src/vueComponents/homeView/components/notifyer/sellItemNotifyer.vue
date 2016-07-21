<template>
    <div class="notifyer">
        You ordered the {{ item.name }} in count: {{ item.count }}
    </div>
</template>
<style lang='sass'>
    .notifyer {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,0,0, .85);
        padding: 30px;
        color: #fff;
    }
</style>
<script>
export default {
    props: [
        'item',
    ]
}
</script>


