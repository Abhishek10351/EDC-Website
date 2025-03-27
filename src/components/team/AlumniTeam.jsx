import { TeamComponent } from ".";
import alumnidata from "../../../public/data/alumni.json";
export default function WebTeam() {
    return (
        <div className="container-core">
            <div className="row">
                <div className="section-title">
                    <h2>OUR ALUMNI</h2>
                </div>
            </div>
            <div className="team row-core">
                {alumnidata.map((teamMember, index) => (
                    <TeamComponent key={index} {...teamMember} />
                ))}
            </div>
        </div>
    );
}
