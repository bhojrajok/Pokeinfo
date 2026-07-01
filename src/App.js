import React, { useState, useEffect, useMemo, useRef } from 'react';
import GlobalHeader from './components/GlobalHeader';
import HomeMenu from './components/HomeMenu';
import PokedexView from './components/PokedexView';
import GamesView from './components/GamesView';
import MoviesView from './components/MoviesView';

const POKEMON_TYPES = [
  { name: 'all', icon: '🌐', bg: 'bg-slate-800 border-slate-700 text-slate-100', accent: '#3b82f6' },
  { name: 'fire', icon: '🔥', bg: 'bg-rose-600/10 border-rose-500/25 text-rose-400', accent: '#ef4444' },
  { name: 'water', icon: '💧', bg: 'bg-sky-600/10 border-sky-500/25 text-sky-400', accent: '#0ea5e9' },
  { name: 'grass', icon: '🍃', bg: 'bg-emerald-600/10 border-emerald-500/25 text-emerald-400', accent: '#10b981' },
  { name: 'electric', icon: '⚡', bg: 'bg-amber-500/10 border-amber-500/25 text-amber-400', accent: '#f59e0b' },
  { name: 'normal', icon: '⚪', bg: 'bg-slate-600/10 border-slate-500/25 text-slate-400', accent: '#71717a' },
  { name: 'psychic', icon: '🔮', bg: 'bg-fuchsia-600/10 border-fuchsia-500/25 text-fuchsia-400', accent: '#d946ef' },
  { name: 'fighting', icon: '🥊', bg: 'bg-orange-600/10 border-orange-500/25 text-orange-400', accent: '#f97316' },
  { name: 'flying', icon: '🦅', bg: 'bg-indigo-600/10 border-indigo-500/25 text-indigo-400', accent: '#6366f1' },
  { name: 'poison', icon: '🧪', bg: 'bg-violet-600/10 border-violet-500/25 text-violet-400', accent: '#8b5cf6' },
  { name: 'ground', icon: '⛰️', bg: 'bg-yellow-700/10 border-yellow-600/25 text-yellow-500', accent: '#eab308' },
  { name: 'rock', icon: '🪨', bg: 'bg-stone-600/10 border-stone-500/25 text-stone-400', accent: '#78716c' },
  { name: 'bug', icon: '🪲', bg: 'bg-lime-600/10 border-lime-500/25 text-lime-400', accent: '#84cc16' },
  { name: 'ghost', icon: '👻', bg: 'bg-purple-600/10 border-purple-500/25 text-purple-400', accent: '#a855f7' },
  { name: 'steel', icon: '⚙️', bg: 'bg-zinc-500/10 border-zinc-400/25 text-zinc-400', accent: '#71717a' },
  { name: 'ice', icon: '❄️', bg: 'bg-cyan-600/10 border-cyan-500/25 text-cyan-400', accent: '#06b6d4' },
  { name: 'dragon', icon: '🐲', bg: 'bg-blue-700/10 border-blue-600/25 text-blue-400', accent: '#3b82f6' },
  { name: 'dark', icon: '🌙', bg: 'bg-neutral-800 border-neutral-700 text-neutral-400', accent: '#171717' },
  { name: 'fairy', icon: '🧚', bg: 'bg-pink-600/10 border-pink-500/25 text-pink-400', accent: '#ec4899' }
];

const GENERATIONS = [
  { name: 'all', label: 'All Generations (1-9)', range: [1, 1025] },
  { name: 'gen1', label: 'Gen 1 (Kanto)', range: [1, 151] },
  { name: 'gen2', label: 'Gen 2 (Johto)', range: [152, 251] },
  { name: 'gen3', label: 'Gen 3 (Hoenn)', range: [252, 386] },
  { name: 'gen4', label: 'Gen 4 (Sinnoh)', range: [387, 493] },
  { name: 'gen5', label: 'Gen 5 (Unova)', range: [494, 649] },
  { name: 'gen6', label: 'Gen 6 (Kalos)', range: [650, 721] },
  { name: 'gen7', label: 'Gen 7 (Alola)', range: [722, 809] },
  { name: 'gen8', label: 'Gen 8 (Galar)', range: [810, 905] },
  { name: 'gen9', label: 'Gen 9 (Paldea)', range: [906, 1025] }
];

const RANKED_GAMES = [
  { title: 'Pokémon Red and Blue', players: '31.3 Million Sold', year: 1996, platform: 'Game Boy', score: '9.8/10' },
  { title: 'Pokémon Scarlet and Violet', players: '28.2 Million Sold', year: 2022, platform: 'Nintendo Switch', score: '9.1/10' },
  { title: 'Pokémon Sword and Shield', players: '27.1 Million Sold', year: 2019, platform: 'Nintendo Switch', score: '9.4/10' },
  { title: 'Pokémon Gold and Silver', players: '23.7 Million Sold', year: 1999, platform: 'Game Boy Color', score: '9.7/10' },
  { title: 'Pokémon Diamond and Pearl', players: '17.6 Million Sold', year: 2006, platform: 'Nintendo DS', score: '9.3/10' },
  { title: 'Pokémon X and Y', players: '16.7 Million Sold', year: 2013, platform: 'Nintendo 3DS', score: '9.0/10' },
  { title: 'Pokémon Ruby and Sapphire', players: '16.2 Million Sold', year: 2002, platform: 'Game Boy Advance', score: '9.5/10' }
];

const CINEMATIC_MOVIES = [
  { title: 'Pokémon: Detective Pikachu', gross: '$433.0M Box Office', release: '2019', rating: '⭐️ 91% Fan Score', runtime: '104 min', desc: 'A live-action sci-fi thriller following an intelligent talking Pikachu tracking down a missing elite private investigator.' },
  { title: 'Pokémon: The First Movie', gross: '$163.6M Box Office', release: '1998', rating: '⭐️ 96% Fan Score', runtime: '75 min', desc: 'Mewtwo strikes back against humanity, assembling a genetic fortress island with an army of cloned battle pocket monsters.' },
  { title: 'Pokémon The Movie 2000', gross: '$133.9M Box Office', release: '1999', rating: '⭐️ 91% Fan Score', runtime: '81 min', desc: 'A rogue collector attempts to capture the legendary titan birds of fire, ice, and lightning.' }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentMenu, setCurrentMenu] = useState('home');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedGen, setSelectedGen] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(100);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [detailLoading, setDetailLoading] = useState(false);
  const [themeColor, setThemeColor] = useState('#3b82f6');

  const apiCache = useRef({});
  const detailCache = useRef({});

  const cls = useMemo(() => {
    return {
      bg: isDarkMode ? 'bg-[#050505]' : 'bg-[#f8fafc]',
      surface: isDarkMode ? 'bg-[#121212]' : 'bg-white',
      surfaceMuted: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#f1f5f9]',
      border: isDarkMode ? 'border-[#262626]' : 'border-[#e2e8f0]',
      borderActive: isDarkMode ? 'border-[#404040]' : 'border-[#cbd5e1]',
      text: isDarkMode ? 'text-[#f5f5f5]' : 'text-[#0f172a]',
      textMuted: isDarkMode ? 'text-[#a3a3a3]' : 'text-[#64748b]',
      cardHover: isDarkMode ? 'hover:bg-[#1c1c1c] hover:border-[#4c4c4c]' : 'hover:bg-[#f8fafc] hover:border-[#94a3b8]'
    };
  }, [isDarkMode]);

  useEffect(() => {
    if (currentMenu !== 'pokedex') return;
    const fetchWithCache = async () => {
      setLoading(true);
      setVisibleCount(100);
      const cacheKey = `type-${selectedType}`;

      if (apiCache.current[cacheKey]) {
        setPokemonList(apiCache.current[cacheKey]);
        setLoading(false);
        return;
      }

      try {
        let list = [];
        if (selectedType === 'all') {
          const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
          const data = await res.json();
          list = data.results.map(p => {
            const id = p.url.split('/').filter(Boolean).pop();
            return { name: p.name, id: parseInt(id) };
          });
        } else {
          const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          const data = await res.json();
          list = data.pokemon.map(p => {
            const id = p.pokemon.url.split('/').filter(Boolean).pop();
            return { name: p.pokemon.name, id: parseInt(id) };
          });
        }
        apiCache.current[cacheKey] = list;
        setPokemonList(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWithCache();
  }, [selectedType, currentMenu]);

  const processedPokemon = useMemo(() => {
    const activeGen = GENERATIONS.find(g => g.name === selectedGen) || { range: [1, 1025] };
    const query = searchQuery.toLowerCase().trim();

    return pokemonList
      .filter(p => p.id >= activeGen.range[0] && p.id <= activeGen.range[1] && p.name.toLowerCase().includes(query))
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(query);
        const bStarts = b.name.toLowerCase().startsWith(query);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.id - b.id;
      });
  }, [pokemonList, selectedGen, searchQuery]);

  const paginatedPokemon = useMemo(() => processedPokemon.slice(0, visibleCount), [processedPokemon, visibleCount]);


  const parseEvolutionChain = (chainNode) => {
    const parts = [];
    let current = chainNode;
    while (current) {
      const id = current.species.url.split('/').filter(Boolean).pop();
      parts.push({ name: current.species.name, id: parseInt(id) });
      current = current.evolves_to[0];
    }
    return parts;
  };

  const loadPokemonData = async (id, writeToState = true) => {
    if (detailCache.current[id]) {
      if (writeToState) {
        const cached = detailCache.current[id];
        setSelectedPokemon(cached.profile);
        setThemeColor(cached.theme);
        setEvolutionChain(cached.evolution);
      }
      return;
    }

    if (writeToState) {
      setDetailLoading(true);
      setSelectedPokemon(null);
    }

    try {
      const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const profile = await pokeRes.json();
      const primaryTypeName = profile.types[0]?.type.name;
      const typeMetadata = POKEMON_TYPES.find(t => t.name === primaryTypeName);
      const computedTheme = typeMetadata ? typeMetadata.accent : '#3b82f6';


      const speciesRes = await fetch(profile.species.url);
      const speciesData = await speciesRes.json();
      const evoRes = await fetch(speciesData.evolution_chain.url);
      const evoData = await evoRes.json();
      const evolution = parseEvolutionChain(evoData.chain);

      detailCache.current[id] = { profile, theme: computedTheme, evolution };

      if (writeToState) {
        setSelectedPokemon(profile);
        setThemeColor(computedTheme);
        setEvolutionChain(evolution);
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (writeToState) setDetailLoading(false);
    }
  };

  return (
    <div className={`h-screen w-screen ${cls.bg} ${cls.text} font-sans flex flex-col antialiased overflow-hidden transition-colors duration-200`}>
      <GlobalHeader 
        currentMenu={currentMenu} 
        setCurrentMenu={setCurrentMenu} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        cls={cls} 
      />

      <div className="flex-1 overflow-y-auto flex flex-col">
        {currentMenu === 'home' && (
          <HomeMenu setCurrentMenu={setCurrentMenu} cls={cls} />
        )}

        {currentMenu === 'pokedex' && (
          <PokedexView 
            cls={cls}
            loading={loading}
            paginatedPokemon={paginatedPokemon}
            processedPokemon={processedPokemon}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            loadPokemonData={loadPokemonData}
            selectedPokemon={selectedPokemon}
            detailLoading={detailLoading}
            evolutionChain={evolutionChain}
            themeColor={themeColor}
            POKEMON_TYPES={POKEMON_TYPES}
            GENERATIONS={GENERATIONS}
            searchInputProps={{
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              onClear: () => setSearchQuery('')
            }}
            genSelectProps={{
              value: selectedGen,
              onChange: (e) => setSelectedGen(e.target.value)
            }}
            typeFilterProps={{
              value: selectedType,
              onChange: (val) => setSelectedType(val)
            }}
          />
        )}


        {currentMenu === 'games' && (
          <GamesView RANKED_GAMES={RANKED_GAMES} cls={cls} />
        )}

        {currentMenu === 'movies' && (
          <MoviesView CINEMATIC_MOVIES={CINEMATIC_MOVIES} cls={cls} />
        )}
      </div>
    </div>
  );
}