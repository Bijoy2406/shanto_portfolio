'use client';

import type { PortfolioData, ImageItem, ProjectItem } from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section, Divider } from '../components/Field';

interface Props {
  data: PortfolioData['home'];
  onChange: (data: PortfolioData['home']) => void;
  secret: string;
}

function ImageCollection({
  items,
  onChange,
  folder,
  secret,
  itemLabel,
  previewClassName,
}: {
  items: ImageItem[];
  onChange: (items: ImageItem[]) => void;
  folder: string;
  secret: string;
  itemLabel: string;
  previewClassName?: string;
}) {
  return (
    <CollectionManager<ImageItem>
      items={items}
      onChange={onChange}
      itemLabel={itemLabel}
      makeEmpty={() => ({ id: makeId(), url: '', alt: '', order: 0 })}
      renderItem={(item, update) => (
        <div className="flex flex-col gap-3">
          <ImageUploader
            value={item.url || undefined}
            onChange={(url) => update({ url: url ?? '' })}
            secret={secret}
            folder={folder}
            previewClassName={
              previewClassName ??
              'w-32 h-32 object-cover rounded border border-outline-variant'
            }
          />
          <TextInput
            value={item.alt ?? ''}
            onChange={(v) => update({ alt: v })}
            placeholder="Alt text (optional)"
          />
        </div>
      )}
    />
  );
}

function ProjectCollection({
  items,
  onChange,
  folder,
  secret,
  itemLabel,
}: {
  items: ProjectItem[];
  onChange: (items: ProjectItem[]) => void;
  folder: string;
  secret: string;
  itemLabel: string;
}) {
  return (
    <CollectionManager<ProjectItem>
      items={items}
      onChange={onChange}
      itemLabel={itemLabel}
      makeEmpty={() => ({ id: makeId(), title: '', images: [], order: 0 })}
      renderItem={(item, update) => (
        <div className="flex flex-col gap-3">
          <Field label="Project title">
            <TextInput
              value={item.title}
              onChange={(v) => update({ title: v })}
              placeholder="e.g. Motion Analysis"
            />
          </Field>
          <Field
            label="Images"
            hint="Multiple images render as a slideshow with controls."
          >
            <div className="border border-outline-variant rounded-lg p-3 bg-surface-container-low">
              <ImageCollection
                items={item.images}
                onChange={(imgs) => update({ images: imgs })}
                folder={folder}
                secret={secret}
                itemLabel="image"
                previewClassName="w-28 h-20 object-cover rounded border border-outline-variant"
              />
            </div>
          </Field>
        </div>
      )}
    />
  );
}

export default function HomeSection({ data, onChange, secret }: Props) {
  const update = (patch: Partial<PortfolioData['home']>) =>
    onChange({ ...data, ...patch });

  return (
    <div className="flex flex-col gap-6">
      <Section title="Profile" description="Photo, social links, resume.">
        <Field label="Profile photo">
          <ImageUploader
            value={data.profileImageUrl}
            onChange={(url) => update({ profileImageUrl: url })}
            secret={secret}
            folder="profile"
            previewClassName="w-32 h-32 rounded-lg object-cover border border-outline-variant"
          />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="LinkedIn URL">
            <TextInput
              type="url"
              value={data.socialLinks.linkedin ?? ''}
              onChange={(v) =>
                update({ socialLinks: { ...data.socialLinks, linkedin: v } })
              }
            />
          </Field>
          <Field label="Google Scholar URL">
            <TextInput
              type="url"
              value={data.socialLinks.google ?? ''}
              onChange={(v) =>
                update({ socialLinks: { ...data.socialLinks, google: v } })
              }
            />
          </Field>
          <Field label="GitHub URL">
            <TextInput
              type="url"
              value={data.socialLinks.github ?? ''}
              onChange={(v) =>
                update({ socialLinks: { ...data.socialLinks, github: v } })
              }
            />
          </Field>
          <Field label="Facebook URL">
            <TextInput
              type="url"
              value={data.socialLinks.facebook ?? ''}
              onChange={(v) =>
                update({ socialLinks: { ...data.socialLinks, facebook: v } })
              }
            />
          </Field>
        </div>
        <Field label="Resume URL">
          <TextInput
            type="url"
            value={data.resumeUrl ?? ''}
            onChange={(v) => update({ resumeUrl: v })}
            placeholder="https://… (Google Drive, etc.)"
          />
        </Field>
      </Section>

      <Section title="Bio text" description="Main bio paragraphs on the home page.">
        <Field label="Greeting (e.g. 'Hi!')">
          <TextInput
            value={data.hiText}
            onChange={(v) => update({ hiText: v })}
          />
        </Field>
        <Field label="Bio — paragraph 1">
          <RichTextEditor
            value={data.bioParagraph1}
            onChange={(v) => update({ bioParagraph1: v })}
          />
        </Field>
        <Field label="Bio — paragraph 2">
          <RichTextEditor
            value={data.bioParagraph2}
            onChange={(v) => update({ bioParagraph2: v })}
          />
        </Field>
        <Divider />
        <Field label="Interests label">
          <TextInput
            value={data.interestsLabel}
            onChange={(v) => update({ interestsLabel: v })}
          />
        </Field>
        <Field label="Interests text">
          <RichTextEditor
            value={data.interests}
            onChange={(v) => update({ interests: v })}
          />
        </Field>
        <Field label="Expertise label">
          <TextInput
            value={data.expertiseLabel}
            onChange={(v) => update({ expertiseLabel: v })}
          />
        </Field>
        <Field label="Expertise text">
          <RichTextEditor
            value={data.expertise}
            onChange={(v) => update({ expertise: v })}
          />
        </Field>
      </Section>

      <Section
        title="Certificate badges"
        description="Round certificate images. Same set is reused on the About page."
      >
        <ImageCollection
          items={data.badges}
          onChange={(v) => update({ badges: v })}
          folder="badges"
          secret={secret}
          itemLabel="badge"
          previewClassName="w-20 h-20 object-cover rounded-full border border-outline-variant"
        />
      </Section>

      <Section title="Projects overview text">
        <Field label="Overview paragraph">
          <RichTextEditor
            value={data.projectsOverview}
            onChange={(v) => update({ projectsOverview: v })}
          />
        </Field>
        <Field label="Closing tagline">
          <RichTextEditor
            value={data.projectsOverviewTagline}
            onChange={(v) => update({ projectsOverviewTagline: v })}
            minHeight={80}
          />
        </Field>
      </Section>

      <Section
        title="CAD Projects"
        description="Each project can have multiple images (rendered as a slideshow)."
      >
        <ProjectCollection
          items={data.cadProjects}
          onChange={(v) => update({ cadProjects: v })}
          folder="cad-projects"
          secret={secret}
          itemLabel="CAD project"
        />
      </Section>

      <Section title="Simulation Projects">
        <ProjectCollection
          items={data.simulationProjects}
          onChange={(v) => update({ simulationProjects: v })}
          folder="sim-projects"
          secret={secret}
          itemLabel="simulation project"
        />
      </Section>

      <Section title="Product Design & Development">
        <ProjectCollection
          items={data.productProjects}
          onChange={(v) => update({ productProjects: v })}
          folder="product-projects"
          secret={secret}
          itemLabel="product project"
        />
      </Section>

      <Section title="Footer">
        <Field label="Footer copyright text">
          <TextInput
            value={data.footerText}
            onChange={(v) => update({ footerText: v })}
          />
        </Field>
      </Section>
    </div>
  );
}
