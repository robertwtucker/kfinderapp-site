/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import type { Metadata } from 'next'

import FAQPage from './faq'

export const metadata: Metadata = {
  title: 'Support',
}

export default function Page() {
  return <FAQPage />
}
