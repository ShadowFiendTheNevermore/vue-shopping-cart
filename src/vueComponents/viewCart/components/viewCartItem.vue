<template>
    <section class="view-cart__item">
        {{ item.name }} <br>
        {{ item.price }} <br>
        {{ item.description }} <br>
        {{ item.count }} <br>
    </section>
</template>
<script>
export default {
    props: [
        'item'
    ]
}
</script>
<style lang='sass'>
    .view-cart {
        &__item {
            display: flex;
            margin-bottom: 30px;
            border-bottom: 1px solid darken(#fff, 10%);
        }
    }
</style>

