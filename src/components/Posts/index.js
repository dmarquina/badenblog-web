import React, { Component } from 'react';
import Post from '../Post';

class Posts extends Component{
 
  render(){
    return (
      <div>
        {
          <div>
            {this.props.posts.map( (post) =>{
              return (
                <Post key={post.idPost} postName={post.postName} owner={post.owner || 'Anónimo'} description={post.description} />
                )
              }
              )
            }
          </div>  
        }
    </div>
    )
  }
}

export default Posts;
