/**
 * @fileoverview UUID generation utility
 * Uses Node.js built-in crypto.randomUUID() for secure UUID generation
 */

import { randomUUID } from 'node:crypto';

export function generateUUID(): string {
  return randomUUID();
}
