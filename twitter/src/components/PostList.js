import React from 'react';
import './PostList.css';

const Post = (props) => {
	return (
		<div className="Post">
			<div className="name">@{props.post.name}</div>
			<div className="text">{props.post.text}</div>
		</div>
	);
};

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => <Post post={post} />)}
        </div>
    )
}
export default PostList;