<template>
  <v-container class="text-center">
    <v-btn color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>Create Todo</v-btn
    >
    <v-dialog max-width="400" v-model="dialog">
      <v-card title="Add Todo Items">
        <TodoForm @formCanceled="closeDialog" @formSubmitted="submittedform" />
      </v-card>
    </v-dialog>
    <TodoCard  @deletetodo="deleteTodo" />
  </v-container>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoCard from "./TodoCard.vue";
import { mapActions,mapGetters} from 'vuex';

export default {
  name: "TodoHomePage",

  components: { TodoForm, TodoCard },
  data() {
    return {
     
      dialog: false,
      todos: [],
      // received: [],
      refreshTodos: false,
    };
  },
  
  methods: {
    ...mapActions([ 'addTodo', 'deleteTodo','fetchTodos']),
    async submittedform(data) {
      await this.addTodo(data);
      this.fetchTodos();
      this.closeDialog(); // Close the dialog after form submission
    },
    closeDialog() {
      this.dialog=false; // Commit mutation to close dialog
    }
,
    async fetchData() {
      const a=await this.fetchTodos(); // Wait for fetchTodos action to complete
      console.log(a,"im inside parent")
    },
    },
 
 
  computed: {
    ...mapGetters(["received"]),
    run() {
      return this.$store.getters.received;
    },
   
  },
  created() {
    this.fetchData(); // Call fetchTodos action when component is created
  },
  mounted() {
    this.fetchData(); // Call fetchTodos action when component is created
  },

};
</script>
