
import React, {useState, useEffect,Component} from 'react'
import { Container, Row,Col, Pagination } from 'react-bootstrap'
import axios from 'axios';
import Posts from '../components/Posts';


const Home=()=>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [currentPage, SetCurrentPage]= useState(1);
    const [postPerPage, SetPostPerPage]= useState(5);

    useEffect(() => {
       const fetchPosts = async()=>{
           setLoading(true);
           const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
           setPosts(res.data);
           setLoading(false);
       }

       fetchPosts();
    }, []);


    //Calculate the Pagination 
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    // console.log(posts)
    return(
        
        <Row>
               
        <Container>
        <h3 className="alert alert-info">Pagination and Redux Testing Post</h3>
            <Row>
                <Col lg={7}>

               

                <Posts posts={currentPosts} loading={loading} />


                </Col>
                <Col lg={3}>2 of 2</Col>
            </Row>
            
        </Container>
    </Row>
    );
};

export default Home
