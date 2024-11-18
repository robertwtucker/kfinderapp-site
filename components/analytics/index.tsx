/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import { TelemetryDeck, TelemetryDeckProps } from './telemetrydeck'

export interface AnalyticsConfig {
  telemetryDeck?: TelemetryDeckProps
}

export interface AnalyticsProps {
  analyticsConfig: AnalyticsConfig
}

export const Analytics = ({ analyticsConfig }: AnalyticsProps) => {
  return (
    <>{analyticsConfig.telemetryDeck && <TelemetryDeck {...analyticsConfig.telemetryDeck} />}</>
  )
}

export { TelemetryDeck }

export type { TelemetryDeckProps }
