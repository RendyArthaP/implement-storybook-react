import React from 'react';
import { action } from '@storybook/addon-actions'
import Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => 
  <Button 
    {...args}
    onClick={action('clicked')}
  >
    {args.label}
  </Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Test Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Test',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Test Button',
};

