import React, { Component, Fragment } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      //   onOpenStart: () => {
      //     console.log("Open Start");
      //   },
      //   onOpenEnd: () => {
      //     console.log("Open End");
      //   },
      //   onCloseStart: () => {
      //     console.log("Close Start");
      //   },
      //   onCloseEnd: () => {
      //     console.log("Close End");
      //   },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
    };
    M.Modal.init(this.Modal, options);
  }

  closeModal = () => {
    let instance = M.Modal.getInstance(this.Modal);
    instance.close();
  };

  render() {
    if (this.props.status) {
      this.closeModal();
    }

    return (
      <Fragment>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id='modal1'
          className='modal '>
          <div className='modal-content'>{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
