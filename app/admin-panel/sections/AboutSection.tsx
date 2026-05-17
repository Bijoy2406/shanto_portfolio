'use client';

import type {
  PortfolioData,
  ExperienceItem,
  EducationItem,
  NewsItem,
  CertificationItem,
} from '../types';
import CollectionManager, { makeId } from '../components/CollectionManager';
import ImageUploader from '../components/ImageUploader';
import RichTextEditor from '../components/RichTextEditor';
import { Field, TextInput, Section, Divider } from '../components/Field';

interface Props {
  data: PortfolioData['about'];
  onChange: (data: PortfolioData['about']) => void;
  secret: string;
}

export default function AboutSection({ data, onChange, secret }: Props) {
  const update = (patch: Partial<PortfolioData['about']>) =>
    onChange({ ...data, ...patch });

  return (
    <div className="flex flex-col gap-6">
      <Section title="Header">
        <Field label="Title (under profile photo)">
          <TextInput
            value={data.title}
            onChange={(v) => update({ title: v })}
            placeholder="e.g. PhD Student | Researcher | CSWE"
          />
        </Field>
        <Field label="Profile photo">
          <ImageUploader
            value={data.profileImageUrl}
            onChange={(url) => update({ profileImageUrl: url })}
            secret={secret}
            folder="profile"
            previewClassName="w-32 h-32 rounded-full object-cover border border-outline-variant"
          />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Full CV URL" hint="Drive link, PDF URL, etc.">
            <TextInput
              type="url"
              value={data.cvUrl ?? ''}
              onChange={(v) => update({ cvUrl: v })}
            />
          </Field>
          <Field label="Research Resume URL">
            <TextInput
              type="url"
              value={data.researchResumeUrl ?? ''}
              onChange={(v) => update({ researchResumeUrl: v })}
            />
          </Field>
        </div>
      </Section>

      <Section title="About text">
        <Field label="Bio paragraphs">
          <RichTextEditor
            value={data.aboutText}
            onChange={(v) => update({ aboutText: v })}
            minHeight={220}
          />
        </Field>
      </Section>

      <Section
        title="Certifications (badges)"
        description="Certificate badges shown here are managed on the Home page (same set is reused). Caption text below can be edited here."
      >
        <Field label="Caption under badges">
          <RichTextEditor
            value={data.certificateImageNote}
            onChange={(v) => update({ certificateImageNote: v })}
            minHeight={80}
          />
        </Field>
      </Section>

      <Section title="Experience">
        <CollectionManager<ExperienceItem>
          items={data.experience}
          onChange={(v) => update({ experience: v })}
          itemLabel="experience"
          makeEmpty={() => ({
            id: makeId(),
            organization: '',
            role: '',
            pi: '',
            bullets: '',
            order: 0,
          })}
          renderItem={(item, upd) => (
            <div className="flex flex-col gap-3">
              <Field label="Organization">
                <TextInput
                  value={item.organization}
                  onChange={(v) => upd({ organization: v })}
                />
              </Field>
              <Field label="Role / Period">
                <TextInput
                  value={item.role ?? ''}
                  onChange={(v) => upd({ role: v })}
                  placeholder="e.g. Graduate Research Assistant, Aug 2024 - Present"
                />
              </Field>
              <Field label="PI / Supervisor (optional)">
                <TextInput
                  value={item.pi ?? ''}
                  onChange={(v) => upd({ pi: v })}
                  placeholder="e.g. PI: Dr. Hassan Khodaei"
                />
              </Field>
              <Field label="Bullets / responsibilities">
                <RichTextEditor
                  value={item.bullets}
                  onChange={(v) => upd({ bullets: v })}
                  placeholder="Use the bullet-list button in the toolbar."
                />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="Education">
        <CollectionManager<EducationItem>
          items={data.education}
          onChange={(v) => update({ education: v })}
          itemLabel="education"
          makeEmpty={() => ({
            id: makeId(),
            institution: '',
            degree: '',
            department: '',
            period: '',
            details: '',
            order: 0,
          })}
          renderItem={(item, upd) => (
            <div className="flex flex-col gap-3">
              <Field label="Institution">
                <TextInput
                  value={item.institution}
                  onChange={(v) => upd({ institution: v })}
                />
              </Field>
              <Field label="Degree">
                <TextInput
                  value={item.degree ?? ''}
                  onChange={(v) => upd({ degree: v })}
                />
              </Field>
              <Field label="Department">
                <TextInput
                  value={item.department ?? ''}
                  onChange={(v) => upd({ department: v })}
                />
              </Field>
              <Field label="Period">
                <TextInput
                  value={item.period ?? ''}
                  onChange={(v) => upd({ period: v })}
                  placeholder="e.g. August 2024 - Present"
                />
              </Field>
              <Field label="Additional details">
                <RichTextEditor
                  value={item.details ?? ''}
                  onChange={(v) => upd({ details: v })}
                />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="Skills Summary">
        <Field label="Skills (use bullet list for best results)">
          <RichTextEditor
            value={data.skillsSummary}
            onChange={(v) => update({ skillsSummary: v })}
            minHeight={150}
          />
        </Field>
      </Section>

      <Section
        title="Certifications (text list)"
        description="Plain-text certification names. No images needed here."
      >
        <CollectionManager<CertificationItem>
          items={data.certificationsList}
          onChange={(v) => update({ certificationsList: v })}
          itemLabel="certification"
          makeEmpty={() => ({ id: makeId(), text: '', order: 0 })}
          renderItem={(item, upd) => (
            <Field label="Certification text">
              <TextInput
                value={item.text}
                onChange={(v) => upd({ text: v })}
                placeholder="e.g. (2020) CSWE-MD; Cert ID: …"
              />
            </Field>
          )}
        />
      </Section>

      <Section
        title="News / Updates"
        description="Bullet list of news items. Each item supports rich text and links."
      >
        <CollectionManager<NewsItem>
          items={data.news}
          onChange={(v) => update({ news: v })}
          itemLabel="news item"
          makeEmpty={() => ({ id: makeId(), text: '', order: 0 })}
          renderItem={(item, upd) => (
            <Field label="News content">
              <RichTextEditor
                value={item.text}
                onChange={(v) => upd({ text: v })}
                minHeight={80}
                placeholder="e.g. November 2025: My paper has been published in…"
              />
            </Field>
          )}
        />
      </Section>
    </div>
  );
}
