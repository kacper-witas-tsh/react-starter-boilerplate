import React from "react";

import joinClassNames from "helpers/joinClassNames/joinClassNames";

import "./CodeBlock.css";
import { CodeBlockPropsType } from "./CodeBlock.types";

const CodeBlock: React.FC<CodeBlockPropsType> = ({ className, children, ...rest }) => (
    <p className={joinClassNames('CodeBlock', className)} {...rest}>
        <code>{children}</code>
    </p>
);

export default CodeBlock;