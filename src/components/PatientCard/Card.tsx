import './card.css';

interface PatientCardProps {
    name: string;
    diagnosis: string;
    image: string;
    age: number;
    sex: string;
    wellnessIndex: string;
    showWellnessIndex: boolean;
}

function PatientCard({image, name, diagnosis, wellnessIndex, showWellnessIndex, age, sex}: PatientCardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} alt={name} className="card-image" />
                <p className="card-content-name"><strong>{name}</strong></p>
                <p className="card-content-demographics">{age} / {sex}</p>
                <p>{diagnosis}</p>
            </div>
            <div className="wellness-index">
                {showWellnessIndex ? <p><strong>{wellnessIndex}</strong></p> : <p></p>}
            </div>
        </div>
    )
}

export default PatientCard;