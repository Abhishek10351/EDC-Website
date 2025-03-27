import "./teamComponent.scss";

function getIconClassName(iconName) {
    const iconNames = {
        email: "fa fa-envelope",
        instagram: "fa-brands fa-instagram",
        linkedin: "fa-brands fa-linkedin",
        github: "fa-brands fa-github",
    };

    return iconNames[iconName];
}

export default function TeamComponent({
    name,
    designation,
    image,
    linkedin,
    github,
    instagram,
    email,
    linktree
}) {
    return (
        <div className="team-item webteam-item coreteam-item">
            <img src="https://placehold.co/100/png" alt="team" />
            <h4>
                {name}
                <br />
                <span>{designation}</span>
            </h4>
            <div className="social-links">
                {email && (
                    <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={getIconClassName("email")} />
                    </a>
                )}
                {linkedin && (
                    <a
                        href={`https://www.linkedin.com/in/${linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={getIconClassName("linkedin")} />
                    </a>
                )}
                {github && (
                    <a
                        href={`https://www.github.com/${github}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={getIconClassName("github")} />
                    </a>
                )}
                {instagram && (
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={getIconClassName("instagram")} />
                    </a>
                )}
                {linktree && (
                    <a
                        href={`https://www.linktr.ee/${linktree}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={getIconClassName("linktree")} />
                    </a>
                )}
            </div>
        </div>
    );
}
