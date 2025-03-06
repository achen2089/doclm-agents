'use client';

import { generateTextAction } from "@/lib/ai/actions";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold">AI Text Generator</h1>
      <div className="w-full max-w-2xl space-y-4">
        <textarea
          className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-black"
          placeholder="Enter your text here..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            onClick={async () => {
              setIsLoading(true);
              const result = await generateTextAction(text);
              setResult(result);
              setIsLoading(false);
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        {result && (
          <div className="p-4 bg-white rounded-lg shadow">
            {result}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-pulse text-blue-600">Loading...</div>
          </div>
        )}
      </div>
    </div>
  );
}
