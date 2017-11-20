import React , { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
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
            <div>
                <Card>
                    <CardTitle title="Nueva actividad"/>
                    <CardText>
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
                    <CardActions>
                        <FlatButton label="Publicar" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default NewPost;