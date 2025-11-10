"use client"

import React from 'react'
import Link from 'next/link'

type Props = { src: string }

export default function PdfViewer({ src }: Props) {
  // PDFs were removed from the site; keep a lightweight placeholder in case code still imports this component.
  return (
    <div style={{ padding: 24, background: '#fff' }}>
  <p style={{ margin: 0 }}>PDFs have been removed. If you expected content here, return to <Link href="/">Home</Link>.</p>
    </div>
  )
}
