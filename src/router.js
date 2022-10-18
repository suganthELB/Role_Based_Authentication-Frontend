// Giviing the path to login,Admin,User
import loginUser from './components/loginUser.vue';
import userView from './components/userView.vue';
import adminView from './components/adminView.vue';
import { createRouter, createWebHistory } from 'vue-router';
//Routes to each file with the name
const routes = [
  {
    name: 'login',
    component: loginUser,
    path:'/login',
  },

  {
    name: 'user',
    component: userView,
    path:'/user',
  },

  {
  name: 'admin',
    component: adminView,
    path:'/admin',
  }, 
];

const router = createRouter({   
  history: createWebHistory(),
  routes,
});

export default router;
