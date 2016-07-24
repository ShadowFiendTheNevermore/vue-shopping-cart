<template>
    <div class="notify__element">
        <p>{{ item | json }}</p>    
    </div>
</template>
<style lang='sass'>
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
    props: ['item'],
}
</script>

