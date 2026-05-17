'use client';

import type { AchievementItem } from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section } from '../components/Field';

interface Props {
  items: AchievementItem[];
  onChange: (items: AchievementItem[]) => void;
  secret: string;
}

export default function AchievementsSection({ items, onChange, secret }: Props) {
  return (
    <Section
      title="Achievements"
      description="Long-form achievement cards. Text on the left, single image on the right, 'See More' button at the bottom."
    >
      <CollectionManager<AchievementItem>
        items={items}
        onChange={onChange}
        itemLabel="achievement"
        makeEmpty={() => ({
          id: makeId(),
          title: '',
          subtitle: '',
          description: '',
          imageUrl: '',
          seeMoreUrl: '',
          order: 0,
        })}
        renderItem={(item, update) => (
          <div className="flex flex-col gap-4">
            <Field label="Title">
              <TextInput
                value={item.title}
                onChange={(v) => update({ title: v })}
                placeholder="Award / achievement title"
              />
            </Field>
            <Field label="Subtitle">
              <TextInput
                value={item.subtitle ?? ''}
                onChange={(v) => update({ subtitle: v })}
                placeholder="e.g. Recipient of the award"
              />
            </Field>
            <Field label="Short description">
              <RichTextEditor
                value={item.description}
                onChange={(v) => update({ description: v })}
                placeholder="Write the achievement details…"
              />
            </Field>
            <Field label="Image (right side, no slideshow)">
              <ImageUploader
                value={item.imageUrl || undefined}
                onChange={(url) => update({ imageUrl: url ?? '' })}
                secret={secret}
                folder="achievements"
                previewClassName="w-40 h-40 object-cover rounded border border-outline-variant"
              />
            </Field>
            <Field label="'See More' URL">
              <TextInput
                type="url"
                value={item.seeMoreUrl ?? ''}
                onChange={(v) => update({ seeMoreUrl: v })}
                placeholder="https://…"
              />
            </Field>
          </div>
        )}
      />
    </Section>
  );
}
