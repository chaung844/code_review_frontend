import { Select } from "antd";


const languageOptions = [
    {
        value: "c++",
        label: "C++",
    }, 
    {
        value: "python",
        label: "Python",
    }, 
    {
        value: "c",
        label: "C",
    }, 
    {
        value: "java",
        label: "Java",
    },
    {
        value: "javascript",
        label: "JavaScript",
    }, 
    {
        value: "typescript",
        label: "TypeScript",
    },
]

function filterOption(input: string, option?: {label: string, value: string }) {
    return (option?.label ?? "").toLowerCase().includes(input.toLowerCase()); 
}

export function LanguageSelection() {
    return (
        <Select 
            className="space-x-4 self-start w-[200px]"
            showSearch
            placeholder="Select a language"
            options={languageOptions}
            filterOption={filterOption}
        />
    )
}