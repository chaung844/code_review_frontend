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

interface LanguageSelectionProps {
    onLanguageChange: (language: string) => void;
}

export function LanguageSelection({ onLanguageChange }: LanguageSelectionProps) {
    return (
        <Select 
            defaultValue="c++"
            className="space-x-4 self-start w-[200px]"
            showSearch
            onChange={value => onLanguageChange(value)}
            options={languageOptions}
            filterOption={filterOption}
        />
    )
}