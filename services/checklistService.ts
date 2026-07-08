// services/checklistService.ts
import { v4 as uuidv4 } from "uuid";
import { ChecklistItem, ChecklistSession } from "../domain/types/checklist";
import { findMasterRecipeById } from "../domain/data/recipes";

const activeChecklists: Map<string, ChecklistSession> = new Map();

export function openChecklist(recipeId: string): { checklist?: ChecklistSession; error?: string } {
  const recipe = findMasterRecipeById(recipeId);
  if (!recipe) {
    return { error: `Receta maestra "${recipeId}" no encontrada` };
  }

  const ingredientItems: ChecklistItem[] = recipe.ingredients.map((ing) => ({
    itemId: ing.id,
    itemType: "ingredient",
    label: ing.name,
    quantityGrams: ing.quantityGrams,
    completed: false,
  }));

  const stepItems: ChecklistItem[] = (recipe.steps ?? []).map((step) => ({
    itemId: step.id,
    itemType: "step",
    label: step.name,
    completed: false,
  }));

  const checklist: ChecklistSession = {
    checklistId: uuidv4(),
    masterRecipeId: recipe.id,
    items: [...ingredientItems, ...stepItems],
    createdAt: new Date(),
    lastActivityAt: new Date(),
    completed: false,
  };

  activeChecklists.set(checklist.checklistId, checklist);
  return { checklist };
}

export function getChecklist(checklistId: string): { checklist?: ChecklistSession; error?: string } {
  const checklist = activeChecklists.get(checklistId);
  if (!checklist) {
    return { error: `Checklist "${checklistId}" no encontrada` };
  }
  return { checklist };
}

/** Marca o desmarca un ítem (permite corregir errores, según nota del CU_15) */
export function markItem(
  checklistId: string,
  itemId: string,
  completed: boolean,
): { checklist?: ChecklistSession; error?: string } {
  const { checklist, error } = getChecklist(checklistId);
  if (error || !checklist) return { error };

  const item = checklist.items.find((i) => i.itemId === itemId);
  if (!item) return { error: `Ítem "${itemId}" no encontrado en la checklist` };

  item.completed = completed;
  item.completedAt = completed ? new Date() : undefined;
  checklist.lastActivityAt = new Date();
  checklist.completed = checklist.items.every((i) => i.completed);

  return { checklist };
}

export function getProgress(
  checklistId: string,
): { completed: number; total: number; percentage: number; error?: string } {
  const { checklist, error } = getChecklist(checklistId);
  if (error || !checklist) return { completed: 0, total: 0, percentage: 0, error };

  const total = checklist.items.length;
  const completed = checklist.items.filter((i) => i.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percentage };
}