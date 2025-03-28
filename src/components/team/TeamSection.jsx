import { TeamComponent } from ".";
import CoreTeam from "./CoreTeam";
import WebTeam from "./WebTeam";
import AlumniTeam from "./AlumniTeam";
import Faculty from "./Faculty";
export default function TeamSection() {
    return (
        <section className="team">
            <Faculty />
            <CoreTeam />
            <WebTeam />
            <AlumniTeam />
        </section>
    );
}
