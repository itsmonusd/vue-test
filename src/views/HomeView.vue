<template>
  <div>
    <div class="container-fluid">
      <!-- top navigation -->
      <!-- <Navbar></Navbar> -->

      <!-- sidebar -->
      <Sidebar></Sidebar>

      <!-- breadcrumb -->

      <!-- content body -->
      <UserList></UserList>
      <!-- footer -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'; 
import UserList from '@/components/UserList.vue'; 

@Component({
  components: {
    Navbar,
    Sidebar,
    UserList,
  },
})
export default class HomeView extends Vue {
  
}
</script>


<style>
body {
	 margin-top: 50px;
	 background-color: #fff;
	 font-family: Arial, sans-serif;
	 font-size: 14px;
	 letter-spacing: 0.01em;
	 color: #39464e;
}
 .nav-link:hover {
  transition: all 0.4s;
}

.nav-link-collapse:after {
  float: right;
  content: '\f067';
  font-family: 'FontAwesome';
}

.nav-link-show:after {
  float: right;
  content: '\f068';
  font-family: 'FontAwesome';
}

.nav-item ul.nav-second-level {
  padding-left: 0;
}

.nav-item ul.nav-second-level > .nav-item {
  padding-left: 20px;
}

@media (min-width: 992px) {
  .sidenav {
    position: absolute;
    top: 9px;
    left: 0;
    width: 230px;
    height: calc(100vh - 3.5rem);
    margin-top: 3.5rem;
    background: #343a40;
    box-sizing: border-box;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  .navbar-expand-lg .sidenav {
    flex-direction: column;
  }

  .content-wrapper {
    margin-left: 230px;
  }

  .footer {
    width: calc(100% - 230px);
    margin-left: 230px;
  }
}
 
</style>