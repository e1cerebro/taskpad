import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 offset-m3'>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Create Project</h5>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='title'
                    type='text'
                    className='validate'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='title'>Title</label>
                </div>
              </div>

              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    onChange={this.handleInputChange}
                    id='content'
                    className='materialize-textarea'
                    defaultValue={this.state.title}></textarea>
                  <label htmlFor='content'>Content</label>
                </div>
              </div>

              <button
                className='btn waves-light red'
                type='submit'
                name='action'>
                Create
                <i className='material-icons right'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
