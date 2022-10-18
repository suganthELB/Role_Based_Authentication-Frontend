<!--login screen view - Login As Admin/User By Entering Respective Email,Password -->
<template>
  <!-- login screen class  -->
  <div class="loginbox">
    <div class="col-md-12 form-wrapper">
      <h1>Login</h1>
      <br />
      <!--Under The Form Login Button calls The userAction In the Method Script -->
      <form id="create-post-form" @submit.prevent="userAction">
        <div class="form-group col-md-12">
          <label for="title"> <h4>Email</h4> </label>
          <input
            type="email"
            id="email"
            v-model="email"
            name="title"
            class="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> <h4>Password</h4></label>
          <input
            type="password"
            id="password"
            v-model="password"
            name="title"
            class="form-control"
            placeholder="Enter Password"
            required
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // axios Is Used To Post The Api Call ToThe Server(backend= nest.js)
const jwt = require("jsonwebtoken"); //using JWT Auth requires jsonwebtoken
import VueCookies from "vue-cookies"; //Token datas would be stored as Cookies
export default {
  name: "loginUser",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async userAction() {
      const lst = [];
      const populateData = (data) => {
        lst.push(data);
      };
      // Login Api is Called From The Backend And The Datas were Posted There
      axios
        .post(
          "http://localhost:8082/api/login",
          JSON.stringify({
            email: this.email,
            password: this.password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        // Response From The Frontend Is Saved with JWT Auth And Success Message Is Thrown
        .then((response) => {
          console.log(response);
          var token = jwt.sign(response.data.user, "jwt");
          //Login Response success Condition
          if (response.data.message == "success") {
            // If Admin  Checked with 1 Will Redirects to the Admin Page
            if (response.data.user.is_admin == 1) {
              this.$router.push({ name: "admin" });
            }
            //Login Response Not success Condition
            else {
              //Else It will Redirects to the Userpage
              this.$router.push({ name: "user" });
            }
          }
          populateData(response);
          // With The Response Of The Datas Stored In Db is encrypted with JWT Auth with a validity of 1hr
          VueCookies.set("jwt", token, "1h");
        })
        .catch((error) => {
          console.log(error.message);
          this.alert();
        });
    },
    // If The email ID or Password Is Wrong Or If The Data Not present In Db will shown an Alert
    alert() {
      alert("Unauthorized Access!. Please Contact Admin for Access");
    },
  },
};
</script>
<!-- Login page CSS-->
<style>
h2 {
  font-size: 20px;
  margin-top: 5px;
}
h3 {
  margin: 40px 0 0;
}
body {
  background: url("https://images.unsplash.com/photo-1591644302233-574b796e9d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")
    no-repeat center center fixed;

  background-size: cover;
}
/*  */
.loginbox {
  width: 390px;
  height: 490px;
  background: #000;
  color: #fff;
  top: 15%;
  left: 36%;
  position: absolute;
  transform: translate(-50%, -50);
  box-sizing: border-box;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 2px 1px 100px 8px;
  padding: 70px 30px;
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}

.loginbox input {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 2px;
}

.loginbox input[type="email"] {
  border: none;
  border-bottom: 1px solid green;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginbox input[type="password"] {
  border: none;
  border-bottom: 1px solid green;
  background: transparent;
  outline: none;
  height: 40px;

  font-size: 16px;
}

.loginbox button[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  width: 260px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}

.loginbox button[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
}
</style>
