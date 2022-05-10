<template>
    <div>
        <div class="container-fluid">
            <Sidebar></Sidebar>
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
                                        <div class="container">
                                            <div class="row mt-4">
                                                <form class="w-50" @submit.prevent="validAndSave('user')"
                                                    autocomplete="off" data-vv-scope="user" ref="userSave">
                                                    <div class="sign-in-wrapper">
                                                        <div class="form-group">
                                                            <label for="name">Name</label>
                                                            <input type="text" class="form-control" data-vv-name="name"
                                                                v-model="newUser.name" v-validate="'required'"
                                                                id="name">
                                                            <i class="icon_mail_alt"></i>
                                                            <span v-show="errors.has('user.name')" class="error_text">{{ errors.first('user.name')
                                }}</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="surname">Surname</label>
                                                            <input type="text" class="form-control"
                                                                data-vv-name="surname" v-model="newUser.surname"
                                                                v-validate="'required'" id="surname">
                                                            <i class="icon_mail_alt"></i>
                                                            <span v-show="errors.has('user.name')" class="error_text">{{ errors.first('user.name')
                                }}</span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="phone">Phone</label>
                                                            <input type="text" class="form-control" data-vv-name="phone"
                                                                v-model="newUser.phone" v-validate="'required|max:10|numeric'"
                                                                id="phone" >
                                                            <i class="icon_mail_alt"></i>
                                                            <span v-show="errors.has('user.phone')" class="error_text">{{ errors.first('user.phone')
                                }}</span>
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="email">Email</label>
                                                            <input type="email" class="form-control"
                                                                data-vv-name="email" v-model="newUser.email"
                                                                v-validate="'required'" id="email">
                                                            <i class="icon_mail_alt"></i>
                                                            <span v-show="errors.has('user.email')" class="error_text">{{ errors.first('user.email')
                                }}</span>
                                                        </div>



                                                        <div class="text-center">
                                                            <button type="submit" value="Log In"
                                                                class="btn btn-primary">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
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
    import Axios from "axios";
    import Sidebar from '@/components/Sidebar.vue';
    @Component({
        components: {
            Sidebar
        }
    })
    export default class EditUser extends Vue {
        public newUser = [];
        userId: any;

        async getUserDataById() {
            try {
                let response = await Axios.get('http://localhost:3000/user/' + this.userId);
                if (response.status == 200 || response.status == 201) {
                    this.newUser = response.data
                }

            } catch (error) {

            }
        }

        async validAndSave(scope) {
            let result = await this.$validator.validateAll(scope);
            if (!result) {
                return
            }

            await Axios.put('http://localhost:3000/user/' + this.userId, {
                ...this.newUser,
            }).then((result) => {
                alert('success');
                this.$router.go(-1);
            }).catch((error) => {
                alert('error');
            });
        }

        mounted() {
            this.userId = this.$route.params.userId;
            if (this.userId) {
                this.getUserDataById();
            }
        }

    }
</script>