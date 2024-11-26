import { useTheme } from '@/context/theme-provider'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto flex h-16 items-center justify-between px-4'>
                <Link to={'/'}>
                    <img src={theme === "dark" ? '/logo.png' : "/logo2.png"}
                        alt='Climate Logo'
                        className='h-12'
                    />
                </Link>
                <div>
                    {/* Search */}
                    {/* Theme toggle */}
                    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>toggle</div>
                </div>
            </div>
        </header>
    )
}

export default Header