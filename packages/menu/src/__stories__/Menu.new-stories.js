import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import Menu, { MenuGroup, Option } from "../index";
import Readme from "../../README.md";
import SAMPLE_OPTIONS from "./sampleOptions";

export default {
  title: "Components/Menu",
  component: Menu,
  subcomponents: { Option, MenuGroup },
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Stories />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args, context) => {
  const { density } = context.globals;
  let options;

  switch (context.story) {
    case "With Icons":
      options = SAMPLE_OPTIONS.getIconOptions(density);
      break;
    case "With Avatars":
      options = SAMPLE_OPTIONS.getAvatarOptions(density);
      break;
    case "With Shortcuts":
      options = SAMPLE_OPTIONS.shortcutOptions;
      break;
    default:
      options = SAMPLE_OPTIONS.defaultOptions;
  }

  return <Menu {...args}>{options}</Menu>;
};

export const Default = Template.bind({});

export const WithAvatars = Template.bind({});

export const WithIcons = Template.bind({});

export const WithShortcuts = Template.bind({});
