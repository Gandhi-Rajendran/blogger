import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Blogger</h1>
      <nav>
        <a href="/blogs">Home</a>
        <a href="/blogs/create">New Blog</a>
      </nav>
    </div>
  );
};

export default Header;
