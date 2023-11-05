import { LanguageSelection } from "./LanguageSelection";
import { ShowInstructions } from "./ShowInstructions";
import { FileUpload } from "./FileUpload";
import { CodeEditor } from "./CodeEditor";
import { Button } from "antd";
import { useState } from "react";
import axios from "axios";


export function CodeInput() {
    const [data, setData] = useState<string>("");

    function handleFileUpload(fileContent: string) {
        setData(fileContent);
    }

    function handleCodeSubmission() {
        //replace url later
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            code: data
        })
        .then((response) => {
            console.log(response.data.code);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="col-span-3 gap-y-4 flex flex-col items-center">
            <ShowInstructions />
            <div className="self-start space-x-5">
                <LanguageSelection />
                <FileUpload onFileUpload={handleFileUpload} />
            </div>
            <CodeEditor data={data}/>
            <Button htmlType="submit" className="w-min items-center text-center" onClick={handleCodeSubmission}>Submit</Button>
        </div>
    )
}