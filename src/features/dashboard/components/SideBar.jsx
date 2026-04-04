'use client';

import Image from 'next/image';
import logo from '@/assets/logo.png';
import ham from '@/assets/ham.svg';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Overview');
  const { data: session } = useSession();
  const userName = session?.user?.name || 'Usuario';
  const userRole = session?.user?.role || 'Administrador';

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const items = ['Overview', 'Clients', 'Projects', 'Team'];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  if (!isOpen) {
    return (
      <aside className="w-15 bg-white shadow-md flex flex-col justify-between border-r border-gray-200 text-slate-900">
        <div className="p-5 flex items-center">
          <button
            className="ml-auto text-2xl text-gray-500"
            onClick={toggleMenu}
          >
            <Image src={ham} alt="Menu" width={20} height={20} />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-60 bg-white shadow-md  flex flex-col justify-between border-r border-gray-200 text-slate-900">
      <div className="p-5 flex items-center space-x-3">
        <Image
          src={logo}
          alt="Logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <h2 className="text-xl font-bold">Client Flow</h2>
        <button className="ml-auto text-2xl text-gray-500" onClick={toggleMenu}>
          <Image src={ham} alt="Menu" width={20} height={20} />
        </button>
      </div>

      <nav className="p-5 flex-1">
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className={`px-2 py-1 rounded-md cursor-pointer ${
                activeItem === item
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleItemClick(item)}
            >
              <a href="#" className="block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="border-t border-gray-200 px-5 py-3">
        <div className="flex items-center space-x-4 px-1">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Imagen usuario"
              width={40}
              height={40}
              className="rounded-full object-fill"
            />
          ) : null}

          <div>
            <p className="font-semibold text-[1em]">{userName}</p>
            <p className="text-sm text-gray-500">{userRole}</p>
          </div>

          <button
            className="ml-auto text-sm text-blue-500"
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            Salir
          </button>
        </div>
      </section>
    </aside>
  );
}
