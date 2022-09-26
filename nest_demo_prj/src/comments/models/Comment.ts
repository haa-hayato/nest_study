type CommentProps = {
    id: number;
    user_id: number;
    content: string;
    date: Date;
};

export class Comment {
    public readonly id: number;
    public readonly user_id: number;
    public readonly content: string;
    public readonly date: Date;

    constructor(props: CommentProps) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.content = props.content;
        this.date = props.date

    }
    

}