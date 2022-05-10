<template>
  <div>
    <div class="container-fluid">
      <!-- top navigation -->

      <!-- sidebar -->
      <Sidebar></Sidebar>

      <!-- content body -->
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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#userModal">Create
                              User</button>
                          </div>
                        </div>
                        <div class="col-md-6 mr-auto p-4">
                          <form>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="Text">
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
                              <template v-if="userData.length != 0">
                                <tr v-for="(data,index) in userData" :key="index">
                                  <td><span>{{data.name}}</span></td>
                                  <td><span>{{data.surname}}</span></td>
                                  <td><b>{{data.email}}</b></td>
                                  <td><b>{{data.phone}}</b></td>
                                  <td>{{data.status}}</td>
                                  <td>  <router-link :to="{ name: 'editUser', params: { userId : data.id }}">
                                        Edit
                                    </router-link>
                                  </td>
                                </tr>
                              </template>
                              <template>
                                <tr>
                                  <td>No Data Found</td>
                                </tr>
                              </template>


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

<!-- modal for save user -->
      <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="validAndSave('user')" autocomplete="off" data-vv-scope="user" ref="userSave">
                <div class="sign-in-wrapper">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" data-vv-name="name" v-model="newUser.name"
                      v-validate="'required'" id="name">
                    <i class="icon_mail_alt"></i>
                    <span v-show="errors.has('user.name')" class="error_text">{{ errors.first('user.name')
                                }}</span>
                  </div>
                  <div class="form-group">
                    <label for="surname">Surname</label>
                    <input type="text" class="form-control" data-vv-name="surname" v-model="newUser.surname"
                      v-validate="'required'" id="surname">
                    <i class="icon_mail_alt"></i>
                    <span v-show="errors.has('user.name')" class="error_text">{{ errors.first('user.name')
                                }}</span>
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" data-vv-name="phone" v-model="newUser.phone"
                      v-validate="'required|max:10|numeric'" id="phone">
                    <i class="icon_mail_alt"></i>
                    <span v-show="errors.has('user.phone')" class="error_text">{{ errors.first('user.phone')
                                }}</span>
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" data-vv-name="email" v-model="newUser.email"
                      v-validate="'required'" id="email">
                    <i class="icon_mail_alt"></i>
                    <span v-show="errors.has('user.email')" class="error_text">{{ errors.first('user.email')
                                }}</span>
                  </div>



                  <div class="text-center">
                    <button type="submit" value="Log In" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </form>
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
    Vue
  } from 'vue-property-decorator';
  import Axios, { AxiosError } from "axios";
    import {
        Validator
    } from 'vee-validate';
  import Sidebar from '@/components/Sidebar.vue';
  import Modal from "@/components/modal/Modal.vue";
  import $ from "jquery";
  @Component({
    components: {
      Sidebar,
      Modal
    },
  })
  export default class HomeView extends Vue {
    
    public showAddUserModal = false;
    public newUser = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      status: true,
    }
    public userData = [];

    showModal() {
      this.showAddUserModal = true;
    }

    async validAndSave(scope) {
      
        let result = await this.$validator.validateAll(scope);
        if(!result){
          return
        }
       
       await Axios.post('http://localhost:3000/user', {
          ...this.newUser,
        }).then((result)=>{
          alert('success')
          $('#userModal').modal('hide');
          this.getUserData();
          // if (this.$refs.userSave instanceof HTMLFormElement) {
          //     this.$refs.userSave.clear();
          //   }
        }).catch((error)=>{
          alert('error');
        });

    }

    async getUserData(){
      try {
        let response = await Axios.get('http://localhost:3000/user')
        console.log(response);
        
        if(response.status==200 || response.status==201){
          this.userData = response.data;
        }
      } catch (error) {
        alert('error fetching data please re-try')
      }
    }

    mounted(){
      this.getUserData();
      
    }
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

  .nav-item ul.nav-second-level>.nav-item {
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