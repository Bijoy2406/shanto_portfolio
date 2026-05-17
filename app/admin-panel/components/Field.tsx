'use client';

import { ReactNode } from 'react';

interface FieldProps {
  label: string;
  children: ReactNode;
  hint?: string;
}

export function Field({ label, children, hint }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-on-surface">{label}</label>
      {children}
      {hint && <p className="text-xs text-on-surface-variant">{hint}</p>}
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: 'text' | 'url' | 'number';
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
}: TextInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-on-tertiary-container"
    />
  );
}

interface TextAreaProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextAreaInput({
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-on-tertiary-container resize-y"
    />
  );
}

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-5 p-6 bg-surface-container-low rounded-xl border border-outline-variant">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-on-surface">{title}</h2>
        {description && (
          <p className="text-xs text-on-surface-variant">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

export function Divider() {
  return <hr className="border-outline-variant" />;
}
