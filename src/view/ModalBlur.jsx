import React from 'react';
import connect from 'react-redux/es/connect/connect';

class ModalBlur extends React.Component{

  render() {
    //since the modal is a container, onclick must reside in the button
    const blur = this.props.visible ?  'background-blur' : 'background-blur-none';
    return (<div className={' ' + blur}>{this.props.children}</div>)
  }
}

function mapStateToProps(state) {
  const { modalBlur } = state;
  return {
    visible: modalBlur.visible,
  }
}

const connectedModalBlur = connect(mapStateToProps)(ModalBlur);

export default connectedModalBlur;
