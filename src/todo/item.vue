<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input type="checkbox" class="toggle" v-model="todo.completed" />
        <label>{{todo.content}}</label>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
    export default {
        props:{
            todo:{
                type:Object,
                required:true,
            }
        },
        methods:{
            deleteTodo(){
                this.$emit("del",this.todo.id)
            }
        }

    }
</script>

<style lang="stylus" scoped>
.todo-item
    position relative;
    background #fff;
    font-size 24px;
    border-bottom 1px solid rgba(0,0,0,.06);
    &:hover
        .destory:after
            content: 'x'
    &.completed
        text-decoration line-through
        color red
    label
        white-space pre-line;
        word-break break-all;
        padding 15px 60px 15px 15px;
        margin-left 45px;
        display block;
    .toggle
        text-align center
        width 400px
        height 40px
        position absolute
        top 0
        bottom 0
        margin auto 0
        border none
        outline none
        appearance none
    .toggle:before{
        content:url('../assets/images/close-circle.svg')
        position absolute
        left 12px
        cursor pointer
    }
    .toggle:checked:before{
        content : url('../assets/images/check-circle.svg')
        position absolute
        left 12px
        cursor pointer
    }
    .destory
        position absolute
        right 10px;
        bottom 0;
        width 40px;
        height 40px;
        font-size 30px;
        color #cc9a9a;
        margin-bottom 11px;
        transition: color 0.2s east-out
        background-color transparent
        border-width 0
        cursor pointer
        outline none

</style>