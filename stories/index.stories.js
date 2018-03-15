import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import InputPassword from '../lib/main';

const Container = styled.div`
  width: 200px;
  padding: 30px;
`;

storiesOf('Antd-Input-Password', module)
  .add('Basic', () => (
    <Container>
      <InputPassword />
    </Container>
  ))
  .add('With Tooltip', () => (
    <Container>
      <InputPassword tooltip={{ show: '显示密码', hide: '隐藏密码' }} />
    </Container>
  ));
