export class Usuario {

    constructor(
        public email:string,
        public password:string,
        public google:boolean,
        public img:string,
        public name:string,
        public role?:string,
        public uid?: string,
    ) { }
}