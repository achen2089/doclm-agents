'use client';

interface AnalysisResultProps {
  isLoading: boolean;
  result?: string;
}

export default function AnalysisResult({ isLoading, result }: AnalysisResultProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="animate-pulse text-blue-600">Processing PDF...</div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Analysis Result</h2>
      <div className="whitespace-pre-wrap">{result}</div>
    </div>
  );
} 