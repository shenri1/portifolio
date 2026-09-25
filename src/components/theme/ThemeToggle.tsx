import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const next = !dark
    const root = document.documentElement

    root.classList.add('theme-transitioning')
    setDark(next)
    root.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')

    window.setTimeout(() => root.classList.remove('theme-transitioning'), 650)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Alternar tema">
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
