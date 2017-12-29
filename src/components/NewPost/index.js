import React , { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AgeInputRange from './../AgeInputRange';
import 'react-input-range/lib/css/index.css';

class NewPost extends Component {
    constructor(){
        super();
        this.state = {
            value: { min: 2, max: 10 },
        };
    }
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
                            </CardText>
                            <CardActions className="alignRight">
                                <FlatButton label="Publicar" />
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NewPost;