import { cn } from "@/lib/utlis";

const navItems = [
    { name: "Home", href: "#hero"},
    { name: "About", href: "#about"},
    { name: "skills", href: "#skills"},
    { name: "projects", href: "#projects"},
    { name: "Contact", href: "#contact"},  
];



export const Navbar = () => {
    return<nav className={cn()} ></nav>
}