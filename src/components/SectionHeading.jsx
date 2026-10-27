export default function SectionHeading({ eyebrow, title, accent, text, align = 'left', light = false }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-brand-red" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <h2 className={`h2 mt-4 text-balance ${light ? 'text-navy-900' : ''}`}>
        {title} {accent && <span className="text-brand-red">{accent}</span>}
      </h2>
      {text && (
        <p className={`mt-5 text-[15px] leading-relaxed ${light ? 'text-navy-700/80' : 'text-brand-steel/90'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
