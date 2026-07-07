// src/app/api/escalar/route.ts
import { NextResponse } from 'next/server';
import { obtenerRecetaEscalada } from '@/services/recetaService';

export async function POST(request: Request) {
  const { idComponente, pesoObjetivo } = await request.json();
  
  try {
    const recetaEscalada = await obtenerRecetaEscalada(Number(idComponente), Number(pesoObjetivo));
    return NextResponse.json(recetaEscalada);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}