<template>
    <div class="flex flex-column center-flex">
        <h1>Markdown</h1>
        <section class="flex ">
            <article class="markdown-window">
                <textarea id="i-texta" v-model="text"></textarea>
            </article>
            <div class="preview-markdown">
                <h4>Preview</h4>
                <article class="second-article" v-html="markedText"></article>
            </div>
            
        </section>
    </div>
</template>

<script>
import marked from "marked";
export default {
    data() {
        return {
            text: "# Markdown"
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    }
}
</script>

<style>
    .flex {
        display: flex;
    }
    .center-flex {
        justify-items: center;
    }
    .flex-column {
        flex-direction: column;
    }
    h1 {
        text-align: center;
    }
    section {
        width: 100%;
        height: 100%;
    }
    .markdown-window {
        height: 500px;
        width: 50%;
        margin: 1em;
    }
    .preview-markdown {
        height: 500px;
        width: 70%;
        margin: 1em;
    }
    .second-article {
        border: 3px solid blue;
        height: 100%;
    }
    textarea {
        width: 100%;
        height: 100%;
    }
    h4 {
        margin: 0;
        background-color: aqua;
        border: 1px solid;
    }
</style>