import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase-server";

type ServiceCode = "1" | "2" | "3" | "4" | "5" | "6" | string;

const SERVICE_LABEL: Record<ServiceCode, string> = {
  1: "Automatização de portões elétricos",
  2: "Cercas elétricas",
  3: "Alarmes",
  4: "Concertinas",
  5: "Câmeras (CFTV / IP)",
  6: "Reparos elétricos",
};

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;
const supabase = getSupabaseServerClient();
const BUCKET = "agendamentos";

function normalizeFolderName(value: string) {
  return (
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "cliente"
  );
}

async function uploadImages(clientName: string, files: File[]) {
  if (!supabase || files.length === 0) return [];

  console.log("Entrou no upload de imagens");

  const folder = normalizeFolderName(clientName);
  const publicUrls: string[] = [];

  for (const file of files) {
    const key = `agendamentos/cliente/${folder}/${randomUUID()}-${file.name}`;
    const { error } = await supabase.storage.from(BUCKET).upload(key, file, {
      cacheControl: "3600",
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

    if (error) {
      throw new Error(`Falha ao enviar imagem: ${error.message}`);
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(key);
    if (data?.publicUrl) publicUrls.push(data.publicUrl);
  }

  return publicUrls;
}

export async function POST(request: Request) {
  try {
    if (!resendClient) {
      return NextResponse.json(
        { error: "RESEND_API_KEY ausente." },
        { status: 500 },
      );
    }

    const formData = await request.formData();

    const requiredFields = [
      "name",
      "phone",
      "service",
      "street",
      "number",
      "neighborhood",
      "city",
      "state",
      "zipCode",
      "dateAndTime",
      "message",
      "urgency",
    ] as const;

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Campo obrigatório ausente: ${field}` },
          { status: 400 },
        );
      }
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim() as ServiceCode,
      street: String(formData.get("street") ?? "").trim(),
      number: String(formData.get("number") ?? "").trim(),
      complement: String(formData.get("complement") ?? "").trim(),
      neighborhood: String(formData.get("neighborhood") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      state: String(formData.get("state") ?? "").trim(),
      zipCode: String(formData.get("zipCode") ?? "").trim(),
      dateAndTime: String(formData.get("dateAndTime") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      urgency: String(formData.get("urgency") ?? "").trim(),
    };

    const files = formData
      .getAll("images")
      .filter((file): file is File => file instanceof File);

    const imageUrls = await uploadImages(payload.name, files);

    const serviceLabel = SERVICE_LABEL[payload.service] ?? payload.service;

    const dateDisplay = payload.dateAndTime
      ? new Date(payload.dateAndTime).toLocaleString("pt-BR")
      : "Não informado";

    const html = `
      <h2>Nova solicitação de orçamento</h2>
      <p><strong>Nome:</strong> ${payload.name}</p>
      <p><strong>Telefone:</strong> ${payload.phone}</p>
      <p><strong>Serviço:</strong> ${serviceLabel}</p>
      <p><strong>Urgência:</strong> ${payload.urgency}</p>
      <p><strong>Data/Hora desejada:</strong> ${dateDisplay}</p>
      <p><strong>Endereço:</strong> ${payload.street}, ${payload.number}${
        payload.complement ? ` - ${payload.complement}` : ""
      } - ${payload.neighborhood} - ${payload.city}/${payload.state} - CEP ${
        payload.zipCode
      }</p>
      <p><strong>Mensagem:</strong></p>
      <p>${payload.message}</p>
      ${
        imageUrls.length > 0
          ? `<p><strong>Imagens:</strong></p><ul>${imageUrls
              .map((url) => `<li><a href="${url}">${url}</a></li>`)
              .join("")}</ul>`
          : "<p><strong>Imagens:</strong> não anexadas</p>"
      }
    `;

    const text = `
Nova solicitação de orçamento
Nome: ${payload.name}
Telefone: ${payload.phone}
Serviço: ${serviceLabel}
Urgência: ${payload.urgency}
Data/Hora: ${dateDisplay}
Endereço: ${payload.street}, ${payload.number}${
      payload.complement ? ` - ${payload.complement}` : ""
    } - ${payload.neighborhood} - ${payload.city}/${payload.state} - CEP ${
      payload.zipCode
    }
Mensagem: ${payload.message}
Imagens: ${imageUrls.length > 0 ? imageUrls.join(", ") : "não anexadas"}
`.trim();

    const resendResponse = await resendClient.emails.send({
      from: "COIMCAMP <atendimento@contato.coimcamp.com>",
      to: ["atendimento@coimcamp.com", "gustavo.coimbracoimbra@gmail.com"],
      subject: `Orçamento - ${serviceLabel} (${payload.city})`,
      html,
      text,
    });

    if (resendResponse.error) {
      throw new Error(resendResponse.error.message);
    }

    return NextResponse.json({ ok: true, imageUrls });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao processar o pedido.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
