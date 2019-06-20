<template>
    <div>
        <img :src="item" alt="" srcset="">
        {{text}}
    </div>
</template>
<script>
export default {
    props:['item','text']
}
</script>
<style lang="scss">
</style>
