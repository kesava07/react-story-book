import React from 'react'
import { addDecorator } from '@storybook/react';
import Center from '../src/Components/Center/Center';
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from '@storybook/addon-knobs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <Center>{story()}</Center>);

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withKnobs);