/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQPage() {
  const faqs = [
    {
      question: 'Can I use KFinder on multiple devices?',
      answer:
        'Yes, you can use KFinder on multiple devices. As long as you are logged into iCloud with the same credentials, your settings and data will be available.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'We take data security very seriously. All your data is encrypted both in transit and at rest (via iCloud).',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by emailing support@kfinderapp.com.',
    },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8 text-center">
        Find answers to common questions about KFinder. If you can&apos;t find what you&apos;re
        looking for, please contact our support team.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
