<template>
    <div>
        <h3>{{name}}</h3>
        <div class="num">{{ count }}</div>
        <button @click="increment">自增</button>
    </div>
</template>
<script>
export default {
    name: 'test',
    props: {
        name: String
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}
</script>