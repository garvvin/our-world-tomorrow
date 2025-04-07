import Link from 'next/link'

export default function NavbarBtn({ href, children }) {
    return (
        <Link href={href}>
            <span className="block text-center px-6 h-full flex items-center hover:bg-zinc-100 bg-zinc-50">
                {children}
            </span>
        </Link>
    )
}