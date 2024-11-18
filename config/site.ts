/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import { AnalyticsConfig } from '@/components/analytics'

export interface SiteConfig {
  title: string
  name: string
  description: string
  baseUrl: string
  icon: string
  analytics: AnalyticsConfig
}

const siteConfig: SiteConfig = {
  title: 'KFinder App',
  name: 'KFinder',
  description: 'An iOS application',
  baseUrl: 'https://kfinderapp.com',
  icon: '/favicon.ico',
  analytics: {
    telemetryDeck: {
      appId: process.env.TELEMETRY_DECK_APP_ID || '',
    },
  },
}

export default siteConfig
