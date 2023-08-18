import StarActive from '../images/full-star.svg';
import StarInactive from '../images/empty-star.svg';

export default function Rating({rating}) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? StarActive : StarInactive}
            />
        );
    }

    return <div className="rating-stars">{stars}</div>;
}
