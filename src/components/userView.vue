<!-- User screen view - -->
<template>
  <nav>
    <!-- user view navigation bar heading-->
    <div class="navi">
      <div class="logo-name">
        <div class="logo-image"></div>
        <span class="logo_name">USER</span>
      </div>
      <!-- user view navigation bar options-->
      <div class="menu-items">
        <ul class="nav-links">
          <li>
            <a target="_blank" href="https://drive.google.com/drive/u/0/my-drive">
              <img
                class="meet"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-drive-1024.png"
              />
            </a>
          </li>
          <br />
          <li>
            <a target="_blank" href="https://calendar.google.com">
              <img
                class="meet"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-1024.png"
              />
            </a>
          </li>
          <br />
          <li>
            <a
              target="_blank"
              href="https://meet.google.com/poz-evav-wye?pli=1&authuser=0"
            >
              <img
                class="meet"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png"
              />
            </a>
          </li>
          <br />
          <li>
            <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <img
                class="meet"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-1024.png"
              />
            </a>
          </li>
          <br />
          <li>
            <a target="_blank" href="https://podcasts.google.com/">
              <img
                class="meet"
                src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/google_podcasts_new_logo-1024.png"
              />
            </a>
          </li>
        </ul>
        <!-- Logout under navigation -->
        <ul class="logout-mode">
          <li>
            <a href="#">
              <i class="uil uil-signout"></i>
              <button type="button" v-on:click="logout" href="#">Logout</button>
            </a>
          </li>
          <!--menu icon switch to next page-->
          <div class="mode-toggle">
            <span class="switch"></span>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!--Dashboard panel-->
  <section class="dashboard">
    <div class="top">
      <i class="uil uil-bars sidebar-toggle"></i>
      <div class="admin">
        <i class="uil uil-search"></i>
        <h1>Welcome To User Dashboard</h1>
      </div>
      <h1>Instant Editors</h1>
    </div>
    <!-- online Document editor-->
    <div class="document_editor">
      <img
        class="img"
        src="data:image/png;base64,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"
        alt="document editor"
        title="ARTIFICAL INTELLIGENCE"
        width="205"
      /><br />
      <h2>Document editor</h2>
      <p>"Online Document Editor"</p>
      <br />
      <div class="button">
        <button type="button" onclick="window.open('https://www.sejda.com/pdf-editor')">
          click here
        </button>
      </div>
    </div>
    <!-- online image editor-->
    <div class="image_editor">
      <img
        class="img"
        src="data:image/png;base64,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"
        alt="ai"
        title="ARTIFICAL INTELLIGENCE"
        width="205"
      /><br />
      <h2>Image editor</h2>
      <p>"Online Image Editor"</p>
      <br />
      <button
        type="button"
        onclick="window.open('https://www.adobe.com/express/feature/image/editor')"
      >
        click here
      </button>
    </div>
    <!-- online video editor-->
    <div class="video_editor">
      <img
        class="img"
        src="http://store-images.s-microsoft.com/image/apps.58856.14075264175091512.020a1ebe-72b3-4566-b644-a6f76ba3238a.8a08ded7-57b6-4124-a148-0dc6a05908d9"
        alt="ai"
        title="ARTIFICAL INTELLIGENCE"
        width="200"
      /><br />
      <h2>Video editor</h2>
      <p>"Online Video Editor"</p>
      <br />
      <div class="button">
        <button
          type="button"
          onclick="window.open('https://www.adobe.com/express/feature/video/editor')"
        >
          click here
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "userView",
  methods: {
    //Logout screen in userview and it redirects to login screen
    logout() {
      this.$router.push({ name: "login" });
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
/* navigation bar style for userview */
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: url("https://images.unsplash.com/photo-1507149677524-254e3ebb240f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")
    no-repeat center center fixed;
  background-size: cover;
  /* background-color: rgb(249, 181, 181); */
  border-right: rgb(44, 2, 2);
  transition: var(--tran-05);
}
nav.close {
  width: 73px;
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
.logo-name {
  font-size: 40px;
  font-weight: 600;
  color: rgb(237, 42, 42);
  margin-left: 33px;
  transition: var(--tran-05);
  margin-top: 1px;
}
nav.close .logo_name {
  opacity: 0;
  pointer-events: none;
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
.menu-items .logout-mode {
  padding-top: 10px;
  border-top: 1px solid var(--border-color);
}
.menu-items .mode {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.dashboard {
  position: relative;
  left: 250px;
  background-color: var(--panel-color);
  min-height: 100vh;
  width: calc(100% - 250px);
  padding: 10px 14px;
  transition: var(--tran-05);
}
nav.close ~ .dashboard {
  left: 73px;
  width: calc(100% - 73px);
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
  height: 94px;
  background-color: #eee;
  box-shadow: 2px 8px 5px #999;
  font-size: 30px;
  padding-top: 27px;
}
nav.close ~ .dashboard .top {
  left: 73px;
  width: calc(100% - 73px);
}
.top img {
  width: 40px;
  border-radius: 50%;
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
.dash-content .boxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 1000px) {
  nav {
    width: 73px;
  }
  nav.close {
    width: 250px;
  }
  nav .logo_name {
    opacity: 0;
    pointer-events: none;
  }
  nav.close .logo_name {
    opacity: 1;
    pointer-events: auto;
  }
  nav li a .link-name {
    opacity: 0;
    pointer-events: none;
  }
  nav.close li a .link-name {
    opacity: 1;
    pointer-events: auto;
  }
  nav ~ .dashboard {
    left: 73px;
    width: calc(100% - 73px);
  }
}
@media (max-width: 780px) {
  .dash-content .boxes .box {
    width: calc(100% / 2 - 15px);
    margin-top: 15px;
  }
}
@media (max-width: 560px) {
  .dash-content .boxes .box {
    width: 100%;
  }
}
@media (max-width: 400px) {
  nav {
    width: 0px;
  }
  nav.close {
    width: 73px;
  }
  nav .logo_name {
    opacity: 0;
    pointer-events: none;
  }
}
.logout-mode [type="button"] {
  border: none;
  outline: none;
  height: 40px;
  width: 100px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  left: 1px;
}
.logout-mode [type="button"]:hover {
  cursor: pointer;
  background: #5e84f8;
}

.form {
  display: block;
  width: 45%;
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
.navi {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: url("https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    no-repeat center center fixed;
  background-size: cover;
}
.document_editor {
  border: none;
  box-shadow: none;
  float: left;
  width: 33%;
  height: 40%;
  padding: 90px;
  margin: 110px 20px 10px 25px;
}
.image_editor {
  border: none;
  box-shadow: none;
  float: right;
  width: 33%;
  height: 40%;
  padding: 90px;
  margin: 110px 20px 10px 25px;
}
.img {
  height: auto;
}
.button [type="button"] {
  border: none;
  outline: none;
  height: 40px;
  width: 150px;
  background: #20ad13;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  margin-right: 50px;
  margin-left: 40px;
}
.video_editor {
  padding: 190px;
}
</style>
