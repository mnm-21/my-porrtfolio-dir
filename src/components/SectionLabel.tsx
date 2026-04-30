import Link from "next/link";

interface SectionLabelProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionLabel({ title, href, linkLabel }: SectionLabelProps) {
  return (
    <div className="section-label">
      <h2 className="section-title">{title}</h2>
      {href && linkLabel ? (
        <Link className="link" href={href}>
          {linkLabel}
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
