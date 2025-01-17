import type { Metadata } from 'next';
import { CreditsContent } from './CreditsContent';

export const metadata: Metadata = {
  title: 'credits',
  description: 'credits page',
};

export default function CreditsPage() {
  return <CreditsContent />;
}
