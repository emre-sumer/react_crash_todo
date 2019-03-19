import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px dotted #ccc',
      textDecoration: this.props.todo.completed?'line-through':'none',

    }
  }



  render() {
    const {id,title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
        
        <p>
        <input 
        type="checkbox" 
        onChange={this.props.markComplete.bind(this, id)} 
        defaultChecked={this.props.todo.completed?true:false} 
        />{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
        
        </p>
      </div>
    )
  }
}

//PropTypes

TodoItem.propTypes ={
  todo:PropTypes.object.isRequired,
  markComplete:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired,
}

const btnStyle={
  background:'#f00',
  color:'#fff',
  broder:'none',
  padding:'5px 9px',
  borderRadius : '50%',
  float: 'right'
}

export default TodoItem
