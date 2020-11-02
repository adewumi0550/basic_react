import React, { Component } from 'react'
import { Card,Pagination } from 'react-bootstrap';
import axios from 'axios';
export class Post extends Component {

    state = {
        posts:[]
      } 
    
      componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
              posts: res.data
            })
            // console.log(res.data)
        })
        .catch(err=>console.log(err));
    }

    render() {

        let posts = this.state.posts.map((post) => {
            return (
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
            )
        })
        return (
            <div>
                { posts }
        
        <Pagination style={{ marginTop:"30px"}}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </div>
        )
    }
}

export default Post
