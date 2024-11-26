import { FaBriefcase, FaGlobeAmericas, FaGraduationCap } from "react-icons/fa";
import { TimelineEvent } from "./TimelineEvent";

const TimelineData = [
    new TimelineEvent(
        "Appalachian Trail",
        "",
        "",
        new Date(2024, 2),
        new Date(2024, 7),
        <p>Describe my hike</p>,
        <FaGlobeAmericas/>,
        false,
        "light"
    ),
    new TimelineEvent(
        "Software Developer",
        "Epic",
        "Verona, WI",
        new Date(2021, 9),
        new Date(2024, 1),
        <p>Describe my time at Epic</p>,
        <FaBriefcase/>,
        true,
        "light"
    ),
    new TimelineEvent(
        "Master's in CS",
        "Indiana University - Bloomington",
        "Bloomington, IN",
        new Date(2021, 4),
        new Date(2021, 4),
        <p>Describe my degree at IU</p>,
        <FaGraduationCap/>,
        false,
        "light"
    ),
    new TimelineEvent(
        "Associate Instructor",
        "Indiana University - Bloomington",
        "Bloomington, IN",
        new Date(2019, 7),
        new Date(2021, 4),
        <p>My long description</p>,
        <FaBriefcase/>,
        true,
        "light"
    ),
    new TimelineEvent(
        "Web Developer",
        "CCEL - Calvin University",
        "Grand Rapids, MI",
        new Date(2019, 0),
        new Date(2019, 7),
        <p>My web dev contract work</p>,
        <FaBriefcase/>,
        true,
        "light"
    ),
    new TimelineEvent(
        "Bachelor's in CS and Math",
        "Calvin University",
        "Grand Rapids, MI",
        new Date(2018, 11),
        new Date(2018, 11),
        <p>Describe my degree at Calvin</p>,
        <FaGraduationCap/>,
        false,
        "light"
    ),
    new TimelineEvent(
        "Web Developer",
        "CCEL - Calvin University",
        "Grand Rapids, MI",
        new Date(2017, 3),
        new Date(2018, 11),
        <p>Describe my web dev internship</p>,
        <FaBriefcase/>,
        true,
        "light"
    ),
    new TimelineEvent(
        "Research (REU)",
        "New Mexico Tech",
        "Socorro, NM",
        new Date(2018, 4),
        new Date(2018, 7),
        <p>Describe my NMT research</p>,
        <FaBriefcase/>,
        true,
        "light"
    ),
];

export default TimelineData;