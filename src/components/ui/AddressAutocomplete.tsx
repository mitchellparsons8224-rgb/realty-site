"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSelect?: (val: string) => void;
  placeholder?: string;
  inputClassName?: string;
}

function debounce<T extends (...args: Parameters<T>) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = "Enter an address...",
  inputClassName = "",
}: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = useCallback(
    debounce(async (query: string) => {
      if (query.trim().length < 3) { setSuggestions([]); setOpen(false); return; }
      try {
        // Append Orange County context to bias results, then filter server-side
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", Orange County, CA")}&countrycodes=us&limit=12&addressdetails=1`,
          { headers: { "Accept-Language": "en-US,en" } }
        );
        const data: Array<{ display_name: string; address?: { county?: string; state?: string } }> = await res.json();
        const results = data
          .filter((d) =>
            d.address?.county === "Orange County" &&
            d.address?.state === "California"
          )
          .slice(0, 6)
          .map((d) => d.display_name);
        setSuggestions(results);
        setOpen(results.length > 0);
      } catch {
        setSuggestions([]);
        setOpen(false);
      }
    }, 320),
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    onChange(val);
    fetchSuggestions(val);
  }

  function handleSelect(suggestion: string) {
    onChange(suggestion);
    onSelect?.(suggestion);
    setSuggestions([]);
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative w-full h-full">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        autoComplete="off"
        className={inputClassName}
      />

      {open && suggestions.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-40 bg-white border border-stone-100 shadow-xl overflow-hidden"
          style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.13)" }}
        >
          {suggestions.map((s, i) => (
            <li key={i}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(s)}
                className="w-full text-left px-5 py-3 font-sans text-sm text-charcoal hover:bg-stone-50 border-b border-stone-100 last:border-0 transition-colors duration-150 leading-snug"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
