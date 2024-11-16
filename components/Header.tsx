/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import { Smartphone } from 'lucide-react'

import Link from './Link'

export default function Component() {
  return (
    <header className="flex h-14 items-center bg-indigo-100 px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Smartphone className="mr-2 size-6" />
        <span className="font-bold">KFinder</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#download">
          Download
        </Link>
      </nav>
    </header>
  )
}
