import React from 'react';

import CustomText from '../components/CustomText';
export default {
  title: 'Texts/CustomTexts',
  component: CustomText,
  argTypes: {
      color: { control: 'color' },
      titleSize: {
      options: ['20', '40','60'],
      control: { type: 'radio' }
      },
         title: {
      options: ['Başlık 1', 'Başlık 2','Başlık 3'],
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <CustomText {...args} />;

export const CustomTexts = Template.bind({});
CustomTexts.args = {
     titleSize: "20",
    title: "Yasin",
    text: "Merhaba Dünya",
    onClick: () => console.log("Click Div"),
    isShowTitle: true,
    color: "red",
    boldTitle: false
};

