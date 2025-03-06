'use server';

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function generateTextAction(prompt: string) {
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: prompt,
  });
  console.log(text);
  return text;
}