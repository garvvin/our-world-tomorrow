export default function NavbarBtn({ href, children }) {
    return (
        <a href={href} className="block text-center px-6 h-full flex items-center hover:bg-zinc-100 bg-zinc-50">
            {children}
        </a>
    )
}