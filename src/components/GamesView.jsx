import React, { useState } from 'react';

// 100% Unique, Completely Unbundled Individual Mainline Entries
const COMPLETE_POKEMON_GAMES = [
  // --- GENERATION I ---
  { id: "red-green", title: "Pokémon Red & Green", platform: "Game Boy", year: "1996", score: "8.9", units: "31.3M", generation: "Gen I", region: "Kanto", type: "Base Dual", description: "The historic foundations of the entire global franchise released in Japan. Introduced the original 151 monsters and core catching loops." },
  { id: "blue", title: "Pokémon Blue", platform: "Game Boy", year: "1996", score: "8.9", units: "Included in Red/Blue", generation: "Gen I", region: "Kanto", type: "Third Version", description: "An updated standalone version released in Japan with polished graphics and re-scripted code, which later became the base for international releases." },
  { id: "yellow", title: "Pokémon Yellow: Special Pikachu Edition", platform: "Game Boy", year: "1998", score: "8.5", units: "14.6M", generation: "Gen I", region: "Kanto", type: "Special Edition", description: "Altered the campaign rules to mirror the anime. Pikachu follows you on the map overworld and starters are given based on milestones." },
  
  // --- GENERATION II ---
  { id: "gold-silver", title: "Pokémon Gold & Silver", platform: "Game Boy Color", year: "1999", score: "9.2", units: "23.1M", generation: "Gen II", region: "Johto", type: "Base Dual", description: "Introduced 100 new species, real-time day/night clocks, item holding mechanics, and a surprise massive post-game Kanto revisit map." },
  { id: "crystal", title: "Pokémon Crystal", platform: "Game Boy Color", year: "2000", score: "9.0", units: "6.3M", generation: "Gen II", region: "Johto", type: "Special Edition", description: "The definitive Gen II entry. Introduced animated sprite graphics during battle encounters and added the choice to select a female protagonist." },
  
  // --- GENERATION III ---
  { id: "ruby-sapphire", title: "Pokémon Ruby & Sapphire", platform: "Game Boy Advance", year: "2002", score: "8.6", units: "16.2M", generation: "Gen III", region: "Hoenn", type: "Base Dual", description: "Overhauled battle engine variables by introducing innate Pokemon Abilities, unique Natures, and tactical Double Battle formats." },
  { id: "firered-leafgreen", title: "Pokémon FireRed & LeafGreen", platform: "Game Boy Advance", year: "2004", score: "8.1", units: "12.0M", generation: "Gen III Remake", region: "Kanto", type: "Remake", description: "A total graphical remake of the original Gen I titles. Added the Sevii Islands post-game territory and wireless trading peripheral support." },
  { id: "emerald", title: "Pokémon Emerald", platform: "Game Boy Advance", year: "2004", score: "8.8", units: "7.0M", generation: "Gen III", region: "Hoenn", type: "Special Edition", description: "Unifies the Ruby and Sapphire storylines around Rayquaza. Added the legendary, ultra-challenging endgame Battle Frontier zone." },
  
  // --- GENERATION IV ---
  { id: "diamond-pearl", title: "Pokémon Diamond & Pearl", platform: "Nintendo DS", year: "2006", score: "8.5", units: "17.6M", generation: "Gen IV", region: "Sinnoh", type: "Base Dual", description: "Brought global online multiplayer elements via Nintendo Wi-Fi connection and permanently split moves into physical or special categories." },
  { id: "platinum", title: "Pokémon Platinum", platform: "Nintendo DS", year: "2008", score: "8.9", units: "7.6M", generation: "Gen IV", region: "Sinnoh", type: "Special Edition", description: "Expanded the Sinnoh Pokedex, optimized system game engine processing speeds, and introduced the gravity-defying Distortion World." },
  { id: "heartgold-soulsilver", title: "Pokémon HeartGold & SoulSilver", platform: "Nintendo DS", year: "2009", score: "9.3", units: "12.7M", generation: "Gen IV Remake", region: "Johto", type: "Remake", description: "Masterpiece remakes of Gold/Silver. Allowed any companion to follow behind you and packaged a physical Pokéwalker pedometer step accessory." },
  
  // --- GENERATION V ---
  { id: "black-white", title: "Pokémon Black & White", platform: "Nintendo DS", year: "2010", score: "9.0", units: "15.6M", generation: "Gen V", region: "Unova", type: "Base Dual", description: "A completely mature, narrative-heavy entry set in an urban region. Locked the roster strictly to 156 all-new species until defeating the game." },
  { id: "black2-white2", title: "Pokémon Black 2 & White 2", platform: "Nintendo DS", year: "2012", score: "8.8", units: "8.5M", generation: "Gen V", region: "Unova", type: "Sequel", description: "The series' first direct chronological narrative sequel. Features new map routes, fresh gym leaders, and the massive Pokémon World Tournament." },
  
  // --- GENERATION VI ---
  { id: "x-y", title: "Pokémon X & Y", platform: "Nintendo 3DS", year: "2013", score: "8.7", units: "16.7M", generation: "Gen VI", region: "Kalos", type: "Base Dual", description: "Advanced the visual engine into fully-polygonal 3D environments. Unveiled the strategic Mega Evolution mechanics and the dynamic Fairy typing." },
  { id: "omega-alpha", title: "Pokémon Omega Ruby & Alpha Sapphire", platform: "Nintendo 3DS", year: "2014", score: "8.3", units: "14.5M", generation: "Gen VI Remake", region: "Hoenn", type: "Remake", description: "Remade Hoenn in full 3D layout parameters. Added the soaring mechanics and an entirely fresh post-game 'Delta Episode' lore arc." },
  
  // --- GENERATION VII ---
  { id: "sun-moon", title: "Pokémon Sun & Moon", platform: "Nintendo 3DS", year: "2016", score: "8.1", units: "16.3M", generation: "Gen VII", region: "Alola", type: "Base Dual", description: "Ditched traditional badges for Island Trials. Brought over signature Alolan regional adaptation variants and powerful raw Z-Move strikes." },
  { id: "ultra-sun-moon", title: "Pokémon Ultra Sun & Ultra Moon", platform: "Nintendo 3DS", year: "2017", score: "8.4", units: "9.1M", generation: "Gen VII", region: "Alola", type: "Special Edition", description: "An alternate timeline retelling featuring an expanded roster, a trip through Ultra Wormholes, and a climatic showdown against Necrozma." },
  { id: "lets-go", title: "Pokémon Let's Go Pikachu & Eevee", platform: "Nintendo Switch", year: "2018", score: "7.9", units: "15.1M", generation: "Gen VII Remake", region: "Kanto", type: "Remake", description: "An accessible, casual-focused hybrid Kanto remake that completely replaced random battles with overworld visible creature spawner points." },
  
  // --- GENERATION VIII ---
  { id: "sword-shield", title: "Pokémon Sword & Shield", platform: "Nintendo Switch", year: "2019", score: "8.0", units: "26.3M", generation: "Gen VIII", region: "Galar", type: "Base Dual", description: "The debut of mainline titles on a full home console. Brought giant Dynamax stadium showdowns and wide-open online cooperative Wild Areas." },
  { id: "brilliant-shining", title: "Pokémon Brilliant Diamond & Shining Pearl", platform: "Nintendo Switch", year: "2021", score: "7.3", units: "15.0M", generation: "Gen VIII Remake", region: "Sinnoh", type: "Remake", description: "A faithful, localized chibi-styled graphical reimagining of original Sinnoh, featuring an extensively remade Underground digging zone layout." },
  { id: "legends-arceus", title: "Pokémon Legends: Arceus", platform: "Nintendo Switch", year: "2022", score: "8.9", units: "14.8M", generation: "Gen VIII", region: "Hisui (Sinnoh)", type: "Origin RPG", description: "Completely revolutionized historical core rules with semi-open action gameplay. Catching takes place seamlessly directly in real-time space." },
  
  // --- GENERATION IX ---
  { id: "scarlet-violet", title: "Pokémon Scarlet & Violet", platform: "Nintendo Switch", year: "2022", score: "7.5", units: "25.3M", generation: "Gen IX", region: "Paldea", type: "Base Dual", description: "The very first seamless open-world structure layout. Introduced Terastallization gemstone battles alongside a multi-path quest line." }
];

export default function GamesView({ cls }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Filter computation logic
  const filteredGames = COMPLETE_POKEMON_GAMES.filter(game => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'REMAKES') return game.type === 'Remake';
    if (activeFilter === 'SWITCH') return game.platform === 'Nintendo Switch';
    if (activeFilter === 'CLASSIC') return game.platform === 'Game Boy' || game.platform === 'Game Boy Color';
    return true;
  });

  const getPlatformStyle = (plat) => {
    if (plat.includes("Switch")) return "text-red-400 bg-red-500/10 border-red-500/20";
    if (plat.includes("3DS")) return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
    if (plat.includes("DS")) return "text-sky-400 bg-sky-500/10 border-sky-500/20";
    if (plat.includes("Advance")) return "text-purple-400 bg-purple-500/10 border-purple-500/20";
    return "text-amber-400 bg-amber-500/10 border-amber-500/20"; // Original GB/GBC era
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case "Base Dual": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Remake": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Special Edition": return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto max-w-[1400px] w-full mx-auto animate-fadeIn space-y-6">
      
      {/* HEADER ROW WITH COUNTER */}
      <div className={`border-b ${cls.border} pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
        <div>
          <h2 className="text-xl font-black text-inherit tracking-widest uppercase">
            CARTRIDGE REGISTRY & TIMELINE
          </h2>
          <p className={`text-[11px] ${cls.textMuted} mt-0.5 font-bold uppercase tracking-wider`}>
            Every unique individual mainline installment separated, indexed and mapped chronologically.
          </p>
        </div>
        <div className="shrink-0">
          <span className="text-[10px] font-mono font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
            👾 Total Entries Loaded: {COMPLETE_POKEMON_GAMES.length} Versions
          </span>
        </div>
      </div>

      {/* FILTER CONTROL TAB BAR */}
      <div className="flex flex-wrap gap-2 border-b border-slate-500/5 pb-3">
        {['ALL', 'CLASSIC', 'REMAKES', 'SWITCH'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-3 py-1.5 text-[10px] font-mono font-black rounded-lg border transition-all uppercase tracking-wider ${
              activeFilter === tab
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                : `bg-slate-500/5 border-transparent text-slate-400 hover:border-slate-500/20`
            }`}
          >
            {tab} List
          </button>
        ))}
      </div>

      {/* COMPACT INDIVIDUALIZED DATA GRID */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4">
        {filteredGames.map((game, index) => (
          <div 
            key={game.id} 
            className={`${cls.surface} border ${cls.border} rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/50 transition-all duration-200`}
          >
            {/* Minimal backdrop tracking sequence index label */}
            <span className="absolute -bottom-4 -right-2 font-mono text-5xl font-black opacity-[0.03] select-none pointer-events-none text-inherit">
              #{String(index + 1).padStart(2, '0')}
            </span>

            <div className="space-y-2.5">
              {/* Dynamic Metadata Badge Strip */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`text-[8px] font-mono font-black px-1.5 py-0.5 rounded border uppercase tracking-widest ${getPlatformStyle(game.platform)}`}>
                  {game.platform}
                </span>
                <span className={`text-[8px] font-mono font-black px-1.5 py-0.5 rounded border uppercase tracking-wider ${getTypeStyle(game.type)}`}>
                  {game.type}
                </span>
                <span className="text-[9px] font-mono font-bold ml-auto text-slate-400">
                  {game.generation}
                </span>
              </div>

              {/* Unique Title */}
              <div>
                <h3 className="text-sm font-black text-inherit tracking-wide group-hover:text-blue-400 transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center gap-3 text-[9px] font-mono font-bold text-slate-400 mt-0.5">
                  <span>📅 Released: <strong className="text-inherit">{game.year}</strong></span>
                  <span>📍 Region: <strong className="text-inherit">{game.region}</strong></span>
                </div>
              </div>

              {/* Context Summary Description */}
              <p className={`text-[11px] ${cls.textMuted} leading-relaxed font-medium pt-0.5`}>
                {game.description}
              </p>
            </div>

            {/* Core Sales / Score Footer Panel */}
            <div className="mt-4 pt-2.5 border-t border-slate-500/10 flex items-center justify-between text-[10px] font-mono">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wide">Global Volume</span>
                <span className="font-black text-inherit">{game.units}</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wide block">Rating</span>
                <span className="font-black text-blue-400">⭐ {game.score}/10</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}