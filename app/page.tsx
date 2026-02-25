/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import Image from 'next/image'
import { LeafyGreen, Shield, Smartphone } from 'lucide-react'

import Link from '@/components/link'

export default function Component() {
  return (
    <>
      <section className="w-full bg-indigo-100 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your anti-coagulation partner
                </h1>
                <p className="text-muted-foreground max-w-[600px] md:text-xl">
                  Helping you manage two key factors in a successful anti-coagulation therapy
                  program: consistent Vitamin K intake and regular blood testing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                  href="#download"
                >
                  Download Now
                </Link>
                <Link
                  className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                  href="#features"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="App Screenshot"
                className="aspect-[1/2] overflow-hidden rounded-xl object-center"
                height="600"
                src="/kfinderapp-home-view.png"
                width="300"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="bg-muted w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <LeafyGreen className="text-primary mb-4 size-12" />
              <h3 className="mb-2 text-xl font-bold">Nutrient Search</h3>
              <p className="text-muted-foreground">
                Get detailed food composition breakdowns from the USDA&apos;s FoodData Central
                database.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="text-primary mb-4 size-12" />
              <h3 className="mb-2 text-xl font-bold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your private data is encrypted and stored securely in iCloud
                <sup className="superscript">&reg;</sup>.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Smartphone className="text-primary mb-4 size-12" />
              <h3 className="mb-2 text-xl font-bold">Multi-device</h3>
              <p className="text-muted-foreground">
                Seamlessly sync your data across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="download" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download Now</h2>
              <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with KFinder today and transform the way you manage your life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Link className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" href="#" */}
              <Link
                className="inline-flex h-10 w-auto items-center justify-center"
                href="https://apps.apple.com/us/app/kfinder/id6738031531#"
              >
                <Image src="/app-store-download.svg" alt="App Store" width={135} height={40} />
              </Link>
              {/* <Link */}
              {/*   className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" */}
              {/*   href="#" */}
              {/* > */}
              {/*   <Download className="mr-2 h-4 w-4" /> */}
              {/*   Google Play */}
              {/* </Link> */}
            </div>
            <div className="flex pt-8">
              <p className="text-muted-foreground text-xs">
                App Store and iCloud are registered trademarks of Apple Inc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
