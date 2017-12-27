import React , {Component} from 'react';
import FacebookLoginButton from './../FacebookLoginButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';

const customContentStyle = 
window.screen.availWidth > 780 ?
{
    height: '60%',
    width: '50%',
    maxWidth: 'none',
    textAlign: 'center',
    backgroundColor: '#EA80FC',
}
:
{
    height: '60%',
    width: '100%',
    maxWidth: 'none',
    textAlign: 'center',
    backgroundColor: '#EA80FC',
}


export default class LoginModal extends Component {

    state = {
        open : false
    }

    componentWillReceiveProps(nextProps){
        this.setState({open: nextProps.open});
    }

    handleClose = () => {
        this.setState({open: false});
    };
  
    render() {

    return (
      <div>
        <Dialog
          title={
              <div >
                Bienvenido a Badenblog 
                <IconButton touch={true} className="dialog-close-icon" onClick={this.handleClose}>
                    <ActionHighlightOff />
                </IconButton>
              </div>
            }
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <div>
            Ingresa para personalizar Badenblog a tus necesidades
          </div>
          <div>
            <FacebookLoginButton/>
          </div>
        </Dialog>
      </div>
    );
  }
}