<template>
    <div>
        <div class="container modal-padding">
            <div class="row">
                <!-- Sign in form -->
                <div class="col-md-12 ">
                    <form @submit.prevent="validAndSave('user')" autocomplete="off" data-vv-scope="user">
                        <div class="sign-in-wrapper">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" data-vv-name="name"
                                    v-model="name" v-validate="'required'"
                                    id="name">
                                <i class="icon_mail_alt"></i>
                                <span v-show="errors.has('signup.name')" class="error_text">{{ errors.first('signup.name')
                                }}</span>
                            </div>
                            <div class="form-group">
                                <label for="surname">Surname</label>
                                <input type="text" class="form-control" data-vv-name="surname"
                                    v-model="surname" v-validate="'required'"
                                    id="surname">
                                <i class="icon_mail_alt"></i>
                                <span v-show="errors.has('signup.name')" class="error_text">{{ errors.first('signup.name')
                                }}</span>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" data-vv-name="phone"
                                    v-model="phone" v-validate="'required'"
                                    id="phone">
                                <i class="icon_mail_alt"></i>
                                <span v-show="errors.has('signup.phone')" class="error_text">{{ errors.first('signup.phone')
                                }}</span>
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" data-vv-name="email"
                                    v-model="email" v-validate="'required'"
                                    id="email">
                                <i class="icon_mail_alt"></i>
                                <span v-show="errors.has('signup.email')" class="error_text">{{ errors.first('signup.email')
                                }}</span>
                            </div>
                            
                            
                           
                            <div class="text-center">
                                <button type="submit" value="Log In"
                                    class="btn btn-blue shineBtn hover-right w-100 mb-3">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
        Component,
        Vue
    } from "vue-property-decorator";
@Component({})
export default class AddUser extends Vue{
    public name: string;
    public surname: string;
    public phone: string;
    public email: string;
    public status: string;
    async validAndSave(scope){
        // let result = await this.$validator.validateAll(scope);
    }
}
</script>