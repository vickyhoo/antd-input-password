import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
// import styled from 'styled-components';
import Suffix from './Suffix';

class PasswordInput extends PureComponent {
  state = {
    visible: false,
    value: this.props.value || ''
  };

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      // controlled
      this.setState({ value: nextProps.value });
    }
  }
  

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChange = e => {
    if (!('value' in this.props)) {
      // uncontrolled
      const value = e.target.value;
      this.setState({ value });
    }
    if (this.props.onChange) {
      // emit onchange 
      this.props.onChange(e);
    }
  }

  renderSuffix = () => {
    if (!this.state.value) {
      // hide icon while value is empty
      return null;
    }
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
    return (
      <Input
        {...otherProps}
        type={type}
        suffix={this.renderSuffix()}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

PasswordInput.propTypes = {
  tooltip: PropTypes.object,
  value: PropTypes.string
};

export default PasswordInput;
