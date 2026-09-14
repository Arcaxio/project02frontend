import React, { useState } from 'react';

const FAKE_DATA = [
  {
    uuid: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    img_source: 'https://picsum.photos/seed/item1/100/100',
  },
  {
    uuid: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    img_source: 'https://picsum.photos/seed/item2/100/100',
  },
  {
    uuid: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    img_source: 'https://picsum.photos/seed/item3/100/100',
  },
  {
    uuid: 'd4e5f6a7-b89c-0d1e-2f3a-4b5c6d7e8f9a',
    img_source: 'https://picsum.photos/seed/item4/100/100',
  },
];

const Body = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto py-12 px-4 gap-8">
      {/* Giant input field in the center of the screen with borders and rounded-full */}
      <div className="w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search field"
          className="w-full h-16 px-8 text-xl border-2 border-border rounded-full bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
        />
      </div>

      {/* List of items obtained from endpoint */}
      <ul className="w-full flex flex-col gap-3">
        {FAKE_DATA.map((item) => (
          <li
            key={item.uuid}
            className="w-full max-w-[800px] h-[4rem] flex items-center px-4 border rounded-xl bg-card text-card-foreground shadow-sm gap-4 overflow-hidden"
          >
            <img
              src={item.img_source}
              alt={`Item ${item.uuid}`}
              className="w-10 h-10 rounded-full object-cover shrink-0 bg-muted"
            />
            <span className="font-mono text-sm truncate text-muted-foreground">
              {item.uuid}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
