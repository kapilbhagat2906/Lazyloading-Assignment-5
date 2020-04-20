export class TimerStatusModel {
    constructor (
        public operationType: string,
        public value: number,
        public dateTime: Date
    ) { }
}
