import React from "react";

import { Stack } from "./Stack";
import { Card } from "../Card";

export default {
  title: "Stack",
  component: Stack,
};

export const Primary = () => (
  <Stack>
    <Card elevation="high">Card 1</Card>
    <Card elevation="low" color="highlight">
      Highlight card
    </Card>
  </Stack>
);

export const Secondary = () => (
    <Stack direction='horizontal'>
        <Card elevation="high" fullWidth>Card 1</Card>
        <Card elevation="low" color="highlight" fullWidth>
            Highlight card
        </Card>
    </Stack>
);
