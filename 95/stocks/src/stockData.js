import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function stockData(props) {
    const { stock, setStock } = props;

    let showComment = true;
    //   this.handleClick = this.handleClick.bind(this)

    handleClick(item) {
        setPosts(item);
        fetch('./comments.json')
            .then(response => response.json())
            .then(comment => {
                comment.forEach(comment => {
                    if (comment.id === post.id) {
                        return (
                            <div>
                                <h3>By: ${comment.name}   ${comment.email} <br /> ${comment.body}  <br /></h3>
                            </div>)
                    }
                })
                showComment = false;
            })
    }
}

return (
    <>
        <h4>Posts</h4>
        <ul className="bulletless">
            {posts.map((item) => (
                <li key={item.id} className="blogList">
                    commentsButton.innerHTML = "see comments";
                    {showComment = true; }
                    let commentPopup = document.createElement('div');;
                    <h1> ${post.title} </h1>
                    <h2> ${post.body}</h2>
                    <button onClick={this.handleClick(item)}>See comments</button>
                </h3>

                    </li>
                ))}
    </ul>
        </>
    )
}

blogList.propTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

