'use client';

import type { PortfolioData, FeaturedResearchItem } from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section } from '../components/Field';

interface Props {
  data: PortfolioData['research'];
  onChange: (data: PortfolioData['research']) => void;
  secret: string;
}

const STAT_FIELDS: {
  key: keyof PortfolioData['research']['stats'];
  label: string;
}[] = [
  { key: 'published', label: 'Published' },
  { key: 'underReview', label: 'Under Review' },
  { key: 'citations', label: 'Citations' },
  { key: 'hIndex', label: 'h-index' },
  { key: 'i10Index', label: 'i10-index' },
];

export default function ResearchSection({ data, onChange, secret }: Props) {
  const update = (patch: Partial<PortfolioData['research']>) =>
    onChange({ ...data, ...patch });

  return (
    <div className="flex flex-col gap-6">
      <Section title="Research Interests">
        <Field label="Tag cloud image (optional)">
          <ImageUploader
            value={data.tagCloudImageUrl || undefined}
            onChange={(url) => update({ tagCloudImageUrl: url ?? '' })}
            secret={secret}
            folder="research"
            previewClassName="w-40 h-40 object-contain rounded border border-outline-variant"
          />
        </Field>
        <Field label="Interests text">
          <RichTextEditor
            value={data.interestsText}
            onChange={(v) => update({ interestsText: v })}
          />
        </Field>
      </Section>

      <Section
        title="Research Profile Stats"
        description="Empty fields are hidden on the public page."
      >
        <Field label="Heading">
          <TextInput
            value={data.statsHeading}
            onChange={(v) => update({ statsHeading: v })}
          />
        </Field>
        <Field label="Publication years subtitle">
          <TextInput
            value={data.publicationYears}
            onChange={(v) => update({ publicationYears: v })}
            placeholder="e.g. Publication Years: 2022 - Present"
          />
        </Field>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {STAT_FIELDS.map((s) => (
            <Field key={s.key} label={s.label}>
              <TextInput
                value={String(data.stats[s.key] ?? '')}
                onChange={(v) =>
                  update({ stats: { ...data.stats, [s.key]: v } })
                }
                placeholder="(leave empty to hide)"
              />
            </Field>
          ))}
        </div>
        <Field label="Research Resume URL">
          <TextInput
            type="url"
            value={data.researchResumeUrl ?? ''}
            onChange={(v) => update({ researchResumeUrl: v })}
          />
        </Field>
      </Section>

      <Section
        title="Featured Research"
        description="Long-form research summaries shown lower on the page."
      >
        <CollectionManager<FeaturedResearchItem>
          items={data.featuredResearch}
          onChange={(v) => update({ featuredResearch: v })}
          itemLabel="research item"
          makeEmpty={() => ({
            id: makeId(),
            title: '',
            description: '',
            order: 0,
          })}
          renderItem={(item, upd) => (
            <div className="flex flex-col gap-3">
              <Field label="Title">
                <TextInput
                  value={item.title}
                  onChange={(v) => upd({ title: v })}
                />
              </Field>
              <Field label="Description">
                <RichTextEditor
                  value={item.description}
                  onChange={(v) => upd({ description: v })}
                  minHeight={150}
                />
              </Field>
            </div>
          )}
        />
      </Section>
    </div>
  );
}
