import type { Component } from 'solid-js'
import { MasonryGrid } from '../src'

const images = [
  "https://placehold.co/300x200/orange/white?text=1",
  "https://placehold.co/400x400/red/white?text=2",
  "https://placehold.co/250x300/blue/white?text=3",
  "https://placehold.co/350x500/green/white?text=4",
  "https://placehold.co/500x350/yellow/white?text=5",
];

const App: Component = () => {
  return (
    <main style={{ padding: "1rem", margin: "0 auto" }}>
      <MasonryGrid
        items={images}
        gap={16} // optional, default is 12
        breakpoints={[
          { width: 0, columns: 1 },
          { width: 640, columns: 2 },
          { width: 900, columns: 3 },
          { width: 1200, columns: 4 },
        ]} // optional, default breakpoints applied if omitted
        renderItem={(src) => (
          <img
            style={{ width: "100%" }}
            src={src}
            alt="Masonry item"

          />
        )}
      />
    </main>
  )
}

export default App
