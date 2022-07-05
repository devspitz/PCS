import { useEffect, useState } from "react";
import Comment from './Comment';
import addComment from './AddComment';

export default function Posts({ post: { _id, title, body, author, date, comments } }) {
    const [commenting, setCommenting] = useState(false);

    const endCommenting = () => setCommenting(false);

    const content = !commenting ? <button onClick={() => setCommenting(!commenting)}>add comment</button> : <addComment id={_id} endCommenting={endCommenting} />;

    return (
        <div className="post">
            <h2>{title}</h2>
            <h3>by {author} on {new Date(date).toLocaleString()}</h3>
            <div>{body}</div>

            <div className="comments">
                {content}
                {comments?.map(c => (<Comment key={c.date} comments={c} />))}
            </div>
        </div>

    )
}
//?-only shou if not null