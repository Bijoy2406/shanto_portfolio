'use client';

import { ReactNode } from 'react';

interface OrderedItem {
  id: string;
  order: number;
}

interface Props<T extends OrderedItem> {
  items: T[];
  onChange: (items: T[]) => void;
  makeEmpty: () => T;
  renderItem: (
    item: T,
    update: (patch: Partial<T>) => void,
    index: number,
  ) => ReactNode;
  itemLabel?: string;
  addLabel?: string;
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function makeId() {
  return uid();
}

export default function CollectionManager<T extends OrderedItem>({
  items,
  onChange,
  makeEmpty,
  renderItem,
  itemLabel = 'item',
  addLabel,
}: Props<T>) {
  const sorted = [...items].sort((a, b) => a.order - b.order);

  function update(id: string, patch: Partial<T>) {
    onChange(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  }

  function remove(id: string) {
    if (!confirm(`Delete this ${itemLabel}?`)) return;
    onChange(items.filter((it) => it.id !== id));
  }

  function move(id: string, direction: -1 | 1) {
    const arr = [...sorted];
    const idx = arr.findIndex((it) => it.id === id);
    const target = idx + direction;
    if (target < 0 || target >= arr.length) return;
    const tmp = arr[idx];
    arr[idx] = arr[target];
    arr[target] = tmp;
    const renumbered = arr.map((it, i) => ({ ...it, order: i }));
    onChange(renumbered);
  }

  function add() {
    const fresh = { ...makeEmpty(), order: items.length };
    onChange([...items, fresh]);
  }

  return (
    <div className="flex flex-col gap-3">
      {sorted.length === 0 && (
        <p className="text-sm text-on-surface-variant italic">
          No {itemLabel}s yet.
        </p>
      )}
      {sorted.map((item, index) => (
        <div
          key={item.id}
          className="border border-outline-variant rounded-lg p-4 bg-surface-container-lowest"
        >
          <div className="flex items-center justify-between mb-3 gap-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
              {itemLabel} #{index + 1}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => move(item.id, -1)}
                disabled={index === 0}
                title="Move up"
                className="px-2 py-1 text-xs rounded border border-outline-variant bg-surface-container-low hover:bg-surface-container disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => move(item.id, 1)}
                disabled={index === sorted.length - 1}
                title="Move down"
                className="px-2 py-1 text-xs rounded border border-outline-variant bg-surface-container-low hover:bg-surface-container disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => remove(item.id)}
                className="px-2 py-1 text-xs rounded border border-red-300 text-red-700 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
          {renderItem(item, (patch) => update(item.id, patch), index)}
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="self-start text-sm px-4 py-2 rounded-lg border border-dashed border-on-tertiary-container text-on-tertiary-container hover:bg-on-tertiary-container/5"
      >
        + {addLabel ?? `Add ${itemLabel}`}
      </button>
    </div>
  );
}
