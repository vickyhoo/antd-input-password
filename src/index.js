import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
// import styled from 'styled-components';
import Suffix from './Suffix';

class PasswordInput extends PureComponent {
  state = {
    visible: false
  };

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  renderSuffix = () => {
    return (
      <Suffix
        onClick={this.handleVisible}
        visible={this.state.visible}
        tooltip={this.props.tooltip}
      />
    );
  };

  render() {
    const { tooltip, ...otherProps } = this.props;
    const type = this.state.visible ? 'text' : 'password';
    return <Input type={type} suffix={this.renderSuffix()} {...otherProps} />;
  }
}

PasswordInput.propTypes = {
  tooltip: PropTypes.object
};

export default PasswordInput;
