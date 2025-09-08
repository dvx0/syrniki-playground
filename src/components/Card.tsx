import './card.css';

interface TransactionsCardProps {
    title: string;
    date: string;
    image: string;
    wellnessIndex: string;
    showWellnessIndex: boolean;
}

function TransactionsCard({image, title, date, wellnessIndex, showWellnessIndex}: TransactionsCardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} alt={title} className="card-image" />
                <p className="card-content-name"><strong>{title}</strong></p>
                <p>{date}</p>
            </div>
            <div className="wellness-index">
                {showWellnessIndex ? <p><strong>{wellnessIndex}</strong></p> : <p></p>}
            </div>
        </div>
    )
}

export default TransactionsCard;