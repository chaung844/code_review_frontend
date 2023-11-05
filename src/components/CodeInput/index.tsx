import { LanguageSelection } from "./LanguageSelection";
import { ShowInstructions } from "./ShowInstructions";
import { FileUpload } from "./FileUpload";
import { CodeEditor } from "./CodeEditor";
import { Button } from "antd";
import { useState } from "react";
import axios from "axios";


interface CodeInputProps {
    onFileSubmit: (submissionStatus: boolean) => void;
    extraClassName: string;
}

export function CodeInput({ onFileSubmit, extraClassName }: CodeInputProps) {
    const [ codeData, setCodeData ] = useState<string>("");
    const [ languageData, setLanguageData ] = useState<string>("c++");

    function handleFileUpload(fileContent: string) {
        setCodeData(fileContent);
    }

    function handleLanguageChange(language: string) {
        setLanguageData(language);
    }

    function handleCodeSubmission() {
        axios.post("http://34.162.155.149:8080/analyze", {
            code: codeData,
            language: languageData
        })
        .then((response) => {
            //replace with proper output
            console.log(response.data.code);
            console.log(response.data.language);
        })
        .catch(error => {
            console.error(error);
        })
        onFileSubmit(true);
    }

    return (
        <div className={`${extraClassName} gap-y-4 flex flex-col items-center`}>
            <ShowInstructions />
            <div className="self-start space-x-5">
                <LanguageSelection onLanguageChange={handleLanguageChange}/>
                <FileUpload onFileUpload={handleFileUpload} />
            </div>
            <CodeEditor data={codeData}/>
            <Button htmlType="submit" className="w-min items-center text-center" onClick={handleCodeSubmission}>Submit</Button>
        </div>
    )
}
