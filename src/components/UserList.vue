<template>
    <div>

        <div class="mcw">
            <!--navigation here-->
            <!--main content view-->
            <div class="cv">
                <div>
                    <div class="inbox">
                        <div class="inbox-sb">

                        </div>
                        <div class="inbox-bx container-fluid" style="background: #e8e8e8;">
                            <div class="row">

                                <div class="col-md-10 offset-md-2 p-0">
                                    <ol class="breadcrumb bg-light mt-4">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">User</li>
                                    </ol>
                                    <div class="container bg-light">
                                        <div class="row" style="border:1px solid grey;">
                                            <div class="col-md-12" style="border-bottom:1px solid grey;padding:16px;">
                                                <div class="d-flex justify-content-between">
                                                    <h4>Users</h4>
                                                    <button class="btn btn-primary" @click="showModal">Create User</button>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mr-auto p-4">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="" id=""
                                                                    aria-describedby="helpId" placeholder="Text">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <select name="" id="" class="form-control">
                                                                    <option value="">Select Status</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </form>
                                            </div>
                                            <div class="col-md-12">
                                                <table class="table table-stripped">
                                                    <tbody>
                                                        <th>
                                                            Name
                                                        </th>
                                                        <th>
                                                            Surname
                                                        </th>
                                                        <th>
                                                            Email
                                                        </th>
                                                        <th>
                                                            Phone Number
                                                        </th>
                                                        <th>
                                                            Activation
                                                        </th>
                                                        <th>
                                                            Action
                                                        </th>
                                                        <tr>
                                                            <td><span>Saurabh</span></td>
                                                            <td><span>Dass</span></td>
                                                            <td><b>saurabh@gmail.com</b></td>
                                                            <td><b>7011675698</b></td>
                                                            <td>True</td>
                                                            <td>Edit</td>
                                                        </tr>
                                                       

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    export default class UserList extends Vue {
        showModal(){
            this.$emit('showUserModal',true);
        }
    }
</script>