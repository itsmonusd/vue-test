<template>
    <div>
        <nav class="mnb navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="ic fa fa-bars"></i>
                    </button>
                    <div style="padding: 15px 0;">
                        <a href="#" id="msbo"><i class="ic fa fa-bars"></i></a>
                    </div>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">En</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Draude Oba <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Upgrade</a></li>
                                <li><a href="#">Help</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><i class="fa fa-bell-o"></i></a></li>
                        <li><a href="#"><i class="fa fa-comment-o"></i></a></li>
                    </ul>
                    <form class="navbar-form navbar-right">
                        <input type="text" class="form-control" placeholder="Search...">
                    </form>
                </div>
            </div>
            <div class="container-fluid">
                <ol class="breadcrumb bg-light">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">User</li>
                </ol>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">

import {Component,Vue,Prop} from "vue-property-decorator";
@Component
export default class Navbar extends Vue {
    mounted(){
        console.log('nav bar');
        
    }
}

</script>