export default function Navbar() {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Cloutline AI</h1>
        <a
          href="https://your-gumroad-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
        >
          Upgrade to Pro
        </a>
      </div>
    </nav>
  );
}
