'use client';

export default function ThemeToggle() {
  return (
    <div className="fixed top-4 right-4">
      <button 
        className="btn btn-circle btn-ghost" 
        onClick={() => {
          const html = document.documentElement;
          const currentTheme = html.getAttribute('data-theme');
          html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </button>
    </div>
  );
}
