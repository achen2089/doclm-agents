'use client';

import { handlePdfUpload } from "@/lib/ai/actions";
import { useState } from "react";
import PdfUpload from "./pdf-upload";
import AnalysisResult from "./analysis-result";

export default function PdfAnalyzer() {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleUpload = async (file: File) => {
    setError('');
    setResult('');
    
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('pdf', file);
      
      const response = await handlePdfUpload(formData);
      
      if (!response.success) {
        throw new Error(response.message);
      }
      
      setResult(response.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process PDF');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-center">PDF Analyzer</h1>
        <PdfUpload 
          onUpload={handleUpload}
          isLoading={isLoading}
          error={error}
        />
        <AnalysisResult 
          isLoading={isLoading}
          result={result}
        />
      </div>
    </div>
  );
} 