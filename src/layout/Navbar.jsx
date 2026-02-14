import Button from "../components/Button";
export const Navbar = () => {
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
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link,index)=>(
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground roundedfull hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>
                {/*call to action */}
                <div>
                    <Button>Contact Me</Button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
