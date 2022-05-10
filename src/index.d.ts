
/**
 * RL: Define all the prototype variable there, so no need to import the package in any components
 */
 import { Validator } from 'vee-validate';

declare module 'vue/types/vue' {
  interface Vue {
    $validator: Validator;
  }
}