import React , { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AgeInputRange from './../AgeInputRange';
import MaterialsChip from './../MaterialsChip';
import 'react-input-range/lib/css/index.css';

const styles = {
    cardButtons:{
      textAlign:'right',
    },
  
  
  };
class NewPost extends Component {
    
        render(){
        return (
            <div className="newPostPanel" >
                <Row center="md lg">
                    <Col xs={12} md={6} lg={6}>
                        <Card className="alignLeft">
                            <CardTitle title="Nueva actividad" />
                            <CardText >
                                <TextField
                                    floatingLabelText="Título"
                                    floatingLabelFixed={true}
                                    fullWidth={true}
                                    /><br />
                                <TextField
                                    floatingLabelText="Descripción"
                                    floatingLabelFixed={true}
                                    multiLine={true}
                                    fullWidth={true}
                                    rows={2}
                                    rowsMax={3}
                                    /><br />
                                <AgeInputRange />
                                <MaterialsChip />
                            <CardActions className="alignRight">
                                <FlatButton label="Publicar" />
                            </CardActions>
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NewPost;