<template>
  <v-container>
    <v-btn
      color="red-lighten-2"
      icon="mdi-trash-can-outline"
      variant="text"
      @click="deleteTodoDialog"
    ></v-btn>

    <v-dialog v-model="deleteDialog" max-width="500">
      <v-card>
        <v-card-title>Delete Todo</v-card-title>
        <v-card-text> Are you sure you want to delete this todo? </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="deleteTodo">Yes</v-btn>
          <v-btn color="error" @click="cancelDelete">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

export default {
  name: "DeleteTodo",
  props: {
    todos:Object,
  },
  components: {},
  data: () => ({
    deleteDialog: false,
  }),
  methods: {
    deleteTodoDialog() {
      this.deleteDialog = true;
    },
    cancelDelete() {
      this.deleteDialog = false;
    },
    deleteTodo(){
      this.deleteDialog = false;
      this.$emit('Deletetodo',this.todos)
    }
  
  },
};
</script>
<style scoped></style>
