// app/ex01/page.tsx
'use client'

import React, { JSX } from "react";

export default function Ex01Page(): JSX.Element {
  const current = new Date().toString()
  return (
    <div>
      <div>Ex01 Page</div>
      <div>{current}</div>
    </div>
  );
}
