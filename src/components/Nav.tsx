import Link from "next/link";

const Nav = () => {
  return (
    <nav className='flex-between h-20'>
      <h3>BytePrep AI</h3>
      <ul className="flex-center gap-8 lg:gap-12">
        <li>
          <Link href="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link href="/qna" className="nav-link">Question Bank</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav