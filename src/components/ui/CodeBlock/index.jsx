import React from 'react';
import './Code.css';

import Body from './Body/Body.jsx';
import Header from './Header/Header.jsx';
import Doc from './Doc/Doc.jsx';

class Code extends React.Component {
  static Header = Header;
  static Body = Body;
  static Doc = Doc;

  generateClasses = props => {
    const classes = ['code'];
    classes.push(props.light ? `code--light` : 'code--dark');
    classes.push(`${props.theme}--${props.light ? 'light' : 'dark'}`);
    classes.push(`${props.shadow ? 'code--shadow' : ''}`);
    classes.push(`${props.rounded ? 'rounded' : ''}`);
    return classes.join(' ');
  };

  render() {
    const { children } = this.props;
    return (
      <div className={this.generateClasses(this.props)}>
        {React.Children.map(children, child => {
          if (!child.type) return child;

          if (child.type.displayName === 'Header') {
            return React.cloneElement(child);
          }
          if (child.type.displayName === 'Doc') {
            return React.cloneElement(child);
          }

          if (child.type.displayName === 'Body') {
            return React.cloneElement(child, {
              theme: this.props.theme,
              language: this.props.language
            });
          }
          if (child.type.displayName === 'Divider') {
            return React.cloneElement(child);
          }

          if (child.type.displayName === 'Split') {
            return React.cloneElement(child, {
              theme: this.props.theme,
              language: this.props.language
            });
          }

          return child;
        })}
      </div>
    );
  }
}


export default Code;
