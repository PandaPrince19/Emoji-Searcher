import './Header.css';

function Header() {
  return (
    <div className='header'>
      <h1 role='img' aria-label='Panda Emoji'>
        🐼
      </h1>
      <h1>Emoji Search </h1>
      <p>A simple emoji search tool made with ReactJS.</p>
    </div>
  );
}

export default Header;
