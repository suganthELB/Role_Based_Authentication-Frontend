<!-- admin screen View - Register As Admin/User By Entering Name,Email,Password,RoleAccess -->
<template>
  <!-- navigation is Used As a Dashboard-->

  <nav>
    <!-- admin view navigation bar heading-->
    <div class="logo-name">
      <div class="logo-image"></div>
      <span class="logo_name">ADMIN</span>
    </div>

    <!-- Diffrent Logos Were Inserted which Is loaded As Per The Logo Under Class Menu Items-->
    <div class="menu-items">
      <ul class="nav-links">
        <li>
          <a target="_blank" href="https://drive.google.com/drive/u/0/my-drive">
            <img
              class="meet"
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-drive-1024.png"
          /></a>
        </li>
        <br />
        <li>
          <a target="_blank" href="https://calendar.google.com">
            <img
              class="meet"
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-1024.png"
          /></a>
        </li>
        <br />
        <li>
          <a target="_blank" href="https://meet.google.com/poz-evav-wye?pli=1&authuser=0">
            <img
              class="meet"
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png"
          /></a>
        </li>
        <br />
        <li>
          <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            <img
              class="meet"
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-1024.png"
          /></a>
        </li>
        <br />
        <li>
          <a target="_blank" href="https://podcasts.google.com/">
            <img
              class="meet"
              src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/google_podcasts_new_logo-1024.png"
          /></a>
        </li>
      </ul>

      <!-- Logout Button With Api Call To Login-->
      <ul class="logout-mode">
        <li>
          <a href="#">
            <i class="uil uil-signout"></i>
            <button type="button" @click="Logout">Logout</button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- dashboard page-->
  <section class="dashboard">
    <div class="top">
      <i class="uil uil-bars sidebar-toggle"></i>
      <div class="admin">
        <i class="uil uil-search"></i>
        <h1>Admin Dashboard Panel</h1>
      </div>
    </div>

    <div class="dash-content">
      <div class="overview">
        <div class="title"></div>

        <div class="loginboxes">
          <!--Under The Form Adduser Button calls The registerAction In the Method Script -->
          <form id="create-post-form" @submit.prevent="registerAction">
            <h1>Register Roles</h1>
            <div class="form-group col-md-12">
              <label for="title"> <b>Name</b> </label>
              <input
                type="name"
                id="name"
                v-model="name"
                name="title"
                class="form"
                placeholder="Enter name"
                required
              />
            </div>

            <div class="form-group col-md-12">
              <label for="title"><b> Email</b> </label>
              <input
                type="email"
                id="email"
                v-model="email"
                name="title"
                class="form"
                placeholder="Enter Email"
                required
              />
            </div>

            <div class="form-group col-md-12">
              <label for="title"><b> Password</b> </label>
              <input
                type="password"
                id="Password"
                v-model="password"
                name="title"
                class="form"
                placeholder="Enter password"
                required
              />
            </div>

            <div class="form-group col-md-12">
              <label for="title"> <b>Role Access </b></label>
              <input
                type="auth"
                id="role"
                v-model="role"
                name="title"
                class="form"
                placeholder="Enter 1 for Admin 0 for User"
                required
              />
            </div>
            <br />

            <div class="form-group col-md-4 pull-right">
              <button @click="show_data = true" class="btn btn-success" type="submit">
                Add User
              </button>
              <create-form v-if="show_data" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// axios Is Used To Post The Api Call ToThe Server(backend= nest.js)
import axios from "axios";
//Token datas would be stored as Cookies
import VueCookies from "vue-cookies";
export default {
  name: "adminView",

  data() {
    return {
      email: "",
      password: "",
      show_data: false,
    };
  },
  methods: {
    async registerAction() {
      // register Api is Called From The Backend And The Datas were Posted There
      axios
        .post(
          "http://localhost:8082/api/register",
          JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
            is_admin: this.role,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.alert();
          this.show_data.reset();
        })
        .catch((error) => {
          console.log(error.message);
          alert("The User already Exists");
        });
    },
    userAction() {
      console.log(this.data);
    },
    alert() {
      alert("User information Added");
    },
    Logout() {
      axios
        .post("http://localhost:8082/api/logout", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.$router.push({ name: "login" });
          console.log(response, "Successfully Logout");
          let token = "";
          VueCookies.set("jwt", token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style>
/* ===== Google Font Import - Poppins ===== */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: url("https://images.unsplash.com/photo-1583470191164-307afc74ed9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")
    no-repeat center center fixed;
  background-size: cover;
  border-right: rgb(44, 2, 2);
  transition: var(--tran-05);
}

nav .logo-name {
  display: flex;
  align-items: center;
}
nav .logo-image {
  display: flex;
  justify-content: center;
  min-width: 45px;
}
nav .logo-image img {
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}

nav .logo-name .logo_name {
  font-size: 46px;
  font-weight: 600;
  color: rgb(231 213 54);
  margin-left: -30px;
  transition: var(--tran-05);
  margin-top: 1px;
}

nav .menu-items {
  margin-top: 40px;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-items li {
  list-style: none;
}
.menu-items li a {
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
  position: relative;
}
nav a {
  font-weight: bold;
  color: #f3eded;
}
.nav-links li a:hover:before {
  content: "";
  position: absolute;
  left: -7px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: var(--primary-color);
}
body.dark li a:hover:before {
  background-color: var(--text-color);
}
.menu-items li a i {
  font-size: 24px;
  min-width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black-light-color);
}
.menu-items li a .link-name {
  font-size: 20px;
  font-weight: 800;
  color: rgb(245, 247, 249);
  transition: var(--tran-05);
}
.dashboard {
  position: relative;
  left: 250px;
  background-color: var(--panel-color);
  min-height: 110vh;
  width: calc(100% - 250px);
  padding: 10px 14px;
  background-color: #eee;
  transition: var(--tran-05);
}
.dashboard .top {
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background-color: var(--panel-color);
  transition: var(--tran-05);
  z-index: 10;
  height: 86px;
  background-color: #eee;
  box-shadow: 2px 8px 5px rgb(8, 114, 189);
  font-size: 30px;
  padding-top: 27px;
}
.dashboard .dash-content {
  padding-top: 50px;
}
.dash-content .title {
  display: flex;
  align-items: center;
  margin: 60px 0 30px 0;
}
.dash-content .title i {
  position: relative;
  height: 35px;
  width: 35px;
  background-color: var(--primary-color);
  border-radius: 6px;
  color: var(--title-icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.dash-content .title .text {
  font-size: 24px;
  font-weight: 500;
  color: var(--text-color);
  margin-left: 10px;
}

@media (max-width: 400px) {
  nav {
    width: 0px;
  }

  nav .logo_name {
    opacity: 0;
    pointer-events: none;
  }

  nav li a .link-name {
    opacity: 0;
    pointer-events: none;
  }

  nav ~ .dashboard {
    left: 0;
    width: 100%;
  }

  nav ~ .dashboard .top {
    left: 0;
    width: 100%;
  }
}
.logout-mode [type="button"] {
  border: none;
  outline: none;
  height: 40px;
  width: 150px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  margin-right: 50px;
  margin-left: -25px;
}
.logout-mode [type="button"]:hover {
  cursor: pointer;
  background: #5e84f8;
}

.meet {
  width: 60px;
  height: 60px;
  margin-left: 44px;
}

.form {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.loginboxes {
  width: 530px;
  height: 555px;
  background: #000;
  color: rgba(26, 161, 102, 0.685);
  top: 17%;
  left: 27%;
  position: absolute;
  transform: translate(-50%, -50);
  box-sizing: border-box;
  border-radius: 40px;
  opacity: 5;
  box-shadow: 5px 5px 90px 5px;
  padding: 45px 30px;
}
.loginboxes input[type="email"] {
  border: none;
  border-bottom: 1px solid green;
  outline: none;
  height: 40px;
  font-size: 16px;
}
.loginbox input[type="password"] {
  border: none;
  border-bottom: 1px solid green;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginbox input[type="name"] {
  border: none;
  border-bottom: 1px solid green;
  background: transparent;
  outline: none;
  height: 40px;
  margin-right: 4px;
  color: #fff;
  font-size: 16px;
}

.loginboxes button[type="submit"] {
  border: none;
  outline: none;
  height: 45px;
  width: 200px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 30px;
  margin-left: 100px;
}
.loginboxes button[type="submit"]:hover {
  cursor: pointer;
  background: #13ac64;
}

.toAdmin {
  transition-duration: 0.4s;
}

.toAdmin:hover {
  background-color: #4caf50;
  color: white;
}
</style>
