import React from 'react';
export default class ViewOne extends React.Component {

  render() {
    return (
      <div className="viewOne">
          {this.props.text}
      </div>
    );
  }
}
