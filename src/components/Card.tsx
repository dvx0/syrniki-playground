import './card.css';

interface TransactionsCardProps {
    title: string;
    date: string;
    image: string;
    wellnessIndex: string;
}

function TransactionsCard({image, title, date, wellnessIndex}: TransactionsCardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} alt={title} className="card-image" />
                <p className="card-content-name"><strong>{title}</strong></p>
                <p>{date}</p>
            </div>
            <div className="wellness-index">
                <p><strong>{wellnessIndex}</strong></p>
            </div>
        </div>
    )
}

export default TransactionsCard;