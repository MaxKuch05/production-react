import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text } from 'shared/ui/Text/Text';


export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Lorem ipsum',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
    theme: 'error',
};

export const OnlyTitleError = Template.bind({});
OnlyTitleError.args = {
    title: 'Lorem ipsum',
    theme: 'error',
};

export const OnlyTextError = Template.bind({});
OnlyTextError.args = {
    title: 'Lorem ipsum',
    text: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus
        possimus quis saepe sunt totam.
    `,
    theme: 'error',
};