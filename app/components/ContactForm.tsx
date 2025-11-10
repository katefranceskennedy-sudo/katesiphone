"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // we'll POST form data to our server API; the server will send the email
  const [honeypot, setHoneypot] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, honeypot }),
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('sent');
      } else {
        console.error('contact error', json);
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 680 }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <input
          aria-label="Name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: 1, padding: '10px 12px', border: '1px solid #ddd' }}
        />
        <input
          aria-label="Email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, padding: '10px 12px', border: '1px solid #ddd' }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <textarea
          aria-label="Message"
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: 12, border: '1px solid #ddd' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{ padding: '10px 16px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>

        {/* hidden honeypot field for bots */}
        <input
          aria-hidden
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, opacity: 0 }}
        />

        {status === 'sent' && <span style={{ color: 'green' }}>Mail client opened — complete sending there.</span>}
        {status === 'error' && <span style={{ color: 'red' }}>Something went wrong. Try copying the text into your mail client.</span>}
      </div>
    </form>
  );
}
