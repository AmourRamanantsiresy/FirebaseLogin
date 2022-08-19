import { ISendLoginProperty } from './Login';

export interface ISendSignInProperty extends ISendLoginProperty {
    passConfirm: string;
}
