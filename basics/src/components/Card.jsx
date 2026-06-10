import { ExperienceData } from "../data/data";
import './Card.css';

export default function Card() {

    return (
        <div className="cards-container">
            {ExperienceData.map((experience) => (
                <div className="card" key={experience.id}>
                    <img className="card-logo" src={experience.logo} alt={experience.Company} />
                    <h2>{experience.Company}</h2>
                    <p><strong>Role:</strong> {experience.Role}</p>
                    <p><strong>Duration:</strong> {experience.Duration}</p>
                    <p><strong>Description:</strong> {experience.Description}</p>
                </div>
            ))}
        </div>
    );
}