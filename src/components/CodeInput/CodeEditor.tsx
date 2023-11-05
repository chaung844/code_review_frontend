import { useState } from "react";
import "codemirror/lib/codemirror.css";
import ReactCodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";



interface CodeEditorProps {
    data: string;
}

export function CodeEditor({ data }: CodeEditorProps) {
    const [ code, setCode ] = useState("");

    function handleChange(e: ReactCodeMirrorProps["value"]) {
        setCode(e || "");
    }

    return (
        <>
            <ReactCodeMirror 
                value={data}
                height="550px"
                theme={vscodeDark}
                onChange={handleChange}
                className="w-full pr-4"
            />
        </>
    )
}