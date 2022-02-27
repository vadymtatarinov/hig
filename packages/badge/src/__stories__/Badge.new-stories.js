/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { Alert16 } from "@hig/icons";

import Badge from "../index";
import Readme from "../../README.md";
import { COLORS, SIZES, VARIANTS } from "../constants";

const Alert12 = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRrule="evenodd" clipRrule="evenodd" d="M0.0346521 10.7702L5.81556 0.115137C5.86177 0.0429584 5.93711 0 6.01748 0C6.09786 0 6.17319 0.0429584 6.2194 0.115137L11.9704 10.7702C12.0601 10.9261 11.933 11 11.761 11H0.244051C0.0346521 11 -0.0550904 10.9261 0.0346521 10.7702ZM5.75 8H6.25C6.39 8 6.5 7.89691 6.5 7.7732L7 4.46048C7 4.3299 6.47 4 6.33 4H5.67C5.53 4 5 4.3299 5 4.46048L5.5 7.7732C5.5 7.89691 5.61 8 5.75 8ZM6 9C5.44772 9 5 9.22386 5 9.5C5 9.77614 5.44772 10 6 10C6.55228 10 7 9.77614 7 9.5C7 9.22386 6.55228 9 6 9Z" fill="black"/>
  </svg>
);

export default {
  title: "Beta/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: [
        COLORS.green,
        COLORS.orange,
        COLORS.yellow,
        COLORS.red,
        COLORS.custom,
      ],
      control: { type: "select" },
    },
    size: {
      options: [SIZES.l, SIZES.s],
      control: { type: "select" },
    },
    variant: {
      options: [VARIANTS.dot, VARIANTS.icon, VARIANTS.text],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args) => {
  const AlertIcon = args?.size === "l" ? Alert16 : Alert12;
  const payload = {
    icon: <AlertIcon />,
    ...args,
  };

  return <Badge {...payload} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Badge",
};
