// El componente no sabe "qué" muestra, solo "cómo" lo muestra.
export default function Presentation({ title, subtitle, items = [] }) {
  return (
    <section id="presentacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header - Ahora dinámico */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Usamos 'dangerouslySetInnerHTML' para poder pasar HTML en el título como "<span>" */}
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-['Dancing_Script']"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* Usamos 'dangerouslySetInnerHTML' para poder pasar HTML en el subtítulo como "<strong>" */}
          <p
            className="text-xl text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        {/* Grid de Items */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center
                         shadow-sm hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300"
            >
              {/* Contenedor del Icono */}
              <div className="inline-flex justify-center items-center 
                            rounded-full bg-blue-100 p-4 mb-5">

                {/* El Icono */}
                <item.icon
                  className="h-8 w-8 text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}