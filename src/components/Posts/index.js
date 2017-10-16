import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post';

class Posts extends Component{

  state = {
    Posts :[],
  }

  async componentDidMount(){
    const response = await axios.get('https://badenblog-api.herokuapp.com/post/actives?page=1')
    const Posts = response.data.content;
    this.setState({ Posts })
  }

  render(){
    return (
      <div>
        {this.state.Posts.map( (post) =>{
          return (
                <Post key={post.idPost} postName={post.postName} owner={post.owner || 'Anónimo'} description={post.description} />
            )
          }
        )}
      </div>  
    )
  }
}

export default Posts;
