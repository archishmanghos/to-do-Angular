export class Todo {
    sno: number
    title: string
    desc: string
    active: boolean

    constructor() {
        this.sno = 1;
        this.title = 'First Item';
        this.desc = 'First Item Description';
        this.active = true;
    }
}