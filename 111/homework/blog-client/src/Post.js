import './Post.css';
import Comment from './Comment';
import AddComment from './AddComment';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Post({ post: { _id, title, body, author, date, comments } }) {
  const [commenting, setCommenting] = useState(false);

  const endCommenting = () => setCommenting(false);

  const content = !commenting ? <button onClick={() => setCommenting(!commenting)}>add comment</button> : <AddComment id={_id} endCommenting={endCommenting} />;

  return (
    <div className='post'>
      <h1 className="display-2">{title}</h1>
      <h3 className="display-5">by {author} on {new Date(date).toLocaleString()}</h3>
      <div className="display-3">{body}</div>

      <div className="comments">
        {content}
        {comments?.map(c => (<Comment key={c} comment={c} />))}
      </div>
    </div>
  )
}