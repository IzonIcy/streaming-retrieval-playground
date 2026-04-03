# PulseSearch

PulseSearch is a compact environment for evaluating retrieval-augmented generation with real-time output streaming and transparent diagnostics.

## Overview

The application follows a straightforward request pipeline:

1. Accept a user question.
2. Retrieve the most relevant chunks from a local knowledge base.
3. Generate and stream the answer token by token.
4. Surface retrieval and latency metrics in the diagnostics panel.

If `OPENAI_API_KEY` is missing, the app still works in fallback mode and streams a locally generated response from retrieved context.

## Technology Stack

- Next.js (App Router)
- React + TypeScript
- OpenAI Node SDK
- Local in-memory dataset

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure Real Model Streaming

Create `.env.local` in the project root:

```bash
OPENAI_API_KEY=your_api_key_here
```

Without this key, the API route uses a deterministic fallback stream so you can still test the full interaction loop locally.

## Project Structure

- `src/app/page.tsx` - Query input, streaming response view, and diagnostics panel
- `src/app/api/ask/route.ts` - Retrieval + server-sent events streaming endpoint
- `src/lib/retrieval.ts` - Lexical retrieval scoring and top-k ranking
- `src/data/knowledgeBase.ts` - Local data source used by retrieval

## Validation

```bash
npm run lint
npm run build
```
