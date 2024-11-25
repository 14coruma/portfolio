import { FaBriefcase, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa'; // Optionally use icons for added flair

export class TimelineEvent {
    icon?: JSX.Element;

    public constructor(
        readonly type: string,
        readonly title: string,
        readonly organization: string,
        readonly location: string,
        readonly startDate: Date,
        readonly endDate: Date,
        readonly description: JSX.Element,
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
}
export class TimelineEventType {
    static work = "work";
    static education = "education";
    static travel = "travel";
}