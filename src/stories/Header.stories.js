import React from 'react';

import Header from '../components/Header/Header'

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args}>{args.label}</Header>;

export const Text = Template.bind({});
Text.args = {
  label: 'Test'
};

