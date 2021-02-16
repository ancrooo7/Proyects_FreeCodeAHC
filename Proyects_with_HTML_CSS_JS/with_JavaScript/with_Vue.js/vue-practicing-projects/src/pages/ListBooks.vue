<template>
    <div>
        <h1 v-text="title + ' ' +  booksCounts"></h1>
        <ul>
            <li v-for="(book, index) in arrayBooks" v-bind:key="book">
            {{ book }} 
            <button @click="remove(index)">x</button>
            </li>
        </ul>
        <!-- @submit === v-on:submit. "prevent" causes it to be sent directly after the button is pressed -->
        <form @submit.prevent="addBook">  
            <input v-model="newBook" placeholder="Type book name here"> <!-- trim erase the blank -->
            <button :[attribute]="isDisabled">Add Book</button>
        </form>
    </div>
</template>

<script>
export default {

    data() {
    return {
        title: "Libros de Stephen King",
        attribute: "disabled",
        isDisabled: false,
        newBook: "",
        arrayBooks: ["Carrie", "The Shining", "It", "Under the Dome", "Revival", "Mr Mercedes"],
        count: 0
    };
    },
    methods: {
    addBook() {
      if (this.newBook !== "") { // so that empty strings are not returned
        this.arrayBooks.push(this.newBook);
        this.newBook='';
        }
    },
    remove(index) {
        this.arrayBooks = this.arrayBooks.filter((element, i) => i != index);
    },
    },
    /**
   *  The main difference of defining a function in 'computed' or in 'method' is that the first saves
   *  the returned value in the cache to use it again in another call of the same and the other does not.
   */
    computed: {
    booksCounts() {
        return this.arrayBooks.length;
    },
    },
}
</script>

<style>

</style>