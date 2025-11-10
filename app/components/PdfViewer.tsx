"use client"

import React from 'react'

type Props = { src: string }

export default function PdfViewer({ src }: Props) {
  // PDFs were removed from the site; keep a lightweight placeholder in case code still imports this component.
  return (
    <div style={{ padding: 24, background: '#fff' }}>
      <p style={{ margin: 0 }}>PDFs have been removed. If you expected content here, return to <a href="/">Home</a>.</p>
    </div>
  )
}
