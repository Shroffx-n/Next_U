import { useLocation } from 'wouter';
import { Home, Scroll, User, Settings } from 'lucide-react';

export const Navigation = () => {
  const [location, setLocation] = useLocation();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Quests', icon: Scroll, path: '/quests' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy-900 border-t border-blue-900">
      <nav className="container mx-auto flex justify-around py-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setLocation(item.path)}
            className={`flex flex-col items-center gap-1 ${
              location === item.path ? 'text-blue-400' : 'text-gray-400'
            } hover:text-blue-300 transition-colors`}
          >
            <item.icon size={24} />
            <span className="text-sm">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};