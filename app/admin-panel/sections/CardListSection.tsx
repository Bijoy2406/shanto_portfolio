'use client';

import type { CardItem } from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section } from '../components/Field';

interface Props {
  title: string;
  description?: string;
  items: CardItem[];
  onChange: (items: CardItem[]) => void;
  folder: string;
  secret: string;
  itemLabel?: string;
  withImage?: boolean;
  withUrl?: boolean;
}

export default function CardListSection({
  title,
  description,
  items,
  onChange,
  folder,
  secret,
  itemLabel = 'card',
  withImage = true,
  withUrl = true,
}: Props) {
  return (
    <Section title={title} description={description}>
      <CollectionManager<CardItem>
        items={items}
        onChange={onChange}
        itemLabel={itemLabel}
        makeEmpty={() => ({
          id: makeId(),
          title: '',
          description: '',
          imageUrl: '',
          url: '',
          order: 0,
        })}
        renderItem={(item, update) => (
          <div className="flex flex-col gap-4">
            <Field label="Title">
              <TextInput
                value={item.title}
                onChange={(v) => update({ title: v })}
                placeholder={`${itemLabel} title…`}
              />
            </Field>
            <Field label="Description">
              <RichTextEditor
                value={item.description}
                onChange={(v) => update({ description: v })}
                placeholder="Write the description here…"
              />
            </Field>
            {withImage && (
              <Field label="Image">
                <ImageUploader
                  value={item.imageUrl || undefined}
                  onChange={(url) => update({ imageUrl: url ?? '' })}
                  secret={secret}
                  folder={folder}
                  previewClassName="w-40 h-28 object-cover rounded border border-outline-variant"
                />
              </Field>
            )}
            {withUrl && (
              <Field label="Click-through URL" hint="Used by the 'Click Here' / 'See More' button.">
                <TextInput
                  type="url"
                  value={item.url ?? ''}
                  onChange={(v) => update({ url: v })}
                  placeholder="https://…"
                />
              </Field>
            )}
          </div>
        )}
      />
    </Section>
  );
}
