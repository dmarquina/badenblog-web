import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';  

import PropTypes from 'prop-types';

	const styles = {
	  navBar: {
	  	padding: '0 6% 0 5%',
	  },
	  title:{
	  	flex: 'none',
	  },
	  actionGroup:{
	  	marginTop: '2%',
	  },
	  buttonSpace:{
	  	marginLeft: '10px',
	  },
	};

class Navbar extends Component{
 	static propTypes = {
 		title: PropTypes.string.isRequired,
 	}

	render (){
		const { title } = this.props

		return (
		  <AppBar style={styles.navBar}
		  	title={title} titleStyle={styles.title}
		  	showMenuIconButton={false}
		    iconElementRight={
		    	<div style={styles.actionGroup} >
			    	<FlatButton label="Publicar Juego" secondary={true} style={styles.buttonSpace}/>
			    	<FlatButton label="Ingresar" primary={true} style={styles.buttonSpace}/>
			    	<RaisedButton label="Registrarse" primary={true}  style={styles.buttonSpace}/>
		    	</div>
		    	}
		  />
		)
	}
}

export default Navbar;
