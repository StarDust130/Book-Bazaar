"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const error = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black ">404</h1>

        <p className="text-2xl font-bold tracking-tight  sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 ">We can&apos;t find that page.</p>

        <Link href="/">
          <Button variant="link"> Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};
export default error;
