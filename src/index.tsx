// MasonryGrid.tsx
import { createSignal, createEffect, onCleanup, onMount, For } from "solid-js";
// import type { JSX } from "solid-js"; // correcto para tipos
type MasonryGridProps<T> = {
    items: T[];
    gap?: number;
    breakpoints?: { width: number; columns: number }[];
    renderItem: (item: T) => any;
};

export function MasonryGrid<T>(props: MasonryGridProps<T>) {
    const gap = props.gap ?? 12;
    const breakpoints = props.breakpoints ?? [
        { width: 0, columns: 1 },
        { width: 640, columns: 2 },
        { width: 900, columns: 3 },
        { width: 1200, columns: 4 },
    ];

    let containerRef: HTMLDivElement | undefined;
    const [containerWidth, setContainerWidth] = createSignal(0);
    const [columnsCount, setColumnsCount] = createSignal(4);
    const [columns, setColumns] = createSignal<T[][]>([]);

    onMount(() => {
        const handleResize = () => setContainerWidth(window.innerWidth);
        handleResize(); // inicial
        window.addEventListener("resize", handleResize);

        onCleanup(() => {
            window.removeEventListener("resize", handleResize);
        });
    });


    // onCleanup(() => ro?.disconnect());

    createEffect(() => {
        const w = containerWidth();

        let cols = breakpoints[0]?.columns ?? 1;
        for (const bp of breakpoints) {
            if (w >= bp.width) cols = bp.columns;
        }
        setColumnsCount(cols);
    });

    // Distribuye los ítems en columnas tipo “round robin” (suficiente para elementos complejos)
    const distribute = () => {
        const cols = columnsCount();
        const colsArr: T[][] = Array.from({ length: cols }, () => []);
        props.items.forEach((item, i) => {
            colsArr[i % cols]?.push(item);
        });
        setColumns(colsArr);
    };

    createEffect(distribute);

    return (
        <div ref={containerRef} style={{ width: "100%" }}>
            <div
                style={{
                    display: "flex",
                    gap: `${gap}px`,
                    "align-items": "flex-start",
                }}
            >
                <For each={columns()}>
                    {(col) => (
                        <div style={{ flex: "1 1 0", "display": "flex", "flex-direction": "column", "gap": `${gap}px` }}>
                            <For each={col}>{(item) => props.renderItem(item)}</For>
                        </div>
                    )}
                </For>
            </div>
        </div>
    );
}
