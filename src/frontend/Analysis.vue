<script>
export default {
    data() {
        return {
            name: 'Hello',
        }
    }
}
</script>

<template>
    <router-view></router-view>
    <h1>{{ name }}</h1>
</template>