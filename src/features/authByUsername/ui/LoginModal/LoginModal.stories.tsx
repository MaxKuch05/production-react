import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
};

Primary.decorators = [StoreDecorator({})];