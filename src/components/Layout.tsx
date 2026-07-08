import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/magazine', label: '📖 매거진' },
  ];

  return (
    <div className="flex flex-col h-screen max-w-[375px] mx-auto bg-grad-main shadow-card relative">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center h-16 bg-cream-main border-t-main border-ink-main shrink-0">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full font-sans text-body ${
                isActive ? 'text-pink-main font-bold' : 'text-text-secondary font-medium'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
