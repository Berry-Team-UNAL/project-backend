import { error } from "console";
import { isCircularyDependent, RecipeRelation } from "./subrecipeLogic";

export type MeasurementUnit = 'percentage' | 'grams';

export interface ComponentInRecipe{
    componentId: number;
    quantity: number;
    unit: MeasurementUnit;
}

export interface Recipe{
    recipeId: number
    name: string;
    components: ComponentInRecipe[];
}

function validateQuantity(
    quantity: number,
    unit: MeasurementUnit
): void{
    if(quantity<= 0){
        throw new Error("The amount must be greater than 0");
    }
    if(unit === "percentage" && quantity >100){
        throw new Error("The percentage cannot be greater than 100")
    }

}

export function addComponent(

    recipeToChange: Recipe
,
    newComponent: ComponentInRecipe,

    allExistingRelationships: RecipeRelation[]

): Recipe{
    
    validateQuantity(newComponent.quantity, newComponent.unit);

    
    if(newComponent.quantity<= 0){
        throw new Error("The amount must be greater than 0")
    }


    const exists = recipeToChange.components.find(c => c.componentId === newComponent.componentId); 
    if (exists){
        throw new Error("The component already exists in this recipe");
    }


    const circularDependencyExists = isCircularyDependent(recipeToChange.recipeId, newComponent.componentId, allExistingRelationships)
    if(circularDependencyExists){
        throw new Error("Circular dependency detected")
    }

    
    return{
        ...recipeToChange,
        components: [...recipeToChange.components, newComponent]
        //Doesnt this return a list with all the components except the new one and then the lsit with the new one? isn't this redundancy?
    }
    
}





export function removeComponent(


): boolean{

return false;
}
