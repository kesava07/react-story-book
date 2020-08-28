import React from 'react';
import Button from './Button';
import Center from '../Center/Center';
import { text, boolean } from '@storybook/addon-knobs';

export default {
    title: "Forms/Button",
    component: Button,
    decorators: [story => <Center>{story()}</Center>]
}
export const MyButton = () => <Button />
export const Log = () => <Button onClick={() => console.log("Button Clicked")} label="Log" varient="primary" />
export const Primary = () => <Button label="Primary" varient="primary" />
export const Danger = () => <Button label="Danger" varient="danger" />

export const Knobs = () => <Button disabled={boolean("Disabled", false)} label={text("Label", 'Basic text')} />