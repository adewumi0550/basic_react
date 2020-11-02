import React from 'react'
import { Card,Pagination } from 'react-bootstrap';
 const Posts = ({posts,loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }
    return (
        <div>
            {posts.map(post=>(
                  <Card key={post.id}>
                  <Card.Body>
              <Card.Title>{post.title}</Card.Title>
                      <Card.Text>
                      {post.body}
                                      </Card.Text>
                      <Card.Link href="#" className="btn btn-primary">Read More</Card.Link>
                      <Card.Link href="#">Comment</Card.Link>
                      <Card.Link href="#">Add Post</Card.Link>
                  </Card.Body>
              </Card> 
            ))}
        </div>
    )
}

export default Posts;