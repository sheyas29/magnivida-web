import {
  ServiceDetailClient,
  ServiceType,
} from '@/components/services/ServiceDetailClient';
import { SERVICES } from '@/lib/constants';
import type { Metadata } from 'next';

// 1. Generate Static Params (SSG)
// This tells Next.js to pre-build these pages at build time.
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

// 2. Dynamic Metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return {
      title: 'Service Not Found - Magnivida Securitas',
    };
  }

  return {
    title: `${service.title} | Magnivida Securitas`,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [service.coverImage],
    },
  };
}

// 3. Server Component
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Create a plain object copy excluding the icon function
  // to avoid "Only plain objects can be passed to Client Components" error.
  const serializedService = {
    ...service,
    icon: undefined, // Explicitly remove the function
  };

  return (
    <ServiceDetailClient
      service={serializedService as unknown as ServiceType}
    />
  );
}
