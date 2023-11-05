import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";


export function ShowInstructions() {
    const [show, setShow] = useState(false);

    function handleShowInstruction() {
        setShow(!show);
    }

    return (
        <>
            <Button 
                type="link" 
                className="self-start"
                icon={show ? <UpOutlined /> : <DownOutlined />}
                onClick={handleShowInstruction}
            >Instructions</Button>
            {show && 
                <div className="self-start pl-10">
                    <li>Select a language</li>
                    <li>Import a file or type code in the code editor below</li>
                    <li>Click submit to check for vulnerabilities</li>
                </div> 
            }
        </>
    )
}