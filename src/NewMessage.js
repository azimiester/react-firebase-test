import React, {Component} from 'react';
import './NewMessage.css';

class NewMessage extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({message: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.handleNewMessage(this.state.message);
    this.setState({message: ''});
  }
  render(){
    return (
      <form
    className="NewMessage"
    onSubmit={this.handleSubmit}>
    <label>
      <textarea
        className="NewMessage--content"
        type="text"
        placeholder="What's on your mind?"
        value={this.state.message}
        onChange={this.handleChange}
      />
      <input
        className="NewMessage--submit block"
        type="submit"
        value="Post"
        disabled={this.state.message === ''}
      />
    </label>
    </form>
    );
  }
}

export default NewMessage;
