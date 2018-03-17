<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name">
      <br>
      <input type="text" v-model="newUser.email" placeholder="Enter Email">
      <br>
      <input type="submit" value="Submit">
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" value="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
        {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data() {
      return {
        newUser: {},
        users: [
          // {
          //   name: 'Jane Doe',
          //   email: 'jdoe@gmail.com',
          //   contacted: false
          // },
          // {
          //   name: 'Dane Doe',
          //   email: 'ddoe@gmail.com',
          //   contacted: false
          // },
          // {
          //   name: 'Cain Doe',
          //   email: 'cdoe@gmail.com',
          //   contacted: false
          // }
        ]
      }
    },
    methods: {
      addUser: function(e) {
        console.log('in addUser');
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    created: function() {
      console.log('in created function');
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
          console.log(response.data);
          this.users = response.data;
        })
    }
  }
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
