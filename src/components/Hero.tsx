import { Button } from "antd";

export function Hero() {
    return (
        <div className="flex flex-col h-[90vh] pt-[46px] text-white bg-black justify-center items-center shadow-lg">
                <h1 className="text-5xl font-extrabold">CodeGenius</h1>
                <Button type="link" href="#check" className="text-lg">Check your code for vulnerabilities</Button>
                <img className="w-[750px]" src="/assets/codegenius.png"/>
        </div>
    )
}