import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Light = Template.bind({});

Light.decorators = [ThemeDecorator(Theme.LIGHT),  StoreDecorator({})];

export const LightAuth = Template.bind({});

LightAuth.decorators = [ThemeDecorator(Theme.LIGHT),  StoreDecorator({ user: { authData: {} } })];
