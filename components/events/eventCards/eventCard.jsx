import "./eventCard.css";
export default function EventCard() {
    return (
        <div className="card" style={{ width: "21rem" }}>
            <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">DOER Ideation Challenge</h5>
                <p className="card-text">
                    Date: <br />
                    Venue:
                </p>
                <a href="#" className="btn btn-primary">
                    Registrations Closed
                </a>
            </div>
        </div>
    );
}
