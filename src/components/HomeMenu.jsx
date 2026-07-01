import React from 'react';

export default function HomeMenu({ setCurrentMenu, cls }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto space-y-8 animate-fadeIn w-full">
      <div className="space-y-4">
        <span className="text-xs font-mono tracking-widest text-blue-500 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block font-bold">CORE CENTRAL INTERFACE</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">PREMIUM POKÉMON DASHBOARD</h1>
        <p className={`${cls.textMuted} text-sm max-w-xl mx-auto leading-relaxed font-medium`}>A clean, comprehensive data management portal indexing official data metrics, historical releases, movie indexes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full pt-4">
        <div onClick={() => setCurrentMenu('pokedex')} className={`group p-6 ${cls.surface} border ${cls.border} ${cls.cardHover} rounded-2xl text-left cursor-pointer transition-all duration-200 shadow-sm`}>
          <div className="text-2xl mb-3">🌐</div>
          <h3 className="text-xs font-black uppercase tracking-wider group-hover:text-blue-500 transition-colors">Specimen Index</h3>
          <p className={`text-[11px] ${cls.textMuted} mt-1.5 leading-normal font-medium`}>Explore over 1000 items loaded directly via regional live-feeds.</p>
        </div>
        <div onClick={() => setCurrentMenu('games')} className={`group p-6 ${cls.surface} border ${cls.border} ${cls.cardHover} rounded-2xl text-left cursor-pointer transition-all duration-200 shadow-sm`}>
          <div className="text-2xl mb-3">🎮</div>
          <h3 className="text-xs font-black uppercase tracking-wider group-hover:text-amber-500 transition-colors">Best Games</h3>
          <p className={`text-[11px] ${cls.textMuted} mt-1.5 leading-normal font-medium`}>Review global game cartridge deployments filtered by unit sales metrics.</p>
        </div>
        <div onClick={() => setCurrentMenu('movies')} className={`group p-6 ${cls.surface} border ${cls.border} ${cls.cardHover} rounded-2xl text-left cursor-pointer transition-all duration-200 shadow-sm`}>
          <div className="text-2xl mb-3">🎬</div>
          <h3 className="text-xs font-black uppercase tracking-wider group-hover:text-fuchsia-500 transition-colors">Media Archive</h3>
          <p className={`text-[11px] ${cls.textMuted} mt-1.5 leading-normal font-medium`}>Browse cinematic feature film box-office and audience rating reviews.</p>
        </div>
      </div>
    </div>
  );
}