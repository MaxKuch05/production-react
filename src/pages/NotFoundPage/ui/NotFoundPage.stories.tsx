import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});

Light.decorators = [ThemeDecorator(Theme.LIGHT)];
