
let userDiv = document.getElementById('users');
let postsDiv = document.getElementById('posts');
let header = document.getElementById('tooplate_header');
let commentDiv;


fetch('users.json')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let userList = document.createElement('div');
            let blogButton = document.createElement('button');
            blogButton.innerHTML = "Read post";
            blogButton.id = 'blogButton';
            userList.innerHTML = ` Name: ${user.name} <br> Website: ${user.website} <br> Company Information: <br> ${user.company.name}  specializes in ${user.company.catchPhrase}, our business will ${user.company.bs}`;
            userList.append(blogButton);
            userList.style.borderBottom = '2px solid lightgray';
            userList.style.paddingTop = '10px';
            userDiv.append(userList);

            blogButton.addEventListener('click', () => {
                userDiv.style.display = 'none';
                postsDiv.style.display = 'inline-block';
                fetch('posts.json')
                    .then(response => response.json())
                    .then(post => {
                        let backToBlog = document.createElement('button');
                        backToBlog.innerHTML = "Back to blog";
                        backToBlog.id = 'backToBlog';
                        header.append(backToBlog);
                        backToBlog.addEventListener('click', () => {
                            userDiv.style.display = 'inline-block';
                            postsDiv.style.display = 'none';
                            header.removeChild(backToBlog);
                        });


                        post.forEach(post => {
                            if (post.userId === user.id) {
                                let poster = document.createElement('div');

                                poster.innerHTML = `  <br> ${post.title} <br> ${post.body} `;

                                let commentsButton = document.createElement('button');
                                commentsButton.innerHTML = "see comments";
                                poster.append(commentsButton);
                                postsDiv.append(poster);

                                let showComment = true;
                                let commentPopup = document.createElement('div');;
                                commentsButton.addEventListener('click', () => {

                                    if (showComment) {
                                        fetch('comments.json')
                                            .then(response => response.json())
                                            .then(comment => {
                                                comment.forEach(comment => {
                                                    if (comment.id === post.id) {
                                                        commentDiv = document.createElement('div');
                                                        commentDiv.innerHTML = ` By: ${comment.name}   ${comment.email} <br> ${comment.body}  <br>`;
                                                        commentDiv.style.display = 'block';
                                                        commentDiv.style.marginLeft = '15px';
                                                        commentsButton.innerHTML = "hide comments";
                                                        commentPopup.appendChild(commentDiv);
                                                        poster.append(commentPopup);
                                                    }
                                                })
                                                showComment = false;
                                            })
                                    }
                                    else {
                                        commentsButton.innerHTML = "see comments";
                                        commentPopup.remove();
                                        showComment = true;
                                    }
                                })
                            }
                        })
                    })
            })
        })
    })