import React from "react";
import Link from "next/link";
import { Award, Edit2, Trash2 } from "lucide-react";

export interface IngredienteCalculado {
  idDetalle: number;
  idComponenteHijo: number;
  nombre: string;
  cantidadOriginal: number;
  unidad: string;
  porcentajePanadero: number;
  esPrincipal: boolean;
}

interface FichaTecnicaTablaProps {
  ingredientes: IngredienteCalculado[];
  pesoTotal: number;
  onEdit?: (ingrediente: IngredienteCalculado) => void;
  onDelete?: (idComponenteHijo: number, nombre: string) => void;
}

export function FichaTecnicaTabla({ ingredientes, pesoTotal, onEdit, onDelete }: FichaTecnicaTablaProps) {
  
  const totalPorcentaje = ingredientes.reduce((sum, ing) => sum + ing.porcentajePanadero, 0);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[rgba(139,111,78,0.2)] bg-card text-foreground">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[#8B6F4E] text-white text-xs uppercase tracking-wider">
          <tr>
            <th className="py-3 px-4">Insumo / Ingrediente</th>
            <th className="py-3 px-4 text-right">Gramaje (Peso)</th>
            <th className="py-3 px-4 text-right">% Panadero</th>
            {/* NUEVA COLUMNA PARA ACCIONES */}
            {(onEdit || onDelete) && <th className="py-3 px-4 text-center">Acciones</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-[rgba(139,111,78,0.1)]">
          {ingredientes.map((ing) => (
            <tr 
              key={ing.idDetalle} 
              className={`transition-colors hover:bg-[#FDF6EE]/50 ${
                ing.esPrincipal ? "bg-[#FDF6EE] font-medium" : ""
              }`}
            >
              <td className="py-3 px-4 flex items-center gap-2">
                {ing.esPrincipal && (
                  <span className="inline-flex items-center gap-1 text-xs bg-[#C4A882]/30 text-[#8B6F4E] px-1.5 py-0.5 rounded-full font-bold">
                    <Award className="w-3 h-3 text-primary" />
                    Base
                  </span>
                )}
                <Link href={`/ingredientes/${ing.idComponenteHijo}`} className="text-[#3D3229] hover:text-primary transition-colors underline decoration-primary/30">
                  {ing.nombre}
                </Link>
              </td>
              <td className="py-3 px-4 text-right font-mono text-[#3D3229]">
                {ing.cantidadOriginal.toLocaleString(undefined, { minimumFractionDigits: 1 })} g
              </td>
              <td className="py-3 px-4 text-right font-mono font-bold text-primary">
                {ing.porcentajePanadero}%
              </td>
              
              {/* BOTONES DE ACCIÓN */}
              {(onEdit || onDelete) && (
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    {onEdit && (
                      <button onClick={() => onEdit(ing)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Modificar cantidad">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    )}
                    {onDelete && (
                      <button onClick={() => onDelete(ing.idComponenteHijo, ing.nombre)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded-md transition-colors" title="Quitar de la receta">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-[#FDF6EE] font-bold border-t-2 border-primary/30">
            <td className="py-3 px-4 text-[#3D3229]">Peso Total de la Masa</td>
            <td className="py-3 px-4 text-right font-mono text-[#3D3229]">
              {pesoTotal.toLocaleString()} g
            </td>
            <td className="py-3 px-4 text-right font-mono text-[#8B6F4E] font-extrabold text-base">
              {totalPorcentaje.toLocaleString(undefined, { maximumFractionDigits: 1 })}%
            </td>
            {(onEdit || onDelete) && <td></td>}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}