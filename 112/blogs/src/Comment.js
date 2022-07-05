export default function Comment({ comment: { author, date, body } }) {
    return (
        <div className="comment">
            <h4>
                {body}
            </h4>
            <h6>by {author} on {new Date(date).toLocalString()}</h6>
        </div>
    )
}