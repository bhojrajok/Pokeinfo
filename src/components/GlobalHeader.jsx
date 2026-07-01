import React from 'react';

export default function GlobalHeader({ currentMenu, setCurrentMenu, myTeamCount, isDarkMode, setIsDarkMode, cls }) {
  return (
    <nav className={`${cls.surface} ${cls.border} border-b px-6 py-4 flex items-center justify-between shrink-0 z-50 shadow-sm transition-colors duration-200`}>
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentMenu('home')}>
        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center border border-white/20 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
        </div>
        <h1 className={`text-sm font-black tracking-widest ${cls.text}`}>POKEINFO</h1>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <button onClick={() => setCurrentMenu('pokedex')} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${currentMenu === 'pokedex' ? 'bg-blue-600 text-white shadow-sm' : `${cls.textMuted} hover:text-blue-500`}`}>Database</button>
      
        <button onClick={() => setCurrentMenu('games')} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${currentMenu === 'games' ? 'bg-amber-600 text-white shadow-sm' : `${cls.textMuted} hover:text-amber-500`}`}>Games</button>
        <button onClick={() => setCurrentMenu('movies')} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${currentMenu === 'movies' ? 'bg-fuchsia-600 text-white shadow-sm' : `${cls.textMuted} hover:text-fuchsia-500`}`}>Movies</button>
        
        <div className={`w-[1px] h-5 ${cls.border} border-l mx-1 sm:mx-2`}></div>
        
        <button 
          onClick={() => setIsDarkMode(prev => !prev)} 
          className={`px-3 py-1.5 rounded-xl border ${cls.border} ${cls.surfaceMuted} hover:border-blue-500 transition-all text-[10px] font-black flex items-center justify-center tracking-wider`}
        >
          {isDarkMode ? '☀️ LIGHT' : '🌙 DARK'}
        </button>
      </div>
    </nav>
  );
}