import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});

Light.decorators = [ThemeDecorator(Theme.LIGHT)];
