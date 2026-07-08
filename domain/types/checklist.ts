export type ChecklistItemType = "ingredient" | "step";

export interface ChecklistItem {
  itemId: string;
  itemType: ChecklistItemType;
  label: string;
  quantityGrams?: number;
  completed: boolean;
  completedAt?: Date;
}

export interface ChecklistSession {
  checklistId: string;
  masterRecipeId: string;
  items: ChecklistItem[];
  createdAt: Date;
  lastActivityAt: Date;
  completed: boolean;
}