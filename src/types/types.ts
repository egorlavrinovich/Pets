export interface IUser{
    id:number;
    name:string;
    email:string;
    password:string;
}
export interface IValidationform{
    name:boolean;
    email:boolean;
    password:boolean;
    repeatpassword:boolean;
}