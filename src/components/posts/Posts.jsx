import React, { use } from 'react';

const Posts = ({postPromise}) => {
    const posts = use(postPromise);
    return (
        <div>
            <h3>Total Posts: {posts.length}</h3>
        </div>
    );
};

export default Posts;