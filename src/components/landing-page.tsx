"use client";

import { Button } from "@/components/ui/button";
import { Server } from "lucide-react";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 text-center relative">
      <main className="space-y-6">
        <Server className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
          homelab.day
        </h1>
        <p className="max-w-[500px] text-gray-600 dark:text-gray-400 text-xl">
          Build your personal server in just one day.
        </p>

        <Link
          href="https://github.com/Xavier-IV/homelab.day"
          target="_blank"
          className="block"
        >
          <Button size="lg" className="text-lg px-8 py-4">
            Start Your Homelab
          </Button>
        </Link>

        <p className="text-sm text-gray-400 dark:text-gray-500 italic mt-8">
          Psst, this domain is hosted on a homelab!
        </p>
      </main>
      <footer className="absolute bottom-4 text-sm text-gray-500 dark:text-gray-400">
        © 2024 homelab.day
      </footer>
    </div>
  );
}

