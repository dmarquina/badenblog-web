import React,{ Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col} from 'react-flexbox-grid';
import {purple300,grey500} from 'material-ui/styles/colors';

const styles = {
    searcherBackground:{
        margin: '0 auto 20px auto',
        padding: '30px 0 40px 0',
        textAlign: 'center',
        backgroundColor: purple300,
    },
    searcherBox: {
        width:'75%',
        display: 'inline-block',
        padding: '15px 35px 40px',
    },
    searcherBoxTittle:{
        color: grey500,
        marginTop: '10px',
        marginBottom: '30px'
    },
    buttonSpace:{
        marginLeft: '10px',
    },
};

class Searcher extends Component{
    
    state={
        searchField:""
    }

    onClick(){
        this.props.onClick(this.state.searchField);
    }

    updateSearchValue(e){
        this.setState({ searchField : e.target.value })
    }

    enterKey(e){
        if(e.keyCode === 13 && e.shiftKey === false) {
            this.onClick();
        }
    }

	render (){
		return (
            <div style={styles.searcherBackground}>
                <Paper style={styles.searcherBox} zDepth={2} children={
                    <div>
                        <h1 style={styles.searcherBoxTittle}>Descubre nuevas actividades</h1>
                            <Row >
                                <Col xs={12} md={9} lg={9}>
                                <TextField  hintText="Actividad, material, categoria o palabra clave" fullWidth={true} 
                                    value={this.state.searchField} onKeyDown={this.enterKey.bind(this)} 
                                    onChange={this.updateSearchValue.bind(this)}/>
                                </Col>
                                <Col xs={12} md={3} lg={3}>
                                <RaisedButton label="Buscar" primary={true} fullWidth={true} style={styles.buttonSpace}
                                    onClick={this.onClick.bind(this)} />
                                </Col>
                            </Row>
                    </div>
                } />
            </div>
		)
	}
}

export default Searcher;
