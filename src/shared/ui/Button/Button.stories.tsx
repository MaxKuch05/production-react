import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.decorators = [ThemeDecorator(Theme.DARK)];
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});

Clear.decorators = [ThemeDecorator(Theme.DARK)];
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});

Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};