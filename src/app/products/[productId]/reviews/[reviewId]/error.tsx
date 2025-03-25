"use client";
export default function ErrorBounday({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
