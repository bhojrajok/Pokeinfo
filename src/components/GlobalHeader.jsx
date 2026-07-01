import React from 'react';

export default function GlobalHeader({ currentMenu, setCurrentMenu, myTeamCount, isDarkMode, setIsDarkMode, cls }) {
  return (
    <nav className={`${cls.surface} ${cls.border} border-b px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 z-50 shadow-sm transition-colors duration-200`}>
      
      {/* --- BRANDING / LOGO CONTAINER --- */}
      <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setCurrentMenu('home')}>
        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center border border-white/20 shadow-inner shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
        </div>
        {/* Replace the text below with <img src={yourLogoPng} className="h-6 w-auto" /> if you are using your file directly! */}
        <h1 className={`text-sm font-black tracking-widest ${cls.text}`}>POKEINFO</h1>
      </div>

      {/* --- RESPONSIVE BUTTON LINKS BAR --- */}
      {/* Uses flex-wrap to stack links cleanly if a user opens it on an exceptionally narrow phone viewport */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full md:w-auto">
        <button 
          onClick={() => setCurrentMenu('pokedex')} 
          className={`text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
            currentMenu === 'pokedex' ? 'bg-blue-600 text-white shadow-sm' : `${cls.textMuted} hover:text-blue-500`
          }`}
        >
          Database
        </button>
      
        <button 
          onClick={() => setCurrentMenu('games')} 
          className={`text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
            currentMenu === 'games' ? 'bg-amber-600 text-white shadow-sm' : `${cls.textMuted} hover:text-amber-500`
          }`}
        >
          Games
        </button>
        
        <button 
          onClick={() => setCurrentMenu('movies')} 
          className={`text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
            currentMenu === 'movies' ? 'bg-fuchsia-600 text-white shadow-sm' : `${cls.textMuted} hover:text-fuchsia-500`
          }`}
        >
          Movies
        </button>
        
        {/* Divider bar hides organically on tiny stacked layouts to preserve visual layout weight */}
        <div className={`hidden sm:block w-[1px] h-5 ${cls.border} border-l mx-1`}></div>
        
        <button 
          onClick={() => setIsDarkMode(prev => !prev)} 
          className={`px-3 py-1.5 rounded-xl border ${cls.border} ${cls.surfaceMuted} hover:border-blue-500 transition-all text-[10px] font-black flex items-center justify-center tracking-wider shrink-0 ml-1 sm:ml-0`}
        >
          {isDarkMode ? '☀️ LIGHT' : '🌙 DARK'}
        </button>
      </div>

    </nav>
  );
}