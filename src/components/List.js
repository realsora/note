import React from 'react';

class List extends React.Component {

  componentWillMount(){
    this.props.getNotes();
  }

  render(){
    console.log('hi in List');
    return (
      <div className ="list-container">

        List Component
      </div>
      );
  }
}

export default List;