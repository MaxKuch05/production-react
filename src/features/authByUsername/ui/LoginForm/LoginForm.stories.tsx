import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '4123' },
})];

export const WithError = Template.bind({});

WithError.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '4123', error: 'ERROR' },
})];

export const Loading = Template.bind({});

Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
