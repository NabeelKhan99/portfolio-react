
import { useState, useEffect } from "react";
import { Check, Moon, Sun, Palette } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "blue" | "purple" | "green" | "system";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  
  // Colors for theme indicators
  const themeColors = {
    light: "bg-[#FFFFFF]",
    dark: "bg-[#09090B]",
    blue: "bg-[#1E3A8A]",
    purple: "bg-[#581C87]",
    green: "bg-[#166534]"
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.className = "dark";
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem("theme", theme);
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.className = systemTheme;
    } else {
      document.documentElement.className = theme;
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 transition-all duration-300 hover:text-primary">
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : (
            <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 glass-card animate-fade-in animate-slide-up">
        <DropdownMenuRadioGroup value={theme} onValueChange={(value: string) => setTheme(value as Theme)}>
          <DropdownMenuRadioItem value="light" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className={cn("h-4 w-4 rounded-full border", themeColors.light)} />
              <span>Light</span>
            </div>
            {theme === "light" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className={cn("h-4 w-4 rounded-full border", themeColors.dark)} />
              <span>Dark</span>
            </div>
            {theme === "dark" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="blue" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className={cn("h-4 w-4 rounded-full border", themeColors.blue)} />
              <span>Blue</span>
            </div>
            {theme === "blue" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="purple" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className={cn("h-4 w-4 rounded-full border", themeColors.purple)} />
              <span>Purple</span>
            </div>
            {theme === "purple" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="green" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className={cn("h-4 w-4 rounded-full border", themeColors.green)} />
              <span>Green</span>
            </div>
            {theme === "green" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}