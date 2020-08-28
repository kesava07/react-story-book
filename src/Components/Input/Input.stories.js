import React from 'react';
import Input from './Input';

export default {
    title: "Forms/Input",
    component: Input
}
export const MyInput = () => <Input />

export const SmallInput = () => <Input size="small" placeholder="Small Input" />
export const MediumInput = () => <Input size="medium" placeholder="Medium Input" />
export const LargeInput = () => <Input size="large" placeholder="Large Input" />