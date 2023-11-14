<template>
  <div>
    <div
      class="flex justify-center min-h-screen bg-rose-500"
      v-if="state.username === '' || state.username === null"
      :class="{'Login': state.username === '' || state.username === null}"
    >
      <form class="login-form p-4" @submit.prevent="Login">
        <h1 class="text-gray-500 text-4xl mb-12">Connexion au chat</h1>
        <label for="username" class="block mb-2 text-gray-500 text-lg transition duration-400">Pseudo</label>
        <input
          type="text"
          v-model="inputUsername"
          placeholder="Entrez votre Pseudo"
          class="appearance-none border-none outline-none bg-none block w-full p-4 rounded my-4 text-gray-700 text-xl shadow-none transition duration-400"
        />
        <input
          type="submit"
          value="login"
          class="appearance-none border-none outline-none bg-none block w-full p-4 bg-rose-500 rounded text-white text-xl font-semibold"
        />
      </form>
    </div>

    <div
      class="flex-col"
      v-else
      :class="{'Chat': state.username !== '' && state.username !== null}"
    >
      <h1 class="text-white text-4xl p-12 pb-4">Chat:</h1>
      <header class="relative block w-full p-12 pb-4">
        <button
          class="absolute top-4 right-4 appearance-none border-none outline-none bg-none text-white text-xl mb-4 text-right"
          @click="Logout"
        >
          Deconnexion 
        </button>
        <h1 class="text-white text-4xl">Bienvenue {{ state.username }}</h1>
      </header>

      <section class="rounded-tl-lg rounded-tr-lg bg-white shadow-md flex-1 p-12">
        <div
          v-for="message in state.messages"
          :key="message.key"
          :class="{'message current-user': message.username === state.username, 'message other-user': message.username !== state.username}"
          class="flex mb-4"
        >
          <div
            v-if="message.username === state.username"
            class="username text-gray-500 text-lg mb-2 px-6 text-right w-full"
          >
            {{ message.username }}
          </div>
          <div
            v-else
            class="username text-gray-500 text-lg mb-2 px-6 w-full"
          >
            {{ message.username }}
          </div>
          <div
            v-if="message.username === state.username"
            class="content-right inline-block p-4 bg-gray-200 rounded-full text-gray-700 text-xl leading-relaxed text-right"
          >
            {{ message.content }}
          </div>
          <div
            v-else
            class="content-left inline-block p-4 bg-gray-200 rounded-full text-gray-700 text-xl leading-relaxed text-left"
          >
            {{ message.content }}
          </div>
        </div>
      </section>

      <footer class="sticky bottom-0 bg-white p-12 shadow-md">
        <form @submit.prevent="SendMessage" class="flex">
          <input
            type="text"
            v-model="inputMessage"
            placeholder="Tapez votre message..."
            class="flex-1 appearance-none border-none outline-none bg-none block w-full p-4 rounded-l text-gray-700 text-xl shadow-none transition duration-400"
          />
          <input
            type="submit"
            value="Envoyer"
            class="appearance-none border-none outline-none bg-none block p-4 rounded-r bg-rose-500 text-white text-xl font-semibold"
          />
        </form>
      </footer>
    </div>
  </div>
</template>



<script>
import { reactive, onMounted, ref } from 'vue';
import { getDatabase, ref as dbRef, onValue, push, set } from "firebase/database";
import db from './db';

export default {
  setup() {
    const inputUsername = ref("");
    const inputMessage = ref("");

    const state = reactive({
      username: "",
      messages: []
    });

    const Login = () => {
      if (inputUsername.value !== "" && inputUsername.value !== null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    };

    const Logout = () => {
      state.username = "";
    };

    const SendMessage = () => {
      const database = getDatabase();
      const messagesRef = dbRef(database, "messages");

      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }

      const message = {
        username: state.username,
        content: inputMessage.value
      };

      push(messagesRef, message);
      inputMessage.value = "";
    };

    onMounted(() => {
      const database = getDatabase();
      const messagesRef = dbRef(database, "messages");

      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        let messages = [];

        if (data) {
          Object.keys(data).forEach((key) => {
            messages.push({
              key: key,
              username: data[key].username,
              content: data[key].content
            });
          });

          state.messages = messages;
        }
      });
    });

    return {
      inputUsername,
      Login,
      state,
      inputMessage,
      SendMessage,
      Logout
    };
  }
}
</script>
