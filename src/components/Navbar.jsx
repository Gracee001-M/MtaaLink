export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">MtaaHub</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}