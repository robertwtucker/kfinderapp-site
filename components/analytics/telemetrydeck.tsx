/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import Script from 'next/script'

export interface TelemetryDeckProps {
  appId: string
  src?: string
}

export const TelemetryDeck = ({
  appId,
  src = 'https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js',
}: TelemetryDeckProps) => {
  return <Script strategy="lazyOnload" src={src} data-app-id={appId} async defer />
}
