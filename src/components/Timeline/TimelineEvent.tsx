import { FaBriefcase, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa'; // Optionally use icons for added flair

export class TimelineEvent {
    icon?: JSX.Element;

    public constructor(
        readonly type: string,
        readonly title: string,
        public readonly organization: string,
        public readonly location: string,
        public readonly startDate: Date,
        public readonly endDate: Date,
        public readonly description: JSX.Element,
    ) {
        switch (type) {
            case TimelineEventType.work:
                this.icon = <FaBriefcase/>;
                break;
            case TimelineEventType.education:
                this.icon = <FaGraduationCap/>;
                break;
            case TimelineEventType.travel:
                this.icon = <FaGlobeAmericas/>;
                break;
            default:
                throw new Error(`Invalid TimlineEventType: ${type}.`);
        }
    }
    
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