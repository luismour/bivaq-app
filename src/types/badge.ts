export type Branch = "Lobinho" | "Escoteiro" | "Sênior" | "Pioneiro" | "Escotista";

export interface BadgeDesign {
  baseShape: string; // ex: 'shield', 'circle', 'diamond'
  baseColor: string; // Hexadecimal, ex: '#4A5D23' (Verde Oliva)
  symbol: string; // ex: 'campfire', 'compass', 'fleur-de-lis', 'knot'
  symbolPosition: string; // ex: 'center', 'top-right'
  borderColor: string; // Hexadecimal
}

export interface Badge {
  id: string; // UUID v4 gerado na criação
  ownerName: string;
  scoutGroup: string;
  region: string;
  branch: Branch;
  badgeDesign: BadgeDesign;
  collectedAt?: number; // Timestamp local da hora em que foi escaneado
}