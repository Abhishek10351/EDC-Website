import { TeamComponent } from ".";
import webteamdata from "../../../public/data/web-team.json";
export default function WebTeam() {
    return (
        <div className="container-core">
            <div className="row">
                <div className="section-title">
                    <h2>Web Team</h2>
                </div>
            </div>
            <div className="team row-core">
                {webteamdata.map((teamMember, index) => (
                    <TeamComponent key={index} {...teamMember} />
                ))}
            </div>
        </div>
    );
}
