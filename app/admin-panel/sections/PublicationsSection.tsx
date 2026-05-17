'use client';

import type { PortfolioData, ImageItem, PublicationSection as PSection } from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section } from '../components/Field';

interface Props {
  data: PortfolioData['publications'];
  onChange: (data: PortfolioData['publications']) => void;
  secret: string;
}

export default function PublicationsSection({ data, onChange, secret }: Props) {
  const update = (patch: Partial<PortfolioData['publications']>) =>
    onChange({ ...data, ...patch });

  return (
    <div className="flex flex-col gap-6">
      <Section
        title="Journal cover images"
        description="All journal cover images are shown together in a grid (no slideshow)."
      >
        <CollectionManager<ImageItem>
          items={data.journalCoverImages}
          onChange={(v) => update({ journalCoverImages: v })}
          itemLabel="cover image"
          makeEmpty={() => ({ id: makeId(), url: '', alt: '', order: 0 })}
          renderItem={(item, upd) => (
            <div className="flex flex-col gap-3">
              <ImageUploader
                value={item.url || undefined}
                onChange={(url) => upd({ url: url ?? '' })}
                secret={secret}
                folder="publications-covers"
                previewClassName="w-28 h-36 object-cover rounded border border-outline-variant"
              />
              <TextInput
                value={item.alt ?? ''}
                onChange={(v) => upd({ alt: v })}
                placeholder="Alt text (optional)"
              />
            </div>
          )}
        />
      </Section>

      <Section
        title="Publication sections"
        description="Each section has a heading and rich-text body. Add as many as you need — they appear in order on the page."
      >
        <CollectionManager<PSection>
          items={data.sections}
          onChange={(v) => update({ sections: v })}
          itemLabel="section"
          makeEmpty={() => ({
            id: makeId(),
            title: '',
            content: '',
            order: 0,
          })}
          renderItem={(item, upd) => (
            <div className="flex flex-col gap-3">
              <Field label="Section heading">
                <TextInput
                  value={item.title}
                  onChange={(v) => upd({ title: v })}
                  placeholder="e.g. Full List of Published Journal Articles (42)"
                />
              </Field>
              <Field label="Body">
                <RichTextEditor
                  value={item.content}
                  onChange={(v) => upd({ content: v })}
                  minHeight={200}
                />
              </Field>
            </div>
          )}
        />
      </Section>
    </div>
  );
}
