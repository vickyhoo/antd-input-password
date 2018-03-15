import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Tooltip } from 'antd';

const defaultTooltip = {
  show: '',
  hide: ''
};

const HoverIcon = styled(Icon)`
  cursor: pointer;

  &:hover {
    color: #40a9ff
  }
`

const Suffix = ({ tooltip = defaultTooltip, visible = false, ...otherProps }) => {
  return (
    <Tooltip title={visible ? tooltip.hide : tooltip.show}>
      {visible ? <HoverIcon type="eye-o" {...otherProps} /> : <HoverIcon type="eye" {...otherProps} />}
    </Tooltip>
  );
};

Suffix.propTypes = {
  tooltip: PropTypes.object,
  visible: PropTypes.bool
};

export default Suffix;