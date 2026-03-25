// SPDX-FileCopyrightText: (c) 2024 Robert Tucker
// SPDX-License-Identifier: MIT

import nextConfig from 'eslint-config-next'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import("eslint").Linter.Config[]} */
const config = [
  { ignores: ['dist/*', '.cache', 'public', 'node_modules', '*.esm.js'] },
  ...nextConfig,
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintConfigPrettier,
]

export default config
