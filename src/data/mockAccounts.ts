import { AccountSession } from '../types';

export function calculateWarmupDays(createdAtStr?: string, explicitWarmupDay?: number): number {
  const baseDay = (explicitWarmupDay !== undefined && explicitWarmupDay !== null && explicitWarmupDay > 0)
    ? explicitWarmupDay
    : 2;

  if (!createdAtStr) return baseDay;
  try {
    const createdDate = new Date(createdAtStr.includes('T') ? createdAtStr : createdAtStr + 'T00:00:00');
    if (isNaN(createdDate.getTime())) return baseDay;
    const now = new Date();
    const createdMid = new Date(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate()).getTime();
    const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const elapsedDays = Math.floor((nowMid - createdMid) / (1000 * 60 * 60 * 24));
    return Math.max(1, baseDay + Math.max(0, elapsedDays));
  } catch {
    return baseDay;
  }
}

// 5 Dedicated Brazilian Native Proxies (1:1 strictly mapped to prevent account association)
export const BRAZIL_DEDICATED_PROXIES_MAP: Record<string, string> = {
  '5586994428117': '200.160.43.132:12323:14aade52b86e6:70dd653fc2',
  '5586994581839': '200.239.213.26:12323:14aade52b86e6:70dd653fc2',
  '5586994709226': '200.160.36.222:12323:14aade52b86e6:70dd653fc2',
  '5586994684213': '200.239.237.124:12323:14aade52b86e6:70dd653fc2',
  '5586994687152': '200.160.38.29:12323:14aade52b86e6:70dd653fc2'
};

export const BRAZIL_PROXIES_POOL: string[] = [
  '200.160.43.132:12323:14aade52b86e6:70dd653fc2',
  '200.239.213.26:12323:14aade52b86e6:70dd653fc2',
  '200.160.36.222:12323:14aade52b86e6:70dd653fc2',
  '200.239.237.124:12323:14aade52b86e6:70dd653fc2',
  '200.160.38.29:12323:14aade52b86e6:70dd653fc2'
];

export function getDedicatedProxyForPhone(rawPhone?: string, index: number = 0): string {
  if (!rawPhone) return BRAZIL_PROXIES_POOL[index % BRAZIL_PROXIES_POOL.length];
  const clean = rawPhone.replace(/\D/g, '');
  return BRAZIL_DEDICATED_PROXIES_MAP[clean] || BRAZIL_PROXIES_POOL[index % BRAZIL_PROXIES_POOL.length];
}

export const INITIAL_MOCK_ACCOUNTS: AccountSession[] = [
  {
    id: 'acc-tg-5586994428117',
    phone: '+55 86 99442-8117',
    alias: 'TG-BR-5586994428117 (Ana)',
    platform: 'telegram',
    type: 'tg_userbot',
    status: 'active',
    proxy: '200.160.43.132:12323:14aade52b86e6:70dd653fc2',
    healthScore: 99,
    sentToday: 0,
    dailyLimit: 120,
    totalSent: 0,
    successRate: 100,
    createdAt: '2026-08-24',
    lastActive: '刚刚',
    warmupDay: 2,
    twoFactorPassword: '548508',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    tgApiId: '2040',
    tgApiHash: 'b18441a1ff607e10a989891a5462e627',
    spambotStatus: 'clean',
    sessionValid: true,
    groupTag: '主力爆破A组'
  },
  {
    id: 'acc-tg-5586994581839',
    phone: '+55 86 99458-1839',
    alias: 'TG-BR-5586994581839 (Beatriz)',
    platform: 'telegram',
    type: 'tg_userbot',
    status: 'active',
    proxy: '200.239.213.26:12323:14aade52b86e6:70dd653fc2',
    healthScore: 99,
    sentToday: 0,
    dailyLimit: 120,
    totalSent: 0,
    successRate: 100,
    createdAt: '2026-08-24',
    lastActive: '刚刚',
    warmupDay: 2,
    twoFactorPassword: '548508',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    tgApiId: '2040',
    tgApiHash: 'b18441a1ff607e10a989891a5462e627',
    spambotStatus: 'clean',
    sessionValid: true,
    groupTag: '主力爆破A组'
  },
  {
    id: 'acc-tg-5586994709226',
    phone: '+55 86 99470-9226',
    alias: 'TG-BR-5586994709226 (Juliana)',
    platform: 'telegram',
    type: 'tg_userbot',
    status: 'active',
    proxy: '200.160.36.222:12323:14aade52b86e6:70dd653fc2',
    healthScore: 99,
    sentToday: 0,
    dailyLimit: 120,
    totalSent: 0,
    successRate: 100,
    createdAt: '2026-08-24',
    lastActive: '刚刚',
    warmupDay: 2,
    twoFactorPassword: '548508',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    tgApiId: '2040',
    tgApiHash: 'b18441a1ff607e10a989891a5462e627',
    spambotStatus: 'clean',
    sessionValid: true,
    groupTag: '主力爆破A组'
  },
  {
    id: 'acc-tg-5586994684213',
    phone: '+55 86 99468-4213',
    alias: 'TG-BR-5586994684213 (Camila)',
    platform: 'telegram',
    type: 'tg_userbot',
    status: 'active',
    proxy: '200.239.237.124:12323:14aade52b86e6:70dd653fc2',
    healthScore: 99,
    sentToday: 0,
    dailyLimit: 120,
    totalSent: 0,
    successRate: 100,
    createdAt: '2026-08-24',
    lastActive: '刚刚',
    warmupDay: 2,
    twoFactorPassword: '548508',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    tgApiId: '2040',
    tgApiHash: 'b18441a1ff607e10a989891a5462e627',
    spambotStatus: 'clean',
    sessionValid: true,
    groupTag: '主力爆破A组'
  },
  {
    id: 'acc-tg-5586994687152',
    phone: '+55 86 99468-7152',
    alias: 'TG-BR-5586994687152 (Fernanda)',
    platform: 'telegram',
    type: 'tg_userbot',
    status: 'active',
    proxy: '200.160.38.29:12323:14aade52b86e6:70dd653fc2',
    healthScore: 99,
    sentToday: 0,
    dailyLimit: 120,
    totalSent: 0,
    successRate: 100,
    createdAt: '2026-08-24',
    lastActive: '刚刚',
    warmupDay: 2,
    twoFactorPassword: '548508',
    avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop&q=80',
    tgApiId: '2040',
    tgApiHash: 'b18441a1ff607e10a989891a5462e627',
    spambotStatus: 'clean',
    sessionValid: true,
    groupTag: '主力爆破A组'
  }
];


