interface Props {
  html: string;
  className?: string;
}

export default function HtmlContent({ html, className }: Props) {
  if (!html) return null;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
