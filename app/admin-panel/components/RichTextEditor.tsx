'use client';

import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { FontFamily } from '@tiptap/extension-font-family';
import { useEffect } from 'react';

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

const FONT_FAMILIES: { label: string; value: string }[] = [
  { label: 'Default', value: '' },
  { label: 'Sans', value: 'var(--font-geist-sans), system-ui, sans-serif' },
  { label: 'Serif', value: 'Georgia, "Times New Roman", serif' },
  { label: 'Mono', value: 'var(--font-geist-mono), monospace' },
];

const FONT_SIZES: { label: string; value: string }[] = [
  { label: 'XS', value: '12px' },
  { label: 'S', value: '14px' },
  { label: 'M', value: '16px' },
  { label: 'L', value: '20px' },
  { label: 'XL', value: '24px' },
  { label: '2XL', value: '32px' },
];

function ToolbarBtn({
  active,
  onClick,
  label,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  label: string;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title ?? label}
      className={`px-2 py-1 text-xs font-semibold rounded border transition-colors ${
        active
          ? 'bg-on-tertiary-container text-surface-container-lowest border-on-tertiary-container'
          : 'bg-surface-container-lowest border-outline-variant text-on-surface hover:bg-surface-container-low'
      }`}
    >
      {label}
    </button>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const setLink = () => {
    const previous = editor.getAttributes('link').href ?? '';
    const url = window.prompt('URL', previous);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setFontSize = (size: string) => {
    editor.chain().focus().setMark('textStyle', { fontSize: size }).run();
  };

  const unsetFontSize = () => {
    editor.chain().focus().setMark('textStyle', { fontSize: null }).run();
  };

  const setFontFamily = (family: string) => {
    if (family === '') {
      editor.chain().focus().unsetFontFamily().run();
    } else {
      editor.chain().focus().setFontFamily(family).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-surface-container-low border border-outline-variant border-b-0 rounded-t-lg">
      <ToolbarBtn
        label="B"
        title="Bold"
        active={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <ToolbarBtn
        label="I"
        title="Italic"
        active={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <ToolbarBtn
        label="S"
        title="Strike"
        active={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <ToolbarBtn
        label="H2"
        active={editor.isActive('heading', { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <ToolbarBtn
        label="H3"
        active={editor.isActive('heading', { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      />
      <ToolbarBtn
        label="P"
        active={editor.isActive('paragraph')}
        onClick={() => editor.chain().focus().setParagraph().run()}
      />

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <ToolbarBtn
        label="• List"
        active={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />
      <ToolbarBtn
        label="1. List"
        active={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <ToolbarBtn
        label="Left"
        active={editor.isActive({ textAlign: 'left' })}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      />
      <ToolbarBtn
        label="Center"
        active={editor.isActive({ textAlign: 'center' })}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      />
      <ToolbarBtn
        label="Right"
        active={editor.isActive({ textAlign: 'right' })}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      />
      <ToolbarBtn
        label="Justify"
        active={editor.isActive({ textAlign: 'justify' })}
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      />

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <ToolbarBtn
        label="Link"
        active={editor.isActive('link')}
        onClick={setLink}
      />
      <ToolbarBtn
        label="Unlink"
        onClick={() => editor.chain().focus().unsetLink().run()}
      />

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <select
        onChange={(e) => {
          if (e.target.value === '') unsetFontSize();
          else setFontSize(e.target.value);
          e.currentTarget.value = '';
        }}
        defaultValue=""
        className="text-xs px-1 py-1 rounded border border-outline-variant bg-surface-container-lowest text-on-surface"
        title="Font size"
      >
        <option value="">Size</option>
        {FONT_SIZES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => {
          setFontFamily(e.target.value);
          e.currentTarget.value = '';
        }}
        defaultValue=""
        className="text-xs px-1 py-1 rounded border border-outline-variant bg-surface-container-lowest text-on-surface"
        title="Font family"
      >
        <option value="">Font</option>
        {FONT_FAMILIES.map((f) => (
          <option key={f.label} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>

      <span className="w-px h-5 bg-outline-variant mx-1" />

      <ToolbarBtn
        label="Clear"
        title="Clear formatting"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
      />
    </div>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder,
  minHeight = 120,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-blue-600 underline' },
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
      FontFamily,
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm max-w-none focus:outline-none px-4 py-3 text-on-surface',
        style: `min-height:${minHeight}px`,
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Sync external value changes (e.g., when switching tabs / reset)
  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div
        className="border border-outline-variant rounded-lg bg-surface-container-low animate-pulse"
        style={{ minHeight: minHeight + 50 }}
      />
    );
  }

  return (
    <div className="rich-text-editor">
      <Toolbar editor={editor} />
      <div className="border border-outline-variant rounded-b-lg bg-surface-container-lowest">
        <EditorContent editor={editor} />
        {!editor.getText() && placeholder ? (
          <div
            className="pointer-events-none -mt-[calc(var(--editor-min-height,120px)+1.5rem)] px-4 text-on-surface-variant text-sm"
            style={{ minHeight }}
          >
            {placeholder}
          </div>
        ) : null}
      </div>
    </div>
  );
}
