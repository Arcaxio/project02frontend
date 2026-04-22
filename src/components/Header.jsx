import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { ModeToggle } from './ModeToggle';
import { Menu, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="relative flex h-14 items-center justify-between px-4 mx-auto">
        {/* Mobile Left Menu */}
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem
                className="flex justify-between items-center cursor-pointer"
                onSelect={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <span>Theme</span>

                <div className="flex items-center">
                  {theme === "dark" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Spacer */}
        <div className="hidden md:flex w-10" />

        {/* Logo - Centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Arcaxio</span>
          </a>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <ModeToggle />
        </div>

        {/* Mobile Right Spacer */}
        <div className="w-10 md:hidden" aria-hidden="true" />
      </div>
    </header>
  );
};

export default Header;
