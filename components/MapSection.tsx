// Rôle SEO : embed Google Maps = confirmation NAP locale + signal de proximité géographique
export default function MapSection() {
  return (
    <section className="section-pad bg-white" aria-label="Localisation Repair Ninja Bastille">
      <div className="container-site mx-auto">
        <div className="text-center mb-10">
          <p className="text-ninja-red font-semibold uppercase tracking-widest text-sm mb-2">
            Nous trouver
          </p>
          <h2 className="text-ninja-dark mb-3">
            Repair Ninja — <span className="text-ninja-red">7 Rue de la Cerisaie</span>, Paris 4
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            À 2 min à pied de la station <strong>Bastille</strong> (Lignes 1, 5, 8).{' '}
            Parking Bastille à 3 min. Accès facile depuis le Marais, Paris 11 et Bercy.
          </p>
        </div>

        {/* Carte Google Maps en iframe */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
          <iframe
            title="Repair Ninja Bastille — 7 Rue de la Cerisaie, Paris 75004"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.108!2d2.367891!3d48.853252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671f5db9d70a5%3A0x3d40d2f0c68c84f!2s7%20Rue%20de%20la%20Cerisaie%2C%2075004%20Paris!5e0!3m2!1sfr!2sfr!4v1699900000000!5m2!1sfr!2sfr"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info pratiques sous la carte */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-ninja-light rounded-xl p-4 flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-bold text-ninja-dark text-sm">Adresse</p>
              <p className="text-gray-600 text-sm">
                7 Rue de la Cerisaie<br />75004 Paris
              </p>
            </div>
          </div>
          <div className="bg-ninja-light rounded-xl p-4 flex items-start gap-3">
            <span className="text-2xl">🚇</span>
            <div>
              <p className="font-bold text-ninja-dark text-sm">Métro</p>
              <p className="text-gray-600 text-sm">
                Bastille (Lignes 1, 5, 8)<br />2 min à pied
              </p>
            </div>
          </div>
          <div className="bg-ninja-light rounded-xl p-4 flex items-start gap-3">
            <span className="text-2xl">🕐</span>
            <div>
              <p className="font-bold text-ninja-dark text-sm">Horaires</p>
              <p className="text-gray-600 text-sm">
                Lun–Sam : 10h–19h<br />
                <span className="text-green-600 font-semibold">Dimanche : Fermé</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA directions */}
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=7+Rue+de+la+Cerisaie+Paris+75004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            🗺 Itinéraire Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
