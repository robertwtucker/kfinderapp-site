/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import Link from './link'

export default function Component() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-indigo-100 px-4 py-6 sm:flex-row md:px-6">
      <p className="text-muted-foreground text-xs">© 2024 Robert Tucker. All rights reserved.</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="/legal/disclaimer">
          Disclaimer
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="/legal/terms">
          Terms of Service
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="/legal/privacy">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}
