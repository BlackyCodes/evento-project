import Link from "next/link";

const routes = [
  { path: "/terms-conditions", name: "Terms & conditions" },
  { path: "/privacy-policy", name: "privacy Policy" },

];



export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-sm text-white/25">
      <small className="text-xs">&copy; 2025 Blackbeard. All rights reserved</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      

      </footer>
  )
}
