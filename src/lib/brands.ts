export interface Brand {
  name: string
  description: string
  since: string;
  category: 'Beauty' | 'Fitness' | 'Outdoor'
  //partnerSince: number
  logo?: string
}

export const brands: Brand[] = [
  { name: 'SWISS BEAUTY', description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'DOT & KEY',    description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'THE MAN COMPANY', description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'NEEMAN’S',     description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'LA’ FRENCH',   description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'SIRONA',       description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'NOVA NOVA',    description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'NU REPUBLIC',  description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'BIG MUSCLES',  description: 'Partner since 2023', category: 'Fitness', since: '2023' },
  { name: 'GUSH',         description: 'Partner since 2023', category: 'Beauty', since: '2023' },
  { name: 'MOUNTAINOR',   description: 'Partner since 2023', category: 'Outdoor', since: '2023' },
];
import { getLogo } from '@/lib/brandLogos'

/** Call this once and export the enriched list */
export const brandsWithLogos: Brand[] = brands.map(b => ({
  ...b,
  logo: getLogo(b.name)
}))
