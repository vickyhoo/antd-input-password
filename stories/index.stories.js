import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import InputPassword from '../lib/main';

const Container = styled.div`
  width: 200px;
  padding: 30px;
`;

const ContainerDecorator = storyFn => <Container>{storyFn()}</Container>;

const stories = storiesOf('Antd-Input-Password', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(ContainerDecorator)
  .add('Basic', () => <InputPassword onChange={action('change')} />)
  .add('With Tooltip', () => (
    <InputPassword onChange={action('change')} tooltip={{ show: 'show', hide: 'hide' }} />
  ))
  .add('Controlled', () => <InputPassword value={text('VALUE', '')} onChange={action('change')} />);
