import { TeamComponent } from ".";
import CoreTeam from "./CoreTeam";
import WebTeam from "./WebTeam";
import AlumniTeam from "./AlumniTeam";
export default function TeamSection() {
    return (
        <section className="team">
            <CoreTeam />
            <WebTeam />
            <AlumniTeam />
            
        </section>
    );
}
