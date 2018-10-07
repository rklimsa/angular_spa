export class TableCell {

    public constructor (
        private text: string,
        private rowSpan: Number,
        private colSpan: Number,
        private cellStyle: string
    ) {
    }

    public getText(): string {
        return this.text;
    }

    public getRowSpan(): Number {
        return this.rowSpan;
    }

    public getColSpan(): Number {
        return this.colSpan;
    }

    public getCellStyle(): string {
        return this.cellStyle;
    }
}
