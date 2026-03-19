export type KnowledgeChunk = {
  id: string;
  title: string;
  content: string;
  source: string;
};

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: "streaming-ux-1",
    title: "Why streaming responses improve UX",
    source: "docs/streaming.md",
    content:
      "Streaming responses make interfaces feel faster because users see partial answers immediately. A practical pattern is to show a typing response while data is still arriving and append tokens as they stream.",
  },
  {
    id: "retrieval-pipeline-1",
    title: "Retrieval pipeline basics",
    source: "docs/retrieval.md",
    content:
      "A retrieval pipeline starts with query preprocessing, then scoring documents against the query, and finally selecting the top chunks to pass into the generation step. Even lexical scoring can be effective in early-stage systems.",
  },
  {
    id: "rag-grounding-1",
    title: "Grounding answers with context",
    source: "docs/rag.md",
    content:
      "To reduce hallucinations, include retrieved context and instruct the model to cite only that information. If the context is weak, the model should say it is uncertain instead of inventing facts.",
  },
  {
    id: "latency-breakdown-1",
    title: "Latency components in RAG",
    source: "docs/perf.md",
    content:
      "End-to-end latency has three parts: retrieval latency, model first-token latency, and generation throughput. Tracking each part in a debug panel helps identify the true bottleneck.",
  },
  {
    id: "scope-guidance-1",
    title: "Scope guidance",
    source: "docs/scope.md",
    content:
      "An initial release should prioritize one clean workflow: ask a question, retrieve relevant context, stream an answer, and expose enough diagnostic information to verify correctness.",
  },
  {
    id: "evaluation-1",
    title: "Evaluating retrieval quality",
    source: "docs/evaluation.md",
    content:
      "Simple retrieval evaluation can track whether the expected chunk appears in the top-k results. You can manually test with a few benchmark prompts before adding formal metrics.",
  },
];
