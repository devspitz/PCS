import React from 'react';
import PropTypes from 'prop-types'
import BlogList from './BlogList';
import useState from 'react';
import $ from 'jquery';

export default function PostList(props) {
    const { post, blog, setBlog } = props;

    let showComment = true;
    this.handleClick = this.handleClick.bind(this)

    function handleClick() {
        setBlog(this);
        fetch('comments.json')
            .then(response => response.json())
            .then(comment => {
                comment.forEach(comment => {
                    if (comment.id === blog.id) {
                        showComment = false;
                        return (
                            <div>
                                <h3>By: ${comment.name}   ${comment.email} <br /> ${comment.body}  <br /></h3>
                            </div>)
                    }
                    else {
                        console.log('need to change commnet buttoo\n')
                    }
                })
            })
    }

    return (
        <>
            <h4>Posts</h4>
            <ul className="bulletless">

                <li key={post.id} className="blogList">
                    commentsButton.innerHTML = "see comments";
                    {showComment = true}
                    <h1> ${post.title} </h1>
                    <h2> ${post.body}</h2>
                    <button onClick={handleClick}>See comments</button>
                </li>
                ))
            </ul>
        </>
    )
}
PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
