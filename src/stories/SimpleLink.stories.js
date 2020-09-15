import React from 'react';

import SimpleLink from '../atoms/SimpleLink';

export default {
  title: 'Atoms/SimpleLink',
  component: SimpleLink,
};

const Template = (args) => <SimpleLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Teste',
  link: 'https://www.google.com',
};
