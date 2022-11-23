type UserProps = {
    id: number;
    name: string;
    date: Date;
    age: number;
    is_login: boolean;
};



export class User {
    public readonly id: number;
    public readonly name: string;
    public readonly date: Date;
    public readonly age: number;
    public readonly is_login: boolean;

    constructor(props: UserProps) {
        this.id = props.id;
        this.name = props.name;
        this.date = props.date;
        this.age = props.age;
        this.is_login = props.is_login;
    }
}
  