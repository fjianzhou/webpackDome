<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来要去做什么？"  @keyup.enter="addTodo"/>
        <Item :todo="todo" v-for="todo in todos" :key="todo.id" @del="deleteTodo" />
        <Tab :filter="filter"></Tab>
    </section>
</template>

<script>
import Item from "./item.vue";
import Tab from "./tabs.vue";
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id){
        this.todos = this.todos.filter((item)=>{
            return item.id!=id;
        })
    }
  },
  components: {
    Item,
    Tab
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
    width: 600px;
    margin: 0 auto;
}

.add-input {
    width: 100%;
    line-height: 30px;
    font-size: 24px;
    margin: 0;
    padding: 16px 16px 16px 60px;
    box-sizing: border-box;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0);
    outline: none;
}
</style>
