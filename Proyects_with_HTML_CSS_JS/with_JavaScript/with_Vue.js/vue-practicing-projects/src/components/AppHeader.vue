<template>
    <nav>
        <router-link v-for="item in list" :key="item.to" class="space-margin-right" :to="item.to">
            {{ item.title }}
        </router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "List of Books",
                    to: "/list-books"
                },
                {
                    title: "Calendar",
                    to: "/calendar"
                },
                {
                    title: "Markdown",
                    to: "/markdown"
                }
            ]
        }
    }
}
</script>

<style>
    .space-margin-right {
        margin-right: 1em;
    }
</style>