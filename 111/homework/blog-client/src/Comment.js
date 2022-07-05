import './Comment.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your

// components takes precedence over default styles.
export default function Comment({ comment: { author, date, body } }) {
  return (
    <div className='comment'>
      <h4 className="h4">{body}</h4>
      <h5 className="h5">by {author} on {new Date(date).toLocaleString()}</h5>
    </div>
  )
}