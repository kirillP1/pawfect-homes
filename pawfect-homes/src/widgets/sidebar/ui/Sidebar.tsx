import { routes } from '@/shared/config'
import Link from 'next/link';


export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Pawfect Homes</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {routes.public.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};