import React from "react";

import {Button} from "./Button.component";

export default {
    title: "Button",
    component: Button,
};

export const All = () => <>
    <div>
        <Button>Button</Button>
        <Button variant='neutral'>Button</Button>
        <Button variant='highlight'>Button</Button>
    </div>
    <div>
        <Button size='small'>Button</Button>
        <Button size='medium' variant='neutral'>Button</Button>
        <Button size='large' variant='highlight'>Button</Button>
    </div>
    <div>
        <Button isRound size='small'>Button</Button>
        <Button isRound size='medium' variant='neutral'>Button</Button>
        <Button isRound size='large' variant='highlight'>Button</Button>
    </div>
</>;
