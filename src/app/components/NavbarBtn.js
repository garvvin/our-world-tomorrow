export default function NavbarBtn({ children }) {
    return (
        <a href='#' className="block px-6 h-full flex items-center hover:bg-zinc-100">
            {children}
        </a>
    )
}