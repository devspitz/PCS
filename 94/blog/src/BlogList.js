import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import useState, {useEffect} from 'react';
import $ from 'jquery';

export default function BlogList(props) {
    const { blogs, setBlog } = props;

    const [posts, setPosts] = useState([]);
      this.handleClick = this.handleClick.bind(this);

        useEffect(() => {
            let url = "./posts.json";
            fetch(url)
                .then(res => res.json())
                .then(post => setPosts(post))
        }, [blogs]);

  function handleClick () {
        setBlog(this);
        console.log('clicked');
        <Link to={`/blogs/${this.id}`}>{this.name}</Link>
    }

    return (
        <>
            <h4>Blog List</h4>
            <ul className="bulletless">
                {blogs.map((item) => (
                    <li key={item.id} className="blogList">
                        <h1> Name: ${item.name} </h1>
                        <h2> Website: ${item.website}</h2>
                        <h3>Company Information: <br /> ${item.company.name}  specializes in ${item.company.catchPhrase}, our business will ${item.company.bs}`
                            <button id='blogButton' onClick={handleClick}>Read post</button>
                        </h3>

                    </li>
                ))}
            </ul>
        </>
    )
}

BlogList.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
  //      userDiv.style.display = 'none';
//        postsDiv.style.display = 'inline-block';
                //let backToBlog = document.createElement('button');
               // backToBlog.innerHTML = "Back to blog";
                //backToBlog.id = 'backToBlog';
             //   header.append(backToBlog);
              //  backToBlog.addEventListener('click', () => {
                //    userDiv.style.display = 'inline-block';
                  //  postsDiv.style.display = 'none';
                    //header.removeChild(backToBlog);
                //});
