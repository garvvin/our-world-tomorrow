import Link from "next/link";

export default function NavbarBtn({ href, children }) {
  return (
    <Link href={href}>
      <span className="duration-300 block text-center px-6 min-h-15 lg:h-full flex items-center hover:transform-[translateY(-3px)] hover:bg-zinc-100 bg-zinc-50 lg:bg-white spectral-regular">
        {children}
      </span>
    </Link>
  );
}
