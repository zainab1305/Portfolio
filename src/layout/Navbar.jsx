import { Menu,X } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
export const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
    const navLinks=[
    { href:"#about",label:"About"},
    { href:"#experience",label:"Experience" },
    {href:"#projects",label:"Projects"},
    {href:"#testimonials",label:"Testimonials"},
];
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    ZJ<span className="text-primary">.</span></a>
                {/*description*/}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link,index)=>(
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground roundedfull hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>
                {/*call to action */}
                <div className="hidden md:block">
                    <Button>Contact Me</Button>
                </div>
                {/*mobile menu button*/}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={()=> {setIsMobileMenuOpen(!isMobileMenuOpen)}}>
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>
            {/* mobile menu */}
            {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
                    {navLinks.map((link,index)=>(
                            <a key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                        ))}
                        <Button>Contact Me</Button>
                </div>
                
            </div>}
        </header>
    )
}
export default Navbar
