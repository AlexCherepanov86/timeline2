import ReactDOM from 'react-dom'
import React from 'react';


class Modal extends React.Component{
    componentDidMount() {
        /* create a div to attach to body
        this is so that you have somewhere to house the component to render to
        this is so that the modal is not rendered to the same root div as the parent */
        this.modalTarget =  document.createElement('div')

        /*add the regular modal class
        because the component is rendered to a different root, this means you won't have issues with z-index */
        this.modalTarget.className = 'modal-react';

        /* add div to body manually, very un-react like
        this is so that the renderDOM can replace the div with the component */
        document.body.appendChild(this.modalTarget)
        this._render() //adds div to modal
    }

    componentWillUpdate() {
        //re-render component
        this._render();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget) //removes component
        document.body.removeChild(this.modalTarget) //removes root div that housed the component
    }



    _render() {
        /* adds to virtual dom
        props.childern is whatever html is inside the component (the modal) */
        ReactDOM.render(<div>{this.props.children}</div>, this.modalTarget)
    }

    render() {
        /* returns no render at start (no item)
        a component will still mount it just won't have anything rendered when using null
        this means you can still utilize all the component methods including re-rendering contents
        later you can render in the props.children */
        return null
    }
}


class ModalView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            blur: false,
            name: "John",
            surname: "Connor",
            value: "123"
        }
        this.handleModal = this.handleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModal() {
        this.setState({
            modal: !this.state.modal,
            blur: !this.state.blur
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        //since the modal is a container, onclick must reside in the button
        const blur = this.state.blur ?  'background-blur' : ''
        const modal = this.state.modal ? (<Modal>
            <form onSubmit={this.handleSubmit}>

            <h2>Редактирование</h2>
                <lable>
                    Имя, Фамилия:
            <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Имя"/>
            <input type="text" value={this.state.surname} onChange={this.handleChange} placeholder="Фамилия"/>
                </lable>
            <input type="submit" value="Send" />
            <input type="button" value="cancel" onClick={this.handleModal} />

            </form>

        </Modal>) : null;

        return (
            <div className={blur}>
                {modal}
                <input value="Edit" type="button" style={{color: 'black'}} onClick={this.handleModal}/>
            </div>)
    }
}

ReactDOM.render(<ModalView/>, document.getElementById('root'))

export default ModalView;