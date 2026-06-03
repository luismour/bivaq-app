export type Branch = "Lobinho" | "Escoteiro" | "Sênior" | "Pioneiro" | "Escotista";

export interface BadgeDesign {
  baseShape: string; 
  baseColor: string; 
  symbol: string; 
  symbolPosition: string; 
  borderColor: string; 
}

export interface Badge {
  id: string;
  ownerName: string;
  scoutGroup: string;
  region: string;
  branch: Branch;
  badgeDesign: BadgeDesign;
  collectedAt?: number; 
}
