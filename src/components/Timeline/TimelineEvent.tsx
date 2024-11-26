export class TimelineEvent {
    public constructor(
        readonly title: string,
        public readonly organization: string,
        public readonly location: string,
        public readonly startDate: Date,
        public readonly endDate: Date,
        public readonly description: JSX.Element,
        public readonly icon: JSX.Element,
        public readonly drawEventOnLeft: boolean
    ) { }
    
    public static durationInMonths(startDate: Date, endDate: Date): number {
        const yearDiff = endDate.getFullYear() - startDate.getFullYear();
        const monthDiff = endDate.getMonth() - endDate.getMonth();
        return yearDiff * 12 + monthDiff;
    }
}
export class TimelineEventType {
    static work = "work";
    static education = "education";
    static travel = "travel";
}