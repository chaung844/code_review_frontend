import { Upload, Button, UploadFile, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";


interface FileUploadProps {
    onFileUpload: (fileContent: string) => void;
}

export function FileUpload( { onFileUpload }: FileUploadProps) {

    function beforeUpload(file: File) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            const result = e.target?.result;
            if (result) {
                if (typeof result === "string") {
                    const content = result;
                    onFileUpload(content);
                } else {
                    const content = new TextDecoder().decode(result as ArrayBuffer);
                }
            } else {
                message.error("Failed");
            }
        })
        reader.readAsText(file);
        return false;
    }
    
    return (
        <Upload 
            beforeUpload={beforeUpload}
            maxCount={1}
            className="self-start"
            accept=".py, .cpp, .java, .c, .js, .ts"
        >
            <Button icon={<UploadOutlined />}>Import file</Button>
        </Upload>
    )
}