export class Ticket {
    public constructor (private title: string, private creator: string, private dueDate: Date, private creationDate: Date) {}

    public getTitle(): string {
        return this.title;
    }

    public getCreator(): string {
        return this.creator;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }

}
