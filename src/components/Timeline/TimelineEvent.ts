export class TimelineEvent {
    public constructor(
        readonly title: string,
        public readonly organization: string,
        public readonly location: string,
        public readonly startDate: Date,
        public readonly endDate: Date,
        public readonly description: JSX.Element,
        public readonly icon: JSX.Element,
        public readonly drawEventOnLeft: boolean,
        public readonly cardColor: string
    ) { }
    
    public durationInMonths(): number {
        const yearDiff = this.endDate.getFullYear() - this.startDate.getFullYear();
        const monthDiff = this.endDate.getMonth() - this.startDate.getMonth();
        return yearDiff * 12 + monthDiff;
    }
}
export class TimelineEventType {
    static work = "work";
    static education = "education";
    static travel = "travel";
}