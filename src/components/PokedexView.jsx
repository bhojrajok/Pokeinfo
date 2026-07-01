import React, { useEffect, useState } from 'react';

export default function PokedexView({ 
  cls, loading, paginatedPokemon, processedPokemon, visibleCount, setVisibleCount, 
  loadPokemonData, selectedPokemon, detailLoading, 
  evolutionChain, themeColor, searchInputProps, genSelectProps, typeFilterProps, POKEMON_TYPES, GENERATIONS
}) {
  
  const [isStriking, setIsStriking] = useState(false);

  // Reset the strike animation state cleanly whenever a new entry loads
  useEffect(() => {
    setIsStriking(false);
  }, [selectedPokemon?.id]);

  // COMBINED ARTWORK INTERACTION ENGINE (The only place sound plays now)
  const handleArtworkInteraction = () => {
    if (!selectedPokemon?.cries?.latest || isStriking) return;

    // 1. Play Cry Sound explicitly on picture click
    const audio = new Audio(selectedPokemon.cries.latest);
    audio.volume = 0.4;
    audio.play().catch(err => console.log("Audio playback blocked:", err));

    // 2. Fire Attack Animation Loop
    setIsStriking(true);
  };

  return (
    <div className="flex-1 flex flex-col w-full  lg:h-full lg:overflow-hidden">
      
      {/* --- SEARCH & FILTER STRIP --- */}
      <header className={`${cls.surfaceMuted} border-b ${cls.border} p-4 shrink-0 transition-colors duration-200`}>
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">
            <div className="relative w-full md:w-80">
              <input 
                type="text"
                placeholder="Search by name..."
                {...searchInputProps}
                className={`w-full ${cls.surface} border ${cls.border} rounded-xl pl-4 pr-10 py-2.5 sm:py-2 text-xs font-bold focus:outline-none focus:border-blue-500 text-inherit transition-all placeholder-slate-400`}
              />
              {searchInputProps.value && (
                <button onClick={searchInputProps.onClear} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500/20 text-inherit rounded-full flex items-center justify-center text-[10px] font-bold">✕</button>
              )}
            </div>
            <select
              {...genSelectProps}
              className={`w-full sm:w-44 ${cls.surface} border ${cls.border} rounded-xl px-3 py-2.5 sm:py-2 text-xs font-bold focus:outline-none focus:border-blue-500 text-inherit cursor-pointer`}
            >
              {GENERATIONS.map(g => <option key={g.name} value={g.name}>{g.label}</option>)}
            </select>
          </div>
        </div>
        
        {/* Type Filter Buttons Matrix */}
        <div className="max-w-[1800px] mx-auto mt-3 flex flex-wrap sm:grid sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-1 border-t border-slate-500/10 pt-2.5">
          {POKEMON_TYPES.map((type) => (
            <button
              key={type.name}
              onClick={() => typeFilterProps.onChange(type.name)}
              className={`flex items-center justify-center gap-1.5 py-1.5 sm:py-1 px-2.5 sm:px-2 rounded-lg text-[10px] font-black uppercase border transition-all truncate ${
                typeFilterProps.value === type.name ? 'bg-blue-600 border-transparent text-white' : `${cls.surface} ${cls.border} ${cls.textMuted} hover:border-blue-500/60`
              }`}
            >
              <span>{type.icon}</span> <span>{type.name}</span>
            </button>
          ))}
        </div>
      </header>

      {/* --- MAIN WORKSPACE LAYOUT --- */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1800px] w-full mx-auto p-3 sm:p-4 gap-4 lg:overflow-hidden min-h-0">
        
        {/* --- MAIN POKEMON GRID LIST VIEW --- */}
        <main className={`${cls.surface} border ${cls.border} rounded-2xl p-4 lg:overflow-y-auto custom-scrollbar flex-1 flex flex-col justify-between transition-colors duration-200 order-2 lg:order-1 h-auto lg:h-full`}>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {Array.from({ length: 15 }).map((_, idx) => (
                <div key={idx} className={`${cls.surfaceMuted} border ${cls.border} rounded-xl p-4 h-[120px] animate-pulse`}></div>
              ))}
            </div>
          ) : paginatedPokemon.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
              <span className="text-2xl mb-1 opacity-20">📦</span>
              <p className={`${cls.textMuted} font-bold text-[10px] uppercase tracking-wider`}>No matching results cataloged</p>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className={`text-[10px] font-mono font-black tracking-widest uppercase ${cls.text}`}>
                    SHOWING {paginatedPokemon.length} OF {processedPokemon.length} AVAILABLE SPECIMENS
                  </span>
                </div>
                <div className={`text-[9px] font-mono font-bold uppercase self-start sm:self-auto ${cls.textMuted} bg-slate-500/5 px-2.5 py-1 rounded-md border ${cls.border}`}>
                  FILTER: {typeFilterProps.value}
                </div>
              </div>

              {/* Grid Layout Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
                {paginatedPokemon.map((poke, index) => (
                  <div
                    key={poke.id}
                    onClick={() => loadPokemonData(poke.id, true)}
                    onMouseEnter={() => loadPokemonData(poke.id, false)}
                    style={{ animationDelay: `${(index % 15) * 8}ms` }}
                    className={`animate-cardReveal group ${cls.surfaceMuted} border ${cls.border} ${cls.cardHover} rounded-xl p-4 flex flex-col items-center justify-center relative cursor-pointer shadow-sm transition-all`}
                  >
                    <span className={`absolute top-2 right-2.5 font-mono text-[9px] font-black ${cls.textMuted}`}>#{String(poke.id).padStart(4, '0')}</span>
                    <div className={`w-16 h-16 ${cls.surface} rounded-xl p-1.5 flex items-center justify-center border ${cls.border} group-hover:scale-105 transition-transform`}>
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`} alt={poke.name} className="w-full h-full object-contain filter drop-shadow z-10" loading="lazy" />
                    </div>
                    <h3 className={`text-xs font-black ${cls.text} capitalize text-center mt-2.5 break-words w-full tracking-wide px-1`}>
                      {poke.name.replace('-', ' ')}
                    </h3>
                  </div>
                ))}
              </div>

              {processedPokemon.length > visibleCount && (
                <div className="mt-6 text-center">
                  <button onClick={() => setVisibleCount(prev => prev + 100)} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-[10px] tracking-widest px-6 py-3 rounded-xl uppercase transition-all shadow-sm">Load Next 100 Entries</button>
                </div>
              )}
            </div>
          )}
        </main>

        {/* --- SIDEBAR INSPECTOR PANEL --- */}
        <section className={`w-full lg:w-[380px] ${cls.surface} border ${cls.border} rounded-2xl p-4 flex flex-col lg:overflow-y-auto custom-scrollbar h-auto lg:h-full shrink-0 shadow-lg transition-colors duration-200 order-1 lg:order-2`}>
          {detailLoading ? (
            <div className="flex-1 flex items-center justify-center py-12"><div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>
          ) : selectedPokemon ? (
            // CHANGED HERE: Removed 'justify-between' and added 'space-y-5' so items group naturally together without expanding out on tall screens
            <div className="flex flex-col space-y-5">
              
              {/* Profile Card Header Zone */}
              <div className="text-center relative mt-2 lg:mt-4">
                <span className={`text-[9px] font-mono font-black ${cls.text} bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block`}>DATA PROFILE #{selectedPokemon.id}</span>
                <h2 className="text-xl font-black text-inherit capitalize mt-2 tracking-wide break-words px-2">
                  {selectedPokemon.name.replace('-', ' ')}
                </h2>
                
                {/* Portrait Avatar Container */}
                <div 
                  onClick={handleArtworkInteraction}
                  onAnimationEnd={() => setIsStriking(false)}
                  title="Click Pokémon portrait to make it attack and roar!"
                  className="w-36 h-36 mx-auto mt-2 rounded-full flex items-center justify-center relative overflow-visible cursor-pointer group/art select-none"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-500/5 group-hover/art:bg-blue-500/10 border border-dashed border-slate-500/10 group-hover/art:scale-110 transition-all duration-300"></div>
                  
                  <img 
                    className={`w-28 h-28 object-contain filter drop-shadow-xl select-none pointer-events-none transition-transform group-hover/art:scale-105 ${
                      isStriking ? 'animate-attackStrike' : 'animate-float'
                    }`} 
                    src={selectedPokemon.sprites?.other?.['official-artwork']?.front_default || selectedPokemon.sprites?.front_default} 
                    alt={selectedPokemon.name} 
                  />
                </div>
              </div>

              {/* Evolution Chain Section */}
              <div className="space-y-1.5">
                <h4 className={`text-[9px] font-black tracking-wider uppercase ${cls.textMuted}`}>Evolution Tree</h4>
                <div className={`${cls.surfaceMuted} p-2 rounded-xl border ${cls.border} flex flex-wrap items-center justify-center gap-2`}>
                  {evolutionChain.map((node, index) => (
                    <React.Fragment key={node.id}>
                      {index > 0 && <span className={`${cls.textMuted} text-xs font-bold mx-0.5`}>➔</span>}
                      <button 
                        onClick={() => loadPokemonData(node.id, true)} 
                        title={node.name.toUpperCase()} 
                        className={`flex flex-col items-center p-1 rounded-lg transition-all hover:scale-105 ${selectedPokemon.id === node.id ? 'bg-blue-500/10 border border-blue-500/20' : 'border border-transparent'}`}
                      >
                        <div className={`w-10 h-10 ${cls.surface} rounded border ${cls.border} flex items-center justify-center`}>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${node.id}.png`} alt={node.name} className="w-full h-full object-contain" loading="lazy" />
                        </div>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Stats Layout Breakdown */}
              <div className="space-y-2">
                <h4 className={`text-[9px] font-black uppercase ${cls.textMuted}`}>Performance Breakdown</h4>
                <div className={`${cls.surfaceMuted} p-3 rounded-xl border ${cls.border} space-y-2`}>
                  {selectedPokemon.stats.map((s, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-[9px] font-mono font-bold">
                        <span className={`capitalize ${cls.text}`}>{s.stat.name.replace('-', ' ')}</span>
                        <span className={cls.text}>{s.base_stat}</span>
                      </div>
                      <div className={`w-full h-1 ${cls.surface} rounded-full overflow-hidden border ${cls.border}`}>
                        <div 
                          className="h-full transition-all rounded-full" 
                          style={{ width: `${Math.min((s.base_stat / 255) * 100, 100)}%`, backgroundColor: themeColor || '#3b82f6' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className={`flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed ${cls.border} rounded-xl ${cls.surfaceMuted} py-12 my-auto`}>
              <span className="text-2xl mb-1 opacity-20">📊</span>
              <h3 className={`text-[10px] font-black tracking-widest ${cls.textMuted} uppercase`}>Select Entry</h3>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}