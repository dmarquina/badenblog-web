import React, { Component } from 'react';
import {Card,CardTitle, CardText} from 'material-ui/Card';

const styles = {
  postDesciption:{
    paddingTop:'0px',
  },
};

class Post extends Component{

  state = {
    postName:'',
    owner: 'Anónimo',
    description: '',
  }

  render(){
   return (
    <a className='postBoxReference' href="facebook.com" target="about_blank">
      <Card className='postBox'>
        <CardTitle title={this.props.postName} subtitle={this.props.owner} />
        <CardText style={styles.postDesciption}>
          {this.props.description}
        </CardText>
      </Card>
    </a>
  )
  }
}

export default Post;
