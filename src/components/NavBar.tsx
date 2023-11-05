import { useState } from "react"


export function NavBar() {
    return (
        <nav className="h-[46px] w-full flex justify-end bg-black text-white fixed items-center p-7 z-50">
            <a href="#check" className="hover:underline">Vulnerability Check</a>
        </nav>
    )
}