import './ThemeToggle.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="mono theme-toggle__label">
        {theme === 'dark' ? 'DARK' : 'LIGHT'}
      </span>
      <span className="theme-toggle__icon">
        {theme === 'dark' ? '◐' : '○'}
      </span>
    </button>
  );
}
