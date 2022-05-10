<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">Vue Test</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto sidenav" id="navAccordion">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Users  <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul class="ml-auto mt-2 mt-md-0 navbar-right navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-bar-icons"><i class="fa fa-bell-o"></i><span class="badge custom-badge badge-primary">3</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-bar-icons"><i class="fa fa-comment-o"></i><span class="badge custom-badge badge-danger">3</span></a></li>
                        <li class="nav-item"><a class="profile-img-sizing ml-4" href="#"><img src="@/assets/img/profile.jpg" class="img-fluid profile-img" alt=""></a></li>
                </ul>
                <!-- <form class="form-inline ml-auto mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
        </nav>
        <div class="container">
            <!-- <ol class="breadcrumb bg-light ml-3">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">User</li>
            </ol> -->
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Prop
    } from "vue-property-decorator";
    @Component
    export default class Sidebar extends Vue {

    }
</script>

<style scoped>
.nav-bar-icons{
    font-size: 22px;
    color: #fff;
    padding: 0 16px;
    line-height: 2;
}
.custom-badge{
    position: absolute;
    font-size: 10px;
}
.profile-img-sizing{
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.profile-img{
    border-radius: 50%;
    object-fit: cover;
    height: 50px;
    width: 50px;
}
</style>
