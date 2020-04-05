import './Header.css';

import * as React from 'react';

export class Header extends React.Component {
  public render() {
    return (
      <div className="header-container">
        <div className="header-logo">
          <img className="user-image" height={84/2} width={286/2} src={require("src/assets/images/stackline-logo.png")}/>
        </div>
      </div>
    );
  }
}
