import { SERVICES } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://magnivida.com'; // Replace with your actual domain

  // 1. Static Pages
  const routes = [
    '',
    '/services',
    '/about', // Assuming /#about is handled, but /about route might be desired for SEO scaling
    '/industries',
    '/careers',
    '/contact',
    '/creative',
    '/clients',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Pages
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
