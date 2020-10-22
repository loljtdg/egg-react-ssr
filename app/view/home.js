import React from 'react';
export default class Home extends React.Component {

  static async getInitialProps(ctx) {
    return { text: 'qqq' }
  }

  render() {
    const {
      text
    } = this.props;
    return (
      <div onClick={()=>console.log('onClick')}>
        {text}
      </div>
    );
  }

}