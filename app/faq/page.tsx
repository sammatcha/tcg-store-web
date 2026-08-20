
const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders ship within 1-2 business days, with delivery in 3-5 business days for standard shipping.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not currently — we only ship within the United States.",
  },
  {
    q: "How do you grade card condition?",
    a: "We follow standard condition tiers (NM, LP, MP, HP, DMG) and describe any notable flaws in the listing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards and PayPal at checkout.",
  },
  {
    q: "Can I track my order?",
    a: "Yes — you'll receive a tracking number by email once your order ships.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">FAQ</h1>
       <p className="text-xs text-muted-foreground italic border-t pt-4 mt-8">
            This is a demo/portfolio project. Content on this page is placeholder text and does not reflect real policies.
        </p>
      <div className="space-y-6">
        {faqs.map((item) => (
          <div key={item.q}>
            <p className="font-semibold text-sm mb-1">{item.q}</p>
            <p className="text-sm text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
       <p className="text-xs text-muted-foreground italic border-t pt-4 mt-8">
            This is a demo/portfolio project. Content on this page is placeholder text and does not reflect real policies.
        </p>
    </div>
  );
}