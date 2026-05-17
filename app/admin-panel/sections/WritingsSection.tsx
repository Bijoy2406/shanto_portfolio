'use client';

import type { PortfolioData } from '../types';
import RichTextEditor from '../components/RichTextEditor';
import { Field, Section } from '../components/Field';

interface Props {
  data: PortfolioData['writings'];
  onChange: (data: PortfolioData['writings']) => void;
}

export default function WritingsSection({ data, onChange }: Props) {
  return (
    <Section title="Writings" description="Free-form rich-text page.">
      <Field label="Content">
        <RichTextEditor
          value={data.content}
          onChange={(v) => onChange({ content: v })}
          minHeight={400}
        />
      </Field>
    </Section>
  );
}
