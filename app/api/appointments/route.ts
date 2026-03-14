// Rôle SEO : formulaire fonctionnel = engagement utilisateur + zéro taux de rebond = signal positif
import { NextRequest, NextResponse } from 'next/server'

interface AppointmentPayload {
  nom: string
  email: string
  telephone: string
  appareil: string
  marque: string
  panne: string
  creneau: string
  commentaire?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return /^(\+33|0)[1-9][\d\s]{7,8}$/.test(phone.replace(/\s/g, ''))
}

function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, '').slice(0, 500)
}

export async function POST(req: NextRequest) {
  try {
    const body: AppointmentPayload = await req.json()

    // ── Validation ──────────────────────────────────────────────────────────
    const errors: Record<string, string> = {}

    if (!body.nom?.trim()) errors.nom = 'Nom requis'
    if (!isValidEmail(body.email ?? '')) errors.email = 'Email invalide'
    if (!isValidPhone(body.telephone ?? '')) errors.telephone = 'Téléphone invalide'
    if (!body.appareil?.trim()) errors.appareil = 'Appareil requis'
    if (!body.marque?.trim()) errors.marque = 'Marque requise'
    if (!body.panne?.trim()) errors.panne = 'Panne requise'
    if (!body.creneau?.trim()) errors.creneau = 'Créneau requis'

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    // ── Données sanitisées ───────────────────────────────────────────────────
    const appointment = {
      id: `RDV-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      nom: sanitize(body.nom),
      email: sanitize(body.email),
      telephone: sanitize(body.telephone),
      appareil: sanitize(body.appareil),
      marque: sanitize(body.marque),
      panne: sanitize(body.panne),
      creneau: sanitize(body.creneau),
      commentaire: body.commentaire ? sanitize(body.commentaire) : '',
      boutique: 'Repair Ninja Bastille — 7 Rue de la Cerisaie, 75004 Paris',
    }

    // ── Simulation envoi email / CRM ─────────────────────────────────────────
    // En production : brancher sur Resend, SendGrid, Nodemailer, ou un CRM
    // Exemple avec Resend :
    // await resend.emails.send({
    //   from: 'rdv@repairninja.fr',
    //   to: ['contact@repairninja.fr'],
    //   subject: `Nouveau RDV — ${appointment.appareil} ${appointment.marque}`,
    //   html: `<h2>Nouveau rendez-vous</h2><pre>${JSON.stringify(appointment, null, 2)}</pre>`,
    // })

    console.log('[Repair Ninja] Nouveau RDV:', appointment)

    // ── Réponse succès ────────────────────────────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: 'Rendez-vous enregistré avec succès. Nous vous contacterons sous 30 minutes.',
        appointmentId: appointment.id,
        boutique: '7 Rue de la Cerisaie, 75004 Paris — Tél : 07.50.00.84.10',
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('[Repair Ninja] Erreur API appointments:', err)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur. Appelez le 07.50.00.84.10' },
      { status: 500 }
    )
  }
}

// Méthode GET — bloquée
export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 })
}
