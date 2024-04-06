<template>
  <v-container class="pa-5 text-lg-left">
    <v-row>
      {{ received }}
      <v-col cols="4" v-for="(todos, index) in received" :key="index">
        <v-card class="mx-auto mb-4" max-width="300" hover>
          <v-card-item text-lg-right>
            <v-card-title text-lg-right
              >Title: {{ todos.TodoList }}</v-card-title
            >
          </v-card-item>
          <v-card-text>Description: {{ todos.description }}</v-card-text>
          <v-card-text>id: {{ todos.id }}</v-card-text>

          <div class="d-flex">
            <v-sheet>
              <UpdateTodo @click="dialog = true" />
              <v-dialog max-width="400" v-model="dialog">
                <v-card title="Update Todo Items">
                  <v-container class="pa-5">
                    <v-sheet class="mx-auto" width="300">
                      <v-form fast-fail @submit.prevent="submitForm">
                        <v-text-field
                          v-model="todos.TodoList"
                          label="Todo List"
                        ></v-text-field>
                        <v-textarea
                          label="Description"
                          v-model="todos.description"
                          name="input-7-1"
                          variant="filled"
                          auto-grow
                        ></v-textarea>

                        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                        <v-btn class="mt-2" @click="canceledForm" block
                          >Cancel</v-btn
                        >
                      </v-form>
                    </v-sheet>
                  </v-container>
                </v-card>
              </v-dialog>
            </v-sheet>
            <v-sheet
              ><DeleteTodo @Deletetodo="Deletetodo1" :todos="todos"
            /></v-sheet>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateTodo from "./UpdateTodo.vue";
import DeleteTodo from "./DeleteTodo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoCard",
  props: {},
  components: { DeleteTodo, UpdateTodo },
  data: () => ({
    dialog: false,
    data: null,
    loading: true,
  }),
  computed: {
    ...mapGetters(["received"]),
    run() {
      return this.$store.getters.received;
    },
  },
  created() {
    this.fetchData(); // Call fetchTodos action when component is created
  },

  methods: {
    ...mapActions(["fetchTodos"]), // Map 'fetchTodos' action to component methods
    async fetchData() {
      await this.fetchTodos(); // Wait for fetchTodos action to complete
    },
    submitForm() {
      this.dialog = false;
    },
    canceledForm() {
      this.dialog = false;
      // this.$emit("formCanceled");
    },
    Deletetodo1() {
      this.$emit("deletetodo");
    },
  },
};
</script>
<style scoped></style>
