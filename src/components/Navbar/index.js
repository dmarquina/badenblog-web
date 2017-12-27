import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';  
import LoginModal from './../LoginModal';
import { Link } from 'react-router-dom';  
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
	 
	state = {
		openLoginModal: false,
	};

	handleOpenLoginModal = () => {
		this.setState({openLoginModal: true});
	};

	handleCloseLoginModal = () => {
		this.setState({openLoginModal: false});
	};

	render (){
		const { title } = this.props

		return (
		  <AppBar style={styles.navBar}
		  	title={title} titleStyle={styles.title}
		  	showMenuIconButton={false}
		    iconElementRight={
		    	<div style={styles.actionGroup} >
						<Link to={'/newPost'}>
			    		<FlatButton label="Publicar Juego" secondary={true} style={styles.buttonSpace}/>
						</Link>
			    	<FlatButton label="Ingresar" primary={true} style={styles.buttonSpace} onClick={this.handleOpenLoginModal}/>
			    	<RaisedButton label="Registrarse" primary={true}  style={styles.buttonSpace}/>
					<LoginModal open={this.state.openLoginModal}/>
		    	</div>
		    	}
		  />
		)
	}
}

export default Navbar;
