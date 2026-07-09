"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopEmojisAnchor from "./TopEmojisAnchor";

export default function Header() {
  const pathname = usePathname() ?? "/";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header>
      <nav aria-label="Top navigation">
        <div className="header-center">
          <div className="top-emojis-anchor">
            <TopEmojisAnchor />
          </div>
          <ul className="header-menu">
          <li>
            <Link href="/" className={`nav-link nav-home ${isActive("/") ? "active" : ""}`}>
              home
            </Link>
          </li>
          <li>
            <Link href="/published-work" className={`nav-link nav-publications ${isActive("/published-work") ? "active" : ""}`}>publications</Link>
          </li>
          <li>
            <Link href="/features" className={`nav-link nav-projects ${isActive("/features") ? "active" : ""}`}>projects</Link>
          </li>
          <li>
            <Link href="/about" className={`nav-link nav-bio ${isActive("/about") ? "active" : ""}`}>bio</Link>
          </li>
          <li>
            <Link href="/cv" className={`nav-link ${isActive("/cv") ? "active" : ""}`}>cv</Link>
          </li>
          <li>
            <Link href="/updates" className={`nav-link nav-posts ${isActive("/updates") ? "active" : ""}`}>posts</Link>
          </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
