<p align="center">
  <img src="https://solid-masonry-grid.netlify.app/web-app-manifest-512x512.png" alt="Solid Masonry Grid logo" width="100" height="100" />
</p>
<p align="center">
  🌐 <a href="https://solid-masonry-grid.netlify.app" target="_blank">solid-masonry-grid.netlify.app</a>
</p>

# 🧱 Solid Masonry Grid

![npm version](https://img.shields.io/npm/v/solid-masonry-grid?color=blue&style=flat-square)
![npm total downloads](https://img.shields.io/npm/dt/solid-masonry-grid?color=green&style=flat-square)
![license](https://img.shields.io/npm/l/solid-masonry-grid?color=orange&style=flat-square)
![bundle size](https://img.shields.io/bundlephobia/minzip/solid-masonry-grid)

A lightweight, responsive Masonry Grid component for **SolidJS**, built without dependencies — ideal for creating dynamic, Pinterest-style layouts with ease.

---

## ✨ Features

- 📦 **Zero dependencies** – pure SolidJS + inline styles
- ⚡ **Automatic column adjustment** based on breakpoints
- 🎨 **Customizable gaps** between items
- 🧩 **Flexible rendering** through the `renderItem` prop
- 🪶 **Lightweight and fast** (under 2KB gzipped)

---

## 📦 Installation

```bash
npm install solid-masonry-grid
```

or using pnpm:

```bash
pnpm add solid-masonry-grid
```

---

## 🚀 Usage Example

Here’s a minimal example using the `MasonryGrid` component. `gap` and `breakpoints` are optional and fully customizable.

```tsx
import { MasonryGrid } from "solid-masonry-grid";

const images = [
  "https://placehold.co/300x200/orange/white?text=1",
  "https://placehold.co/400x400/red/white?text=2",
  "https://placehold.co/250x300/blue/white?text=3",
  "https://placehold.co/350x500/green/white?text=4",
  "https://placehold.co/500x350/yellow/white?text=5",
];

export default function App() {
  return (
    <main style={{ padding: "1rem" }}>
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
            src={src}
            alt="Masonry item"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        )}
      />
    </main>
  );
}
```

---

## ⚙️ API Reference

### `<MasonryGrid />`

| Prop          | Type                                   | Default                                                                                                           | Description                                             |
| ------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `items`       | `T[]`                                  | **required**                                                                                                      | Array of items to render                                |
| `renderItem`  | `(item: T) => JSX.Element`             | **required**                                                                                                      | Function to render each item                            |
| `gap`         | `number`                               | `12`                                                                                                              | Space (in px) between elements                          |
| `breakpoints` | `{ width: number; columns: number }[]` | `[{ width: 0, columns: 1 }, { width: 640, columns: 2 }, { width: 900, columns: 3 }, { width: 1200, columns: 4 }]` | Defines how many columns are shown at each screen width |

---

## 🧠 How It Works

- The grid listens to window resize events and dynamically adjusts the column count according to the provided `breakpoints`.
- Items are distributed across columns in a **round-robin** fashion — ensuring a balanced layout even for varying item heights.
- The layout is rendered using simple **flexbox columns** — no external CSS grid or masonry library required.

---

## 🧩 Example: Cards Layout

```tsx
import { MasonryGrid } from "solid-masonry-grid";

type Review = {
  id: number;
  img: string;
  title: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    img: "https://placehold.co/300x200/orange/white?text=1",
    title: "Excellent!",
    text: "Loved it so much!",
  },
  {
    id: 2,
    img: "https://placehold.co/400x400/red/white?text=2",
    title: "Pretty good",
    text: "Nice product overall.",
  },
  {
    id: 3,
    img: "https://placehold.co/250x300/blue/white?text=3",
    title: "Could improve",
    text: "Some parts need work.",
  },
  {
    id: 4,
    img: "https://placehold.co/350x500/green/white?text=4",
    title: "Fantastic",
    text: "Would buy again!",
  },
  {
    id: 5,
    img: "https://placehold.co/300x200/yellow/white?text=5",
    title: "Great product",
    text: "Highly recommended.",
  },
  {
    id: 6,
    img: "https://placehold.co/400x400/purple/white?text=6",
    title: "Impressive",
    text: "Excellent quality.",
  },
];

export default function ReviewList() {
  return (
    <MasonryGrid
      items={reviews}
      gap={20}
      renderItem={(review) => (
        <div
          style={{
            background: "#fff",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
            src={review.img}
            alt={review.title}
          />
          <div style={{ padding: "1rem" }}>
            <h3
              style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#333" }}
            >
              {review.title}
            </h3>
            <p style={{ color: "#555" }}>{review.text}</p>
          </div>
        </div>
      )}
    />
  );
}
```

---

## 🧱 Tips

- Use **percentage widths or `width: 100%`** for responsive child elements.
- Consider using `aspect-ratio` or placeholders to avoid layout shift for images with varying heights.
- The grid itself does **not handle image loading delays** — for best results, ensure image dimensions are known or use `loading="lazy"`.
- You can wrap the grid in a container with custom margins or padding for layout spacing.

---

## 🧰 Development

```bash
# Clone the repo
git clone https://github.com/Orestespp/solid-masonry-grid.git
cd solid-masonry-grid

# Install dependencies
npm install

# Build library
npm run build
```

---

## 📜 License

MIT © 2025 [Orestes Pérez](https://github.com/Orestespp)

---

## 💬 Feedback

Have suggestions or issues? Open an [issue](https://github.com/Orestespp/solid-masonry-grid/issues) or submit a pull request.

---

Made with ❤️ using [SolidJS](https://www.solidjs.com/)
