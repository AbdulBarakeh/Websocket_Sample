import React from 'react';
export default class ViewOne extends React.Component {

  render() {
    return (
      <div className="viewOne">
        <div className="center">
          {this.props.text}
        </div>
      </div>
    );
  }
}
