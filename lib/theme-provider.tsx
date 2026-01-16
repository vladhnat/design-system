"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light")
  const [mounted, setMounted] = React.useState(false)

  // Initialize theme from localStorage on mount
  React.useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setTheme(stored)
    }
  }, [storageKey])

  // Resolve theme based on system preference or manual selection
  React.useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    const resolveTheme = () => {
      if (theme === "system") {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const resolved = systemPrefersDark ? "dark" : "light"
        setResolvedTheme(resolved)
        root.classList.remove("light", "dark")
        root.setAttribute("data-theme", resolved)
      } else {
        setResolvedTheme(theme)
        root.classList.remove("light", "dark")
        root.classList.add(theme)
        root.setAttribute("data-theme", theme)
      }
    }

    resolveTheme()

    // Listen for system theme changes when theme is "system"
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => resolveTheme()
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme, mounted])

  const handleSetTheme = React.useCallback((newTheme: Theme) => {
    setTheme(newTheme)
    if (mounted) {
      localStorage.setItem(storageKey, newTheme)
    }
  }, [storageKey, mounted])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: handleSetTheme,
      resolvedTheme,
    }),
    [theme, handleSetTheme, resolvedTheme]
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
