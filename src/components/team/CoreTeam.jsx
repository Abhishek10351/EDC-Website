import { TeamComponent } from ".";
import coreteam from "../../../public/data/core-team.json";
export default function CoreTeam() {
    return (
        <div className="container-core">
            <div className="row">
                <div className="section-title">
                    <h2>Core Team</h2>
                </div>
            </div>
            <div className="team row-core">
                {coreteam.map((teamMember, index) => (
                    <TeamComponent key={index} {...teamMember} />
                ))}
            </div>
        </div>
    );
}
