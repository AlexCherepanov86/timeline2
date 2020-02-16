import ReactDOM from 'react-dom'
import React from 'react';
import TimeComponent from "./TimeKeeper";
import ModalForm from "./Form";
import connect from 'react-redux/es/connect/connect';


class Modal extends React.Component{
    render() {
        /* returns no render at start (no item)
        a component will still mount it just won't have anything rendered when using null
        this means you can still utilize all the component methods including re-rendering contents
        later you can render in the props.children */
        return (
          <div className='modal-react'>
            <div>{this.props.children}</div>
          </div>
        )
    }
}



class ModalView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            blur: false
        }
        this.handleModal = this.handleModal.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModal() {
        this.setState({
            modal: !this.state.modal,
            blur: !this.state.blur
        });
      this.props.dispatch({ type: 'MODAL_BLUR_TOGGLE' })
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    //
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        //since the modal is a container, onclick must reside in the button
        const modal = this.state.modal ? (<Modal>
            <ModalForm/>
            <TimeComponent/>
            <input type="button" value="cancel" onClick={this.handleModal} />
        </Modal>) : null;

        return (
            <div>
                {modal}
                <input value="Edit" type="button" style={{color: 'black'}} onClick={this.handleModal}/>
            </div>)
    }
}

function mapStateToProps(state) {
  return {}
}

const connectedModalView = connect(mapStateToProps)(ModalView);
export default connectedModalView;
