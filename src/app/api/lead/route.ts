import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, whatsapp, empresa, segmento, plano } = body;

    if (!email || !nome) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // Tenta persistir no Banco de Dados compartilhado
    try {
      await prisma.leadCapture.create({
        data: {
          nome: String(nome).trim(),
          email: String(email).trim().toLowerCase(),
          whatsapp: whatsapp ? String(whatsapp).trim() : null,
          empresa: empresa ? String(empresa).trim() : null,
          segmento: segmento ? String(segmento).trim() : null,
          plano: plano || "FREE",
          origem: "LANDING_PAGE",
        },
      });
    } catch (dbErr) {
      console.warn("[API Lead] Aviso ao gravar lead no banco:", dbErr);
      // Continua para não bloquear a experiência do usuário
    }

    return NextResponse.json({
      success: true,
      message: "Lead registrado com sucesso!",
    });
  } catch (error: any) {
    console.error("[API Lead] Erro no endpoint:", error);
    return NextResponse.json(
      { error: "Falha ao processar requisição." },
      { status: 500 }
    );
  }
}
