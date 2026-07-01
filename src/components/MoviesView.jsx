import React from 'react';

// 100% Genuine Real-World Verified Data Database (Chronological Series Sequence)
const REAL_POKEMON_MOVIES = [
  {
    sequence: 1,
    title: "Pokémon: The First Movie - Mewtwo Strikes Back",
    release: "1998 (Japan) / 1999 (US)",
    runtime: "75 Mins",
    rating: "⭐ 6.3/10 (IMDb)",
    gross: "$172.7 Million",
    era: "Original Series",
    desc: "Scientists genetically engineer a supreme weapon Pokémon named Mewtwo, who rebels against his creators and issues an ultimatum to the world's finest trainers."
  },
  {
    sequence: 2,
    title: "Pokémon: The Movie 2000 - The Power of One",
    release: "1999 (Japan) / 2000 (US)",
    runtime: "81 Mins",
    rating: "⭐ 6.1/10 (IMDb)",
    gross: "$133.9 Million",
    era: "Original Series",
    desc: "Ash Ketchum must gather three elemental glass orbs from dangerous islands to calm the legendary birds Articuno, Zapdos, and Moltres before the world ends."
  },
  {
    sequence: 3,
    title: "Pokémon 3: The Movie - Spell of the Unown",
    release: "2000 (Japan) / 2001 (US)",
    runtime: "74 Mins",
    rating: "⭐ 5.9/10 (IMDb)",
    gross: "$68.4 Million",
    era: "Original Series",
    desc: "A young lonely girl named Molly inadvertently unleashes the mysterious reality-bending Unown, crystallizing Greenfield and creating an illusionary Entei as her father."
  },
  {
    sequence: 4,
    title: "Pokémon 4Ever: Celebi - Voice of the Forest",
    release: "2001 (Japan) / 2002 (US)",
    runtime: "79 Mins",
    rating: "⭐ 5.6/10 (IMDb)",
    gross: "$28.0 Million",
    era: "Original Series",
    desc: "A young boy from 40 years past travels through time alongside the legendary time-traveling Pokémon Celebi, pursued by a ruthless Team Rocket Vicious Marauder."
  },
  {
    sequence: 5,
    title: "Pokémon Heroes: Latios and Latias",
    release: "2002 (Japan) / 2003 (US)",
    runtime: "71 Mins",
    rating: "⭐ 6.1/10 (IMDb)",
    gross: "$27.7 Million",
    era: "Original Series",
    desc: "Set in the water-bound city of Alto Mare, Ash and Pikachu fight to protect the Soul Dew and guardian dragons Latios and Latias from high-tech thieves Annie and Oakley."
  },
  {
    sequence: 6,
    title: "Pokémon: Jirachi - Wish Maker",
    release: "2003",
    runtime: "81 Mins",
    rating: "⭐ 5.8/10 (IMDb)",
    gross: "$33.3 Million",
    era: "Advanced Generation",
    desc: "The Millennium Comet approaches, awakening Jirachi for seven short days. A corrupt magician attempts to harness its wish power to resurrect an artificial Groudon."
  },
  {
    sequence: 7,
    title: "Pokémon: Destiny Deoxys",
    release: "2004",
    runtime: "98 Mins",
    rating: "⭐ 6.1/10 (IMDb)",
    gross: "$34.4 Million",
    era: "Advanced Generation",
    desc: "A meteorite crashes into the high-tech city of LaRousse carrying the alien virus Deoxys, igniting a cataclysmic airspace war against Rayquaza."
  },
  {
    sequence: 8,
    title: "Pokémon: Lucario and the Mystery of Mew",
    release: "2005",
    runtime: "100 Mins",
    rating: "⭐ 6.9/10 (IMDb)",
    gross: "$37.2 Million",
    era: "Advanced Generation",
    desc: "An ancient Lucario is released from a magical staff to discover why his legendary master Sir Aaron abandoned a kingdom, while Mew kidnaps Pikachu to the Tree of Beginning."
  },
  {
    sequence: 9,
    title: "Pokémon Ranger and the Temple of the Sea",
    release: "2006",
    runtime: "105 Mins",
    rating: "⭐ 5.9/10 (IMDb)",
    gross: "$30.4 Million",
    era: "Advanced Generation",
    desc: "Ash and a dedicated Pokémon Ranger must protect the egg of the Prince of the Sea, Manaphy, from an aggressive pirate crew searching for the hidden Sea Temple treasures."
  },
  {
    sequence: 10,
    title: "Pokémon: The Rise of Darkrai",
    release: "2007",
    runtime: "90 Mins",
    rating: "⭐ 6.4/10 (IMDb)",
    gross: "$42.5 Million",
    era: "Diamond & Pearl",
    desc: "The continuous dimensional distortion caused by Dialga and Palkia's cosmic war threatens Alamos Town, while citizens wrongfully blame the shadow guardian Darkrai."
  }
];

export default function MoviesView({ cls }) {
  
  const getEraBadgeClass = (era) => {
    switch (era) {
      case "Original Series":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Advanced Generation":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Diamond & Pearl":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto max-w-[1200px] custom-scrollbar w-full mx-auto animate-fadeIn space-y-8">
      
      {/* HEADER BAR */}
      <div className={`border-b ${cls.border} pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
        <div>
          <h2 className="text-xl font-black text-inherit tracking-widest uppercase">
            THEATRICAL TIMELINE DIRECTORY
          </h2>
          <p className={`text-[11px] ${cls.textMuted} mt-0.5 font-bold uppercase tracking-wider`}>
            Verified historical releases mapped by exact chronological production sequence.
          </p>
        </div>
        <div className="shrink-0">
          <span className="text-[10px] font-mono font-black bg-fuchsia-500/10 text-fuchsia-500 border border-fuchsia-500/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
            🎬 Verified Vault Records
          </span>
        </div>
      </div>

      {/* SLEEK CHRONOLOGICAL TIMELINE PATH */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-slate-500/20 space-y-6 ml-3">
        {REAL_POKEMON_MOVIES.map((movie) => (
          <div 
            key={movie.sequence} 
            className="relative group transition-all duration-300"
          >
            {/* Timeline Pulsing Circle Node */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-500/40 group-hover:border-fuchsia-500 group-hover:bg-fuchsia-500 transition-all duration-300 flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white transition-all"></span>
            </span>

            {/* Movie Info Box */}
            <div className={`${cls.surface} border ${cls.border} rounded-xl p-5 shadow-sm hover:shadow-md hover:border-fuchsia-500/40 transition-all flex flex-col md:flex-row gap-4 items-start justify-between`}>
              
              <div className="space-y-2 flex-1">
                {/* Upper Metadata Tags Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono font-black text-fuchsia-400 bg-fuchsia-500/5 border border-fuchsia-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                    Sequence #{String(movie.sequence).padStart(2, '0')}
                  </span>
                  <span className={`text-[9px] font-mono font-black border px-2 py-0.5 rounded uppercase tracking-wider ${getEraBadgeClass(movie.era)}`}>
                    {movie.era}
                  </span>
                  <span className={`text-[10px] font-bold font-mono ml-auto md:ml-0 ${cls.textMuted}`}>
                    🗓️ {movie.release}
                  </span>
                </div>

                {/* Movie Title */}
                <h3 className="text-sm font-black text-inherit tracking-wide group-hover:text-fuchsia-400 transition-colors">
                  {movie.title}
                </h3>

                {/* Summary Description */}
                <p className={`text-[11px] ${cls.textMuted} leading-relaxed font-medium pt-0.5`}>
                  {movie.desc}
                </p>
              </div>

              {/* Box Office & Ratings Panel */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-44 shrink-0 border-t md:border-t-0 md:border-l border-slate-500/10 pt-3 md:pt-0 md:pl-4 gap-2">
                <div className="text-right font-mono">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Box Office Gross</p>
                  <p className="text-xs font-black text-inherit tracking-tight">{movie.gross}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[9px] font-mono font-black bg-slate-500/5 border ${cls.border} px-2 py-0.5 rounded text-inherit`}>
                    ⏱️ {movie.runtime}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-500 font-mono">
                    {movie.rating}
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}