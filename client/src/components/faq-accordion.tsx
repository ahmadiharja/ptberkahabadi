import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-b border-[var(--dark-700)]">
          <AccordionTrigger className="text-[var(--light-100)] text-left text-lg py-6 hover:text-[var(--accent-green)] transition-colors">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[var(--dark-400)] text-base pb-6">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}