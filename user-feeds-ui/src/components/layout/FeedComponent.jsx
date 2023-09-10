export default function FeedComponent({ feed }) {
    return (
        <div className="card m-2" style={{ width: '20rem' }}>
            {feed.image ? <img className="card-img-top" src={`http://localhost:8000/feeds/images/${feed.image}`}></img> : null}
            <div className="card-body">
                <p className="card-text">{feed.description}</p>
                <p className="card-text feed-info"><small className="text-muted">{feed.user.username} | {feed.created_at}</small></p>
                <ul className="tag-list">
                    {feed.intrested.map((tag, index) => (
                        <li key={index} className="text-primary">#{tag} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}