import faculty from "../../../public/data/faculty.json";
import { TeamComponent } from ".";
export default function Faculty() {
    return (
        <div className="container-core">
            <div className="row">
                <div className="section-title">
                    <h2>Faculty Advisors</h2>
                </div>
            </div>
            <div className="team row-core">
                {faculty.map((teamMember, index) => (
                    <TeamComponent key={index} {...teamMember} />
                ))}
            </div>
        </div>
    );
}
