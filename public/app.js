// --- MOCK DATABASE FALLBACK FOR STATIC HOSTING (LOVABLE.DEV) ---
const INITIAL_MOCK_PRODUCTS = [
  {
    "id": "prod-tirzepatide",
    "name": "Tirzepatide Peptide (Tratamiento de 3 Meses)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 295,
    "description": "Kit completo de Tirzepatide para investigación de 15mg, 20mg o 30mg. Tirzepatide es un péptido sintético que actúa como un agonista dual de los receptores GIP y GLP-1 para estudios de manejo de peso y metabolismo.",
    "image": "tirzepatide_3months.png",
    "promo": "Tratamiento 3 Meses",
    "benefits": [
      "Mejora notablemente el control glucémico y la respuesta insulínica.",
      "Promueve la pérdida de peso corporal de forma altamente efectiva.",
      "Incrementa significativamente la sensibilidad celular a la insulina.",
      "Apoya la salud metabólica integral y optimiza la composición corporal."
    ],
    "indications": [
      "Reconstituir el polvo liofilizado con agua estéril o bacteriostática.",
      "Agitar muy suavemente el vial con movimientos circulares hasta su disolución completa.",
      "Extraer la dosis utilizando una jeringa estéril de insulina de escala adecuada.",
      "Aplicar por vía subcutánea en la zona abdominal, muslos o brazos.",
      "Rotar el sitio de aplicación en cada inyección para evitar atrofias cutáneas."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación en laboratorio. Prohibido su consumo humano directo.",
      "Contraindicado en personas con antecedentes de hipersensibilidad al péptido o antecedentes familiares de carcinoma medular de tiroides (MTC).",
      "Mantener refrigerado de forma estricta entre 2°C y 8°C (36°F y 46°F)."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto se vende única y exclusivamente para propósitos de investigación científica y desarrollo en laboratorios. No está aprobado por la FDA para uso humano clínico, diagnóstico ni como suplemento alimenticio. La manipulación inadecuada puede conllevar riesgos de salud."
  },
  {
    "id": "prod-tirze-glp1",
    "name": "Tirze GLP-1 / GIP Agonist (Polvo Liofilizado)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 130,
    "description": "Péptido innovador de doble agonista GIP y GLP-1. Diseñado bajo estrictos estándares de alta pureza para estudios de optimización de composición corporal y control de apetito en laboratorios.",
    "image": "tirzepatide.png",
    "promo": "RESEARCH USE ONLY",
    "benefits": [
      "Reduces appetite and decreases caloric intake significantly.",
      "Improves insulin sensitivity and blood glucose control.",
      "Promotes healthy weight loss and body composition.",
      "Increases lean muscle mass and physical performance."
    ],
    "indications": [
      "Draw the prescribed dose with a syringe.",
      "Administer subcutaneously in the abdomen or thigh.",
      "Use according to the research protocol."
    ],
    "contraindications": [
      "For research use only. Not for human consumption.",
      "Refrigerate between 2°C and 8°C (36°F and 46°F)."
    ],
    "legal": "LEGAL NOTICE: This is a research peptide for laboratory use only. Not for human or animal consumption."
  },
  {
    "id": "prod-kisspeptin",
    "name": "Kisspeptin Peptide 10 mg (Fertilidad y Equilibrio)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 75,
    "description": "Kisspeptina liofilizada de alta pureza. Estimula de forma natural la secreción de hormona liberadora de gonadotropina (GnRH), aumentando los niveles de LH y FSH para el equilibrio hormonal.",
    "image": "kisspeptin.png",
    "promo": "Uso en Investigación",
    "benefits": [
      "Estimula la liberación natural de LH y FSH.",
      "Favorece el equilibrio y la regulación hormonal.",
      "Mejora la función reproductiva y apoya el manejo de fertilidad.",
      "Contribuye al bienestar general y recuperación física."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con agua bacteriostática (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo."
    ],
    "contraindications": [
      "Uso exclusivo en investigación. No apto para el consumo humano.",
      "Conservar refrigerado entre 2°C y 8°C.",
      "Evitar agitación violenta."
    ],
    "legal": "ADVERTENCIA: Producto para fines de investigación de laboratorio únicamente."
  },
  {
    "id": "prod-mots",
    "name": "Mots Mitochondrial Peptide 10 mg (Energía Celular)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "MOTS-c es un péptido de codificación mitocondrial que desempeña un papel clave en la regulación del metabolismo energético celular y la resistencia física.",
    "image": "mots.png",
    "promo": "Mitocondrial",
    "benefits": [
      "Mejora sustancialmente la sensibilidad a la insulina.",
      "Aumenta los niveles de energía celular y reduce la fatiga.",
      "Promueve la oxidación de ácidos grasos y composición corporal.",
      "Favorece la función mitocondrial y el metabolismo."
    ],
    "indications": [
      "Reconstituir con bacteriostático estéril.",
      "Agitar suavemente.",
      "Aplicar vía subcutánea en abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Refrigerar obligatoriamente entre 2°C y 8°C.",
      "Exclusivo para pruebas de investigación de laboratorio."
    ],
    "legal": "AVISO: Péptido de grado investigación. No apto para uso terapéutico o clínico humano."
  },
  {
    "id": "prod-promo-carnitine-ghk",
    "name": "Pack 2 Péptidos: L-Carnitine (600mg) + GHK-Cu (100mg)",
    "category": "Regeneración & Estética",
    "subcategory": "Packs",
    "price": 95,
    "description": "La combinación perfecta para la regeneración y el metabolismo de la grasa. L-Carnitina para quemar grasas y el péptido de cobre GHK-Cu para potenciar la firmeza de la piel.",
    "image": "carnitine_ghk.png",
    "promo": "Pack Especial",
    "benefits": [
      "Promueve la quema de grasa y metabolismo energético (L-Carnitine).",
      "Mejora la firmeza, elasticidad y tono de la piel (GHK-Cu).",
      "Apoya la regeneración celular y cicatrización.",
      "Propiedades antioxidantes and antiinflamatorias."
    ],
    "indications": [
      "Uso de laboratorio de acuerdo con los protocolos de investigación.",
      "Mantener almacenado bajo refrigeración constante entre 2°C y 8°C."
    ],
    "contraindications": [
      "Uso exclusivo en investigación. No para uso humano o cosmético directo."
    ],
    "legal": "ADVERTENCIA: Mezcla de investigación. No apta para la venta directa al consumidor para uso personal."
  },
  {
    "id": "prod-promo-2ghk",
    "name": "Pack Especial: 2 Viales GHK-Cu (100mg)",
    "category": "Regeneración & Estética",
    "subcategory": "Packs",
    "price": 85,
    "description": "Péptidos de cobre GHK-Cu de alta pureza. Diseñados para potenciar la firmeza, elasticidad y producción natural de colágeno en estudios dermatológicos.",
    "image": "ghk_cu.png",
    "promo": "El Péptido de Belleza",
    "benefits": [
      "Mejora la firmeza y elasticidad cutánea.",
      "Estimula la producción de colágeno y elastina.",
      "Poderosa actividad antioxidante celular.",
      "Mejora visiblemente la textura y tono de la piel."
    ],
    "indications": [
      "Uso exclusivo según el protocolo de investigación científica."
    ],
    "contraindications": [
      "No para consumo humano ni uso cosmético directo sin supervisión profesional."
    ],
    "legal": "AVISO LEGAL: Péptidos de investigación científica para laboratorios."
  },
  {
    "id": "prod-retatrutide",
    "name": "Retatrutide Peptide 40 mg (Triple Agonista)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 145,
    "description": "Retatrutide es un péptido de investigación de doble y triple agonista que actúa en los receptores GLP-1, GIP y glucagón (GCGR), diseñado para estudios avanzados de metabolismo y pérdida de peso.",
    "image": "retatrutide.png",
    "promo": "Triple Agonista",
    "benefits": [
      "Optimiza la oxidación de ácidos grasos y gasto energético.",
      "Aumenta sustancialmente la sensibilidad a la insulina.",
      "Promueve la pérdida de peso corporal de forma altamente efectiva.",
      "Estimula la secreción de incretinas naturales."
    ],
    "indications": [
      "Reconstituir el polvo liofilizado con agua estéril o bacteriostática.",
      "Agitar muy suavemente hasta su disolución completa.",
      "Extraer la dosis con jeringa estéril y aplicar por vía subcutánea."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación científica. Prohibido su consumo humano directo.",
      "Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto es un péptido químico destinado exclusivamente a pruebas de laboratorio in vitro."
  },
  {
    "id": "prod-bpc-tb",
    "name": "BPC 157 + TB500 Regenerative Peptides (Advanced Support)",
    "category": "Regeneración & Estética",
    "subcategory": "Packs",
    "price": 115,
    "description": "Una combinación potente de BPC-157 y TB-500 formulada para acelerar la reparación de tejidos, tendones, ligamentos y músculos en estudios de laboratorio.",
    "image": "bpc_tb.png",
    "promo": "Regeneración Avanzada",
    "benefits": [
      "Soporta la regeneración y cicatrización de tejidos blandos.",
      "Acelera la recuperación muscular después de daño o fatiga.",
      "Promueve la salud de tendones, ligamentos y articulaciones.",
      "Mejora la resistencia física y el rendimiento en investigación."
    ],
    "indications": [
      "Draw the prescribed dose with a sterile syringe.",
      "Administer subcutaneously in research protocols."
    ],
    "contraindications": [
      "For research use only. Keep refrigerated between 2°C and 8°C."
    ],
    "legal": "WARNING: This product is sold solely for laboratory research and development purposes."
  },
  {
    "id": "prod-tirzepatide-30mg",
    "name": "Tirzepatide Peptide 30 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 120,
    "description": "Tirzepatide liofilizado de alta pureza de 30 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios metabólicos y pérdida de peso en laboratorio.",
    "image": "tirzepatide_30mg.png",
    "promo": "Frasco 30 mg",
    "benefits": [
      "Mejora notablemente el control glucémico y la respuesta celular.",
      "Favorece la movilización de grasas y pérdida de peso.",
      "Aumenta la sensibilidad celular a la insulina de manera efectiva.",
      "Purity superior al 98% verificado por HPLC/MS."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar suavemente sin movimientos bruscos.",
      "Administrar subcutáneamente según el protocolo de investigación."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto es solo para propósitos de investigación científica."
  },
  {
    "id": "prod-epithalon",
    "name": "Epithalon Peptide 10 mg (Regulador de Telomerasa)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "Epithalon es un péptido sintético que actúa como regulador natural de la telomerasa, una enzima clave en el mantenimiento de la longitud de los telómeros para promover el envejecimiento saludable.",
    "image": "epithalon.png",
    "promo": "Envejecimiento Saludable",
    "benefits": [
      "Ayuda a mantener la longitud de los telómeros.",
      "Mejora la calidad del sueño y el descanso.",
      "Regula los ritmos circadianos.",
      "Fortalece el sistema inmunológico.",
      "Combate el estrés oxidativo.",
      "Promueve el envejecimiento saludable y la vitalidad."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea preferiblemente antes de dormir.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. No apto para el consumo humano.",
      "Conservar refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA DE INVESTIGACIÓN: Este péptido es vendido únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-retatrutide-15mg",
    "name": "Retatrutide Peptide 15 mg (Triple Agonista)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 95,
    "description": "Retatrutide es un péptido sintético triple agonista (GLP-1, GIP y glucagón) liofilizado de 15 mg para estudios avanzados de optimización metabólica y regulación de peso corporal.",
    "image": "retatrutide_15mg.png",
    "promo": "Triple Agonista 15 mg",
    "benefits": [
      "Mejora el control de los niveles de glucosa en sangre.",
      "Reduce el apetito y favorece la pérdida de peso corporal.",
      "Aumenta el gasto energético y la oxidación de grasas.",
      "Mejora la sensibilidad a la insulina.",
      "Apoya la salud metabólica y cardiovascular.",
      "Puede contribuir al bienestar general y la calidad de vida."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación de laboratorio. Prohibido su consumo humano directo.",
      "Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA: Este producto es un péptido de investigación destinado exclusivamente a pruebas científicas de laboratorio."
  },
  {
    "id": "prod-retatrutide-3months",
    "name": "Retatrutide Peptide (Tratamiento de 3 Meses)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Packs",
    "price": 350,
    "description": "Kit completo de Retatrutide para investigación de 3 meses en viales combinados (20mg, 30mg, 40mg). Triple agonista (GIP, GLP-1, Glucagón) diseñado para mejorar el control glucémico y la salud metabólica integral.",
    "image": "retatrutide_3months_pack.png",
    "promo": "Tratamiento 3 Meses",
    "benefits": [
      "Improves blood glucose control and insulin sensitivity.",
      "Promotes weight loss significantly and sustainably.",
      "Reduces appetite and increases satiety.",
      "Supports cardiovascular health and reduces metabolic risk.",
      "Supports healthy metabolism and long-term weight loss."
    ],
    "indications": [
      "Reconstitute the contents of the vial with bacteriostatic water.",
      "Gently shake the vial until the powder is completely dissolved.",
      "Draw the desired dose with a sterile syringe.",
      "Inject subcutaneously in the area as instructed.",
      "Rotate the injection site each time."
    ],
    "contraindications": [
      "For research use only. Not for human consumption.",
      "Storage: Refrigerate between 2°C and 8°C (36°F and 46°F)."
    ],
    "legal": "WARNING: This product is sold solely for laboratory research and development purposes."
  },
  {
    "id": "prod-tirzepatide-20mg",
    "name": "Tirzepatide Peptide 20 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 100,
    "description": "Tirzepatide liofilizado de alta pureza de 20 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios avanzados de control glucémico y pérdida de peso en laboratorio.",
    "image": "tirzepatide_20mg.png",
    "promo": "Frasco 20 mg",
    "benefits": [
      "Mejora el control glucémico de forma efectiva.",
      "Favorece la pérdida de peso corporal.",
      "Aumenta la sensibilidad celular a la insulina.",
      "Apoya la salud metabólica integral.",
      "Puede ayudar en el manejo de condiciones de sobrepeso y obesidad."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. No apto para consumo humano directo.",
      "Conservar refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA DE INVESTIGACIÓN: Este péptido es vendido únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-snap",
    "name": "SNAP Peptide 10 mg (Función Cognitiva)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "SNAP es un péptido sintético derivado de la proteína SNAP-25, involucrada en la regulación de la neurotransmisión y la señalización celular. Ideal para estudios de función cognitiva y recuperación nerviosa.",
    "image": "snap.png",
    "promo": "Soporte Cognitivo",
    "benefits": [
      "Apoya la función cognitiva, la memoria y el enfoque.",
      "Contribuye a mejorar el estado de ánimo y reducir el estrés.",
      "Favorece la recuperación y protección del sistema nervioso.",
      "Reduce la fatiga mental y mejora el rendimiento intelectual.",
      "Puede apoyar la salud cerebral y el bienestar general."
    ],
    "indications": [
      "1. Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "2. Agite suavemente hasta que el polvo se disuelva completamente.",
      "3. Extraiga la dosis prescrita con jeringa estéril.",
      "4. Aplique por vía subcutánea o intramuscular.",
      "5. Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. No apto para el consumo humano.",
      "Conservación: Refrigerar entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA: Este producto es un péptido de investigación destinado exclusivamente a pruebas científicas de laboratorio."
  },
  {
    "id": "prod-retatrutide-30mg",
    "name": "Retatrutide Peptide 30 mg (Triple Agonista)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 135,
    "description": "Retatrutide liofilizado de alta pureza de 30 mg. Actúa como triple agonista de los receptores GLP-1, GIP y glucagón (GCGR), estimulando la liberación natural de hormonas incretinas para investigación metabólica.",
    "image": "retatrutide_30mg.png",
    "promo": "Frasco 30 mg",
    "benefits": [
      "Mejora notablemente el control glucémico celular.",
      "Favorece la pérdida de peso de forma eficaz y sostenida.",
      "Aumenta la sensibilidad a la insulina celular.",
      "Apoya la salud metabólica integral y el gasto de energía.",
      "Puede ayudar en el manejo de condiciones de sobrepeso y obesidad."
    ],
    "indications": [
      "1. Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "2. Agite suavemente hasta que el polvo se disuelva completamente.",
      "3. Extraiga la dosis prescrita con jeringa estéril.",
      "4. Aplique por vía subcutánea en el abdomen o muslo.",
      "5. Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación de laboratorio. Prohibido su consumo humano directo.",
      "Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto es solo para propósitos de investigación científica."
  },
  {
    "id": "prod-cagrilintide",
    "name": "Cagrilintide Peptide 10 mg (Regulación del Apetito)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 85,
    "description": "Cagrilintide es un péptido de investigación sintético que actúa como agonista dual de los receptores amilina (AMY3) y calcitonina (CTR), diseñado para estudios de control de apetito y vaciamiento gástrico.",
    "image": "cagrilintide.png",
    "promo": "Dual Agonista Amilina",
    "benefits": [
      "Reduce el apetito y aumenta notablemente la saciedad celular.",
      "Ralentiza el vaciamiento gástrico para mejor regulación metabólica.",
      "Mejora el control glucémico general.",
      "Favorece la pérdida de peso corporal de manera sostenida.",
      "Mejora la sensibilidad a la insulina celular.",
      "Puede contribuir a la salud metabólica y cardiovascular."
    ],
    "indications": [
      "1. Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "2. Agite suavemente hasta que el polvo se disuelva completamente.",
      "3. Extraiga la dosis prescrita con jeringa estéril.",
      "4. Aplique por vía subcutánea en el abdomen o muslo.",
      "5. Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. No apto para el consumo humano.",
      "Conservación: Refrigerar entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA DE INVESTIGACIÓN: Este péptido es vendido únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-promo-ghk-lemon",
    "name": "Pack Especial: GHK-Cu (100mg) + Lemon Bottle (103.5mg)",
    "category": "Regeneración & Estética",
    "subcategory": "Packs",
    "price": 95,
    "description": "The Peptide of Beauty: A double pack combining GHK-Cu copper peptide for skin firmness and Lemon Bottle for localized fat reduction and skin remodeling studies.",
    "image": "ghk_lemon.png",
    "promo": "The Peptide of Beauty",
    "benefits": [
      "Improves skin firmness, elasticity and texture (GHK-Cu).",
      "Reduces localized fat and improves body definition (Lemon Bottle).",
      "Supports cellular regeneration, antioxidant and anti-inflammatory properties.",
      "Helps reduce cellulite and favors lymphatic drainage.",
      "Supports body remodeling with visible and progressive results."
    ],
    "indications": [
      "For laboratory research use only in accordance with research protocols.",
      "Keep stored under constant refrigeration between 2°C and 8°C."
    ],
    "contraindications": [
      "For research use only. Not for human or cosmetic consumption."
    ],
    "legal": "WARNING: This product is sold solely for laboratory research and development purposes."
  },
  {
    "id": "prod-b12",
    "name": "B12 Inyectable Subcutáneo (Cianocobalamina)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 60,
    "description": "La vitamina B12 (cianocobalamina) es esencial para el metabolismo energético, la formación de glóbulos rojos y el funcionamiento óptimo del sistema nervioso.",
    "image": "b12.png",
    "promo": "Inyectable Subcutáneo",
    "benefits": [
      "Apoya el metabolismo energético.",
      "Favorece la formación de glóbulos rojos.",
      "Contribuye al funcionamiento saludable del sistema nervioso.",
      "Puede ayudar a reducir la fatiga y debilidad asociada a deficiencias."
    ],
    "indications": [
      "Extraiga la dosis prescrita con jeringa.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Utilizar según protocolo de investigación."
    ],
    "contraindications": [
      "Uso exclusivo en investigación. No apto para el consumo humano.",
      "Conservación: Refrigerar entre 2°C y 8°C"
    ],
    "legal": "ADVERTENCIA DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-tirzepatide-40mg",
    "name": "Tirzepatide Peptide 40 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 125,
    "description": "Tirzepatide liofilizado de alta pureza de 40 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios avanzados de control glucémico y pérdida de peso en laboratorio.",
    "image": "tirzepatide_40mg.png",
    "promo": "Frasco 40 mg",
    "benefits": [
      "Mejora el control glucémico de forma altamente efectiva.",
      "Favorece la pérdida de peso corporal.",
      "Aumenta la sensibilidad celular a la insulina.",
      "Apoya la salud metabólica integral.",
      "Puede ayudar en el manejo de condiciones de sobrepeso y obesidad."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. No apto para consumo humano directo.",
      "Conservar refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA DE INVESTIGACIÓN: Este péptido es vendido únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-promo-tirze-lemon",
    "name": "Pack Especial: Tirzepatide + Lemon Bottle",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Packs",
    "price": 130,
    "description": "Your Ally for a Better Version of You: A double pack combining Tirzepatide (dual GIP/GLP-1 agonist) for metabolic control and Lemon Bottle for localized fat reduction and skin texture studies.",
    "image": "tirze_lemon.png",
    "promo": "Metabolic Remodeling",
    "benefits": [
      "Improves glycemic control and increases insulin sensitivity.",
      "Promotes weight loss and fat burning (Tirzepatide).",
      "Reduces localized fat and improves body definition (Lemon Bottle).",
      "Improves skin elasticity, texture and firmness.",
      "Supports healthy weight management with visible and progressive results."
    ],
    "indications": [
      "For laboratory research use only in accordance with research protocols.",
      "Keep stored under constant refrigeration between 2°C and 8°C."
    ],
    "contraindications": [
      "For research use only. Not for human or cosmetic consumption."
    ],
    "legal": "WARNING: This product is sold solely for laboratory research and development purposes."
  },
  {
    "id": "prod-glutatione-500mg",
    "name": "Glutatione 500 mg (Antioxidante Maestro)",
    "category": "Regeneración & Estética",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "El glutatión es un antioxidante maestro compuesto por tres aminoácidos: glutamato, cisteína y glicina. Su acción ayuda a proteger las células del daño oxidativo, fortalece el sistema inmunológico, favorece la desintoxicación hepática y contribuye a la salud de la piel y al envejecimiento saludable.",
    "image": "glutatione.png",
    "promo": "Antioxidante Maestro",
    "benefits": [
      "Potente antioxidante que protege las células.",
      "Favorece la desintoxicación hepática.",
      "Fortalece el sistema inmunológico.",
      "Mejora la salud de la piel y combate el envejecimiento.",
      "Reduce la inflamación and el estrés oxidativo.",
      "Apoya la función cerebral y el bienestar general."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea o intramuscular.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Refrigerar entre 2°C y 8°C.",
      "Producto de investigación - Alta pureza - Calidad garantizada.",
      "Uso exclusivo en investigación."
    ],
    "legal": "Uso exclusivo en investigación."
  },
  {
    "id": "prod-retatrutide-20mg",
    "name": "Retatrutide 20 mg (Vial Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 125,
    "description": "Retatrutide es un péptido sintético que actúa como agonista triple de los receptores GLP-1, GIP y glucagón (GCGR), estimulando la liberación natural de hormonas incretinas y regulando el metabolismo energético. Su acción contribuye a mejorar el control glucémico, favorecer la pérdida de peso y apoyar la salud metabólica.",
    "image": "retatrutide_20mg.png",
    "promo": "Vial Individual",
    "benefits": [
      "Mejora el control glucémico.",
      "Favorece la pérdida de peso.",
      "Aumenta la sensibilidad a la insulina.",
      "Apoya la salud metabólica.",
      "Puede ayudar en el manejo del sobrepeso y la obesidad."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Refrigerar entre 2°C y 8°C.",
      "Producto de investigación - Alta pureza - Calidad garantizada.",
      "Uso exclusivo en investigación."
    ],
    "legal": "Uso exclusivo en investigación."
  },
  {
    "id": "prod-cagrilintide-5mg",
    "name": "Cagrilintide 5 mg (Regulación del Apetito)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 80,
    "description": "Cagrilintide es un péptido sintético que actúa como agonista dual de los receptores amilina (AMY3) y calcitonina (CTR), imitando las acciones de estas hormonas para reducir el apetito, aumentar la sensación de saciedad, ralentizar el vaciamiento gástrico y mejorar el control glucémico. Puede ser útil en el manejo del peso corporal, la resistencia a la insulina y trastornos metabólicos relacionados.",
    "image": "cagrilintide_5mg.png",
    "promo": "Vial Individual",
    "benefits": [
      "Reduce el apetito y aumenta la saciedad.",
      "Ralentiza el vaciamiento gástrico.",
      "Mejora el control glucémico.",
      "Favorece la pérdida de peso corporal de manera sostenida.",
      "Mejora la sensibilidad a la insulina.",
      "Puede contribuir a la salud metabólica y cardiovascular."
    ],
    "indications": [
      "Reconstituya el contenido del frasco con bacteriostático (agua estéril).",
      "Agite suavemente hasta que el polvo se disuelva completamente.",
      "Extraiga la dosis prescrita con jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Rotar el sitio de aplicación cada vez."
    ],
    "contraindications": [
      "Refrigerar entre 2°C y 8°C.",
      "Producto de investigación - Alta pureza - Calidad garantizada.",
      "Uso exclusivo en investigación."
    ],
    "legal": "Uso exclusivo en investigación."
  },
  {
    "id": "prod-reta-glp3",
    "name": "Reta GLP-3 Agonista Triple (Polvo Liofilizado)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 130,
    "description": "Péptido innovador de triple acción agonista GLP-1, GIP y glucagón (GCGR). Diseñado bajo estrictos estándares de alta pureza para estudios de control de apetito, sensibilidad a la insulina y optimización del gasto energético en laboratorios.",
    "image": "reta.png",
    "promo": "RESEARCH USE ONLY",
    "benefits": [
      "Reduce el apetito y la ingesta calórica de manera efectiva.",
      "Apoya la pérdida de grasa y mejora la composición corporal.",
      "Aumenta la sensibilidad a la insulina y el equilibrio de la glucosa.",
      "Incrementa la energía y el bienestar general para un mejor rendimiento diario."
    ],
    "indications": [
      "Reconstituya el polvo liofilizado con agua estéril o bacteriostática.",
      "Agite muy suavemente hasta su disolución completa.",
      "Extraiga la dosis utilizando una jeringa estéril.",
      "Aplique por vía subcutánea en el abdomen o muslo.",
      "Utilizar según el protocolo de investigación científica."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación científica. Prohibido su consumo humano.",
      "Conservar refrigerado entre 2°C y 8°C (36°F y 46°F)."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto es un péptido químico destinado exclusivamente a pruebas de laboratorio in vitro y desarrollo científico."
  },
  {
    "id": "prod-tirzepatide-15mg",
    "name": "Tirzepatide Peptide 15 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 110,
    "description": "Tirzepatide liofilizado de alta pureza de 15 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios metabólicos y pérdida de peso en laboratorio.",
    "image": "tirzepatide.png",
    "promo": "Frasco 15 mg",
    "benefits": [
      "Mejora notablemente el control glucémico y la respuesta celular.",
      "Favorece la movilización de grasas y pérdida de peso.",
      "Aumenta la sensibilidad celular a la insulina de manera efectiva."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar suavemente sin movimientos bruscos.",
      "Administrar subcutáneamente según el protocolo de investigación."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto es solo para propósitos de investigación científica."
  },
  {
    "id": "prod-tirzepatide-50mg",
    "name": "Tirzepatide Peptide 50 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 125,
    "description": "Tirzepatide liofilizado de alta pureza de 50 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios avanzados de control glucémico y pérdida de peso en laboratorio.",
    "image": "tirzepatide.png",
    "promo": "Frasco 50 mg",
    "benefits": [
      "Mejora el control glucémico de forma altamente efectiva.",
      "Favorece la pérdida de peso corporal.",
      "Aumenta la sensibilidad celular a la insulina."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar suavemente sin movimientos bruscos.",
      "Administrar subcutáneamente según el protocolo de investigación."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto es solo para propósitos de investigación científica."
  },
  {
    "id": "prod-tirzepatide-60mg",
    "name": "Tirzepatide Peptide 60 mg (Frasco Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 135,
    "description": "Tirzepatide liofilizado de alta pureza de 60 mg. Actúa como un agonista dual de los receptores GIP y GLP-1 para estudios avanzados de control glucémico y pérdida de peso en laboratorio.",
    "image": "tirzepatide.png",
    "promo": "Frasco 60 mg",
    "benefits": [
      "Mejora el control glucémico de forma altamente efectiva.",
      "Favorece la pérdida de peso corporal.",
      "Aumenta la sensibilidad celular a la insulina."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar suavemente sin movimientos bruscos.",
      "Administrar subcutáneamente según el protocolo de investigación."
    ],
    "contraindications": [
      "Uso exclusivo en investigación científica. Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "ADVERTENCIA LEGAL: Este producto es solo para propósitos de investigación científica."
  },
  {
    "id": "prod-nad-500mg",
    "name": "NAD 500+ 500 mg (Energía Celular & Antienvejecimiento)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 75,
    "description": "Coenzima NAD+ (Nicotinamida Adenina Dinucleótido) liofilizada de 500 mg de alta pureza. Esencial para la producción de energía mitocondrial (ATP), reparación del ADN y activación de sirtuinas en estudios de longevidad celular.",
    "image": "b12.png",
    "promo": "NAD+ 500 mg",
    "benefits": [
      "Estimula la producción de energía celular y función mitocondrial.",
      "Apoya la reparación del ADN y los mecanismos antienvejecimiento celulares.",
      "Promueve la actividad de las sirtuinas para la salud metabólica.",
      "Optimiza la función cognitiva y protege contra el estrés oxidativo."
    ],
    "indications": [
      "Reconstituir con agua estéril o bacteriostática de forma suave.",
      "Evitar agitación brusca para no degradar el compuesto.",
      "Utilizar en protocolos de dosificación celular específicos."
    ],
    "contraindications": [
      "Exclusivo para uso de investigación en laboratorio. No apto para consumo humano.",
      "Mantener refrigerado entre 2°C y 8°C."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-ghkcu-100mg",
    "name": "GHK-Cu Peptide 100 mg (Vial Individual)",
    "category": "Regeneración & Estética",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "Péptido de cobre GHK-Cu de alta pureza (100 mg). Diseñado para estudios dermatológicos de firmeza, elasticidad y estimulación del colágeno en la piel.",
    "image": "ghk_cu.png",
    "promo": "Vial 100 mg",
    "benefits": [
      "Estimula la producción natural de colágeno y elastina.",
      "Mejora significativamente la firmeza y elasticidad cutánea.",
      "Promueve la cicatrización y regeneración de tejidos de la piel.",
      "Potente efecto antioxidante y antiinflamatorio celular."
    ],
    "indications": [
      "Reconstituir con agua estéril o bacteriostática.",
      "Administrar en protocolos dermatológicos de laboratorio."
    ],
    "contraindications": [
      "Uso exclusivo en investigación. Prohibido consumo humano directo.",
      "Conservar refrigerado a temperatura constante."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-lemon-bottle",
    "name": "Lemon Bottle Lipolytic Solution (Vial Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 60,
    "description": "Solución lipolítica premium Lemon Bottle de alta eficacia. Formulación coreana avanzada que combina bromelina, lecitina y riboflavina para estudios de reducción de tejido graso localizado y remodelación corporal.",
    "image": "cagrilintide.png",
    "promo": "Solución Lipolítica",
    "benefits": [
      "Acelera la descomposición de células grasas y facilita su eliminación.",
      "Favorece la circulación linfática para drenar lípidos.",
      "Mejora la elasticidad de la piel y reduce la celulitis.",
      "Resultados progresivos y visibles en modelado corporal de investigación."
    ],
    "indications": [
      "Extraer la solución estéril lista para usar directamente del vial.",
      "Aplicar en las zonas objetivo de investigación de grasa localizada."
    ],
    "contraindications": [
      "Solo para uso de investigación científica y laboratorio.",
      "Conservar en refrigeración."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-lipob",
    "name": "LIPOB Lipolytic Compound (Vial Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "Compuesto lipotrópico y lipolítico avanzado LIPOB. Diseñado para estudios de metabolismo acelerado de lípidos, degradación de grasa y optimización de la composición corporal.",
    "image": "mots.png",
    "promo": "Lipo Booster",
    "benefits": [
      "Favorece la movilización de grasas para su uso energético.",
      "Apoya la función metabólica y la reducción de tejido adiposo.",
      "Ayuda a mantener la masa muscular magra en estudios calóricos."
    ],
    "indications": [
      "Utilizar jeringa estéril de escala adecuada.",
      "Aplicar según el protocolo de pérdida de peso del laboratorio."
    ],
    "contraindications": [
      "Exclusivo para investigación. Mantener fuera del alcance de niños."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-bpc157-10mg",
    "name": "BPC 157 Peptide 10 mg (Vial Individual)",
    "category": "Regeneración & Estética",
    "subcategory": "Péptidos",
    "price": 80,
    "description": "Péptido Body Protection Compound-157 (BPC-157) liofilizado de 10 mg. Compuesto sintético investigado por sus potentes efectos en la curación, reparación de tejidos, regeneración de tendones, ligamentos y articulaciones.",
    "image": "epithalon.png",
    "promo": "Vial 10 mg",
    "benefits": [
      "Acelera la curación de tendones, ligamentos y fibras musculares.",
      "Promueve la angiogénesis y regeneración celular de tejidos blandos.",
      "Protege y cura el tracto gastrointestinal en estudios específicos.",
      "Reduce los procesos inflamatorios en tejidos lesionados."
    ],
    "indications": [
      "Reconstituir el polvo con agua bacteriostática.",
      "Extraer dosis con jeringa de insulina estéril.",
      "Aplicar por vía subcutánea en la zona del estudio."
    ],
    "contraindications": [
      "Uso de laboratorio únicamente. Conservar refrigerado entre 2°C y 8°C."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-glow70",
    "name": "Glow 70 Skin Booster (Vial Individual)",
    "category": "Regeneración & Estética",
    "subcategory": "Péptidos",
    "price": 135,
    "description": "Fórmula premium Glow 70 para la salud de la piel y regeneración estética. Compuesto por péptidos seleccionados y cofactores para estudios de rejuvenecimiento, textura de la piel y control del envejecimiento celular.",
    "image": "kisspeptin.png",
    "promo": "Skin Booster",
    "benefits": [
      "Incrementa de forma notable la luminosidad e hidratación celular.",
      "Reduce líneas de expresión y mejora la densidad cutánea.",
      "Estimula la renovación de células epidérmicas.",
      "Fortalece la barrera natural de la piel."
    ],
    "indications": [
      "Reconstituir con disolvente estéril bajo condiciones asépticas.",
      "Aplicar de acuerdo con el protocolo de rejuvenecimiento celular."
    ],
    "contraindications": [
      "Uso exclusivo de laboratorio. No apto para administración clínica directa."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-ipamorelin-10mg",
    "name": "Ipamorelin Peptide 10 mg (Vial Individual)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 75,
    "description": "Ipamorelin liofilizado de alta pureza de 10 mg. Péptido agonista selectivo del receptor de secretagogo de la hormona del crecimiento (GHS-R), estudiado para evaluar la liberación de GH, fuerza muscular y composición corporal.",
    "image": "kisspeptin.png",
    "promo": "Vial 10 mg",
    "benefits": [
      "Estimula de manera selectiva la secreción de hormona del crecimiento (GH).",
      "Promueve la síntesis proteica y el desarrollo muscular magro.",
      "Favorece la reducción de la grasa corporal y regeneración celular.",
      "Mejora la densidad ósea y acorta tiempos de recuperación física."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar de forma muy suave y aplicar vía subcutánea."
    ],
    "contraindications": [
      "Grado investigación. Conservar obligatoriamente bajo refrigeración."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-ipamorelin-70mg",
    "name": "Ipamorelin Peptide 70 mg (Vial Individual)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 75,
    "description": "Ipamorelin liofilizado de alta pureza en presentación de alta concentración (70 mg). Diseñado para protocolos de investigación a largo plazo o de dosificación intensiva sobre hormona de crecimiento.",
    "image": "kisspeptin.png",
    "promo": "Vial 70 mg",
    "benefits": [
      "Estimula de manera selectiva la secreción de hormona del crecimiento (GH).",
      "Promueve la síntesis proteica y el desarrollo muscular magro.",
      "Favorece la reducción de la grasa corporal y regeneración celular.",
      "Mejora la densidad ósea y acorta tiempos de recuperación física."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática.",
      "Agitar de forma muy suave y aplicar vía subcutánea."
    ],
    "contraindications": [
      "Grado investigación. Conservar obligatoriamente bajo refrigeración."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-l-carnitine",
    "name": "L-Carnitine 600 mg (Vial Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 65,
    "description": "L-Carnitina inyectable de alta pureza de 600 mg. Aminoácido clave que facilita el transporte de ácidos grasos de cadena larga a las mitocondrias para su posterior beta-oxidación y producción de energía (ATP).",
    "image": "glutatione.png",
    "promo": "L-Carnitine 600mg",
    "benefits": [
      "Acelera la oxidación de grasas y promueve la pérdida de peso.",
      "Incrementa el rendimiento físico y la producción de energía celular.",
      "Reduce la fatiga muscular y acelera la recuperación post-entrenamiento.",
      "Apoya la salud cardiovascular y mitocondrial."
    ],
    "indications": [
      "Extraer la dosis directamente del vial.",
      "Aplicar subcutánea o intramuscularmente según protocolo."
    ],
    "contraindications": [
      "Uso exclusivo en investigación. Mantener refrigerado."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-hcg2000",
    "name": "HCG 2000 IU (Gonadotropina Coriónica)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 60,
    "description": "Gonadotropina Coriónica Humana (HCG) liofilizada de 2000 UI de alta pureza. Glucoproteína hormonal utilizada en estudios de regulación del eje endocrino, fertilidad y equilibrio hormonal de laboratorio.",
    "image": "snap.png",
    "promo": "HCG 2000 UI",
    "benefits": [
      "Estimula la producción endógena de hormonas esteroideas.",
      "Apoya el equilibrio del eje endocrino hipotálamo-hipófisis-gónadas.",
      "Útil en estudios de fertilidad y estimulación folicular.",
      "Ayuda a mantener la función testicular durante protocolos de investigación."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática estéril.",
      "Administrar por vía subcutánea o intramuscular según diseño experimental."
    ],
    "contraindications": [
      "Exclusivo para investigación. Refrigerar estrictamente."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-lipoc-b12",
    "name": "LIPOC + B12 Lipotropic Compound (Vial Individual)",
    "category": "Metabolismo & Pérdida de Peso",
    "subcategory": "Péptidos",
    "price": 60,
    "description": "Fórmula lipotrópica combinada de LIPOC con Vitamina B12 (Cianocobalamina). Diseñada para estudios metabólicos sinérgicos que asocian la quema de grasa y el soporte energético celular.",
    "image": "b12.png",
    "promo": "Lipoc + B12",
    "benefits": [
      "Sinergia lipotrópica y vitamínica para optimizar la quema de grasa.",
      "Aumenta la energía mitocondrial y combate la fatiga en estudios.",
      "Apoya la desintoxicación y el correcto metabolismo hepático.",
      "Favorece la formación de glóbulos rojos y salud nerviosa."
    ],
    "indications": [
      "Extraer la cantidad requerida con jeringa estéril.",
      "Aplicar por vía subcutánea según el diseño de investigación."
    ],
    "contraindications": [
      "Producto de investigación científica. Mantener refrigerado."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  },
  {
    "id": "prod-cjc1295-10mg",
    "name": "CJC-1295 Peptide 10 mg (Sin DAC / DAC-Free)",
    "category": "Otros Péptidos",
    "subcategory": "Péptidos",
    "price": 85,
    "description": "Péptido CJC-1295 (sin DAC / DAC-Free) liofilizado de 10 mg de alta pureza. Análogo sintético de la hormona liberadora de hormona del crecimiento (GHRH) utilizado para investigar la secreción pulsátil de GH.",
    "image": "retatrutide.png",
    "promo": "CJC-1295 10mg",
    "benefits": [
      "Estimula la liberación constante y natural de GH celular.",
      "Favorece el desarrollo y tono muscular en estudios de composición.",
      "Acelera la recuperación celular y regeneración de tejidos.",
      "Mejora el metabolismo y ayuda en la oxidación de grasas."
    ],
    "indications": [
      "Reconstituir con agua bacteriostática estéril de forma muy suave.",
      "Extraer dosis con jeringa estéril de insulina.",
      "Aplicar subcutáneamente en muslo o abdomen."
    ],
    "contraindications": [
      "Grado investigación. Conservar refrigerado entre 2°C y 8°C."
    ],
    "legal": "AVISO DE INVESTIGACIÓN: Este producto se vende únicamente para propósitos de investigación in vitro y desarrollo científico."
  }
];

const originalFetch = window.fetch;

// Synchronously determine if we should use the mock DB based on current origin/port
const isStaticHost = window.location.hostname.includes('lovable') || 
                     window.location.hostname.includes('github.io') || 
                     window.location.hostname.includes('netlify') || 
                     window.location.hostname.includes('vercel') ||
                     (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') ||
                     (window.location.port !== '3000' && window.location.port !== '');

window.sc_use_mock_db = isStaticHost;

// Intercept window.fetch immediately and synchronously
window.fetch = function(resource, options) {
  const urlString = typeof resource === 'string' ? resource : (resource instanceof URL ? resource.toString() : (resource && resource.url ? resource.url : ''));
  
  if (urlString.includes('/api/')) {
    if (window.sc_use_mock_db) {
      return handleMockApi(urlString, options);
    }
    
    // Attempt real request, fall back to mock if it fails or returns 404/HTML
    return originalFetch(resource, options).then(response => {
      const contentType = response.headers.get('content-type') || '';
      if (!response.ok && (response.status === 404 || contentType.includes('text/html'))) {
        console.warn("[Mock DB] API returned 404/HTML. Switching to local mock database.");
        window.sc_use_mock_db = true;
        return handleMockApi(urlString, options);
      }
      return response;
    }).catch(err => {
      console.warn("[Mock DB] API request failed. Switching to local mock database:", err);
      window.sc_use_mock_db = true;
      return handleMockApi(urlString, options);
    });
  }
  
  return originalFetch(resource, options);
};

// Handle all mock API logic on the client side
async function handleMockApi(urlString, options) {
  const method = (options && options.method || 'GET').toUpperCase();
  const body = options && options.body ? (typeof options.body === 'string' ? JSON.parse(options.body) : options.body) : null;
  
  const escapeHTML = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, (m) => {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return m;
      }
    });
  };
  
  let pathname = '';
  try {
    const urlObj = new URL(urlString, window.location.origin);
    pathname = urlObj.pathname;
  } catch (e) {
    // Fallback if not a valid full URL
    pathname = urlString.startsWith('http') ? '/' + urlString.split('/').slice(3).join('/') : urlString;
    pathname = pathname.split('?')[0]; // Strip query params
  }
  
  // Normalize pathname to ensure it starts with /api
  if (!pathname.startsWith('/api') && pathname.includes('/api')) {
    pathname = pathname.substring(pathname.indexOf('/api'));
  }
  
  const getProducts = () => {
    let prods = localStorage.getItem('sc_db_products');
    if (!prods) {
      const initial = INITIAL_MOCK_PRODUCTS.map(p => {
        if (p.stock === undefined) p.stock = 25;
        return p;
      });
      localStorage.setItem('sc_db_products', JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(prods);
  };
  
  const saveProducts = (prods) => {
    localStorage.setItem('sc_db_products', JSON.stringify(prods));
  };
  
  const getUsers = () => {
    let users = localStorage.getItem('sc_db_users');
    return users ? JSON.parse(users) : [];
  };
  
  const saveUsers = (users) => {
    localStorage.setItem('sc_db_users', JSON.stringify(users));
  };
  
  const getEmails = () => {
    let emails = localStorage.getItem('sc_db_emails');
    if (!emails) {
      const initial = [
        {
          id: 'email-init',
          toName: 'Administrador',
          toEmail: 'sales@sc-bodycare.com',
          subject: 'Sistema Inicializado',
          body: 'El sistema de registro y mensajería de scbodycare está listo para su uso.',
          timestamp: new Date().toISOString()
        }
      ];
      localStorage.setItem('sc_db_emails', JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(emails);
  };
  
  const saveEmails = (emails) => {
    localStorage.setItem('sc_db_emails', JSON.stringify(emails));
  };
  
  const ADMIN_EMAILS = [
    'scbodycare26@gmail.com',
    'carmen.arnaud@big-bargain-world.com',
    'marketshopusafl@gmail.com'
  ];
  
  console.log(`[Mock DB] Handling request: ${method} ${pathname}`);
  
  // 1. GET /api/products
  if (pathname === '/api/products' && method === 'GET') {
    const products = getProducts();
    window.allProducts = products;
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 2. GET /api/products/:id
  if (pathname.startsWith('/api/products/') && pathname !== '/api/products/purchase' && method === 'GET') {
    const id = pathname.substring('/api/products/'.length);
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (product) {
      return new Response(JSON.stringify(product), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Producto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // 3. POST /api/admin/products
  if (pathname === '/api/admin/products' && method === 'POST') {
    const products = getProducts();
    const newProduct = {
      id: body.id || ('prod-' + Math.random().toString(36).substring(2, 11)),
      name: body.name,
      category: body.category,
      subcategory: body.subcategory,
      price: parseFloat(body.price) || 0,
      description: body.description,
      image: body.image || 'default.png',
      promo: body.promo || '',
      stock: body.stock !== undefined ? parseInt(body.stock) : 25,
      benefits: Array.isArray(body.benefits) ? body.benefits : [],
      indications: Array.isArray(body.indications) ? body.indications : [],
      contraindications: Array.isArray(body.contraindications) ? body.contraindications : [],
      legal: body.legal || ''
    };
    products.push(newProduct);
    saveProducts(products);
    return new Response(JSON.stringify({ message: "Producto creado", product: newProduct }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 4. PUT /api/admin/products/:id
  if (pathname.startsWith('/api/admin/products/') && method === 'PUT') {
    const id = pathname.substring('/api/admin/products/'.length);
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index > -1) {
      const existing = products[index];
      const updatedProduct = {
        ...existing,
        name: body.name !== undefined ? body.name : existing.name,
        category: body.category !== undefined ? body.category : existing.category,
        subcategory: body.subcategory !== undefined ? body.subcategory : existing.subcategory,
        price: body.price !== undefined ? parseFloat(body.price) : existing.price,
        description: body.description !== undefined ? body.description : existing.description,
        image: body.image !== undefined ? body.image : existing.image,
        promo: body.promo !== undefined ? body.promo : existing.promo,
        stock: body.stock !== undefined ? parseInt(body.stock) : existing.stock,
        benefits: Array.isArray(body.benefits) ? body.benefits : existing.benefits,
        indications: Array.isArray(body.indications) ? body.indications : existing.indications,
        contraindications: Array.isArray(body.contraindications) ? body.contraindications : existing.contraindications,
        legal: body.legal !== undefined ? body.legal : existing.legal
      };
      products[index] = updatedProduct;
      saveProducts(products);
      return new Response(JSON.stringify({ message: "Producto actualizado", product: updatedProduct }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Producto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // 5. DELETE /api/admin/products/:id
  if (pathname.startsWith('/api/admin/products/') && method === 'DELETE') {
    const id = pathname.substring('/api/admin/products/'.length);
    const products = getProducts();
    const filtered = products.filter(p => p.id !== id);
    saveProducts(filtered);
    return new Response(JSON.stringify({ message: "Producto eliminado" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 6. POST /api/products/purchase
  if (pathname === '/api/products/purchase' && method === 'POST') {
    const products = getProducts();
    const items = body.items || [];
    
    // Check stock
    for (const item of items) {
      const product = products.find(p => p.id === item.productId);
      if (!product) {
        return new Response(JSON.stringify({ error: `Producto con ID ${item.productId} no encontrado` }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      if (product.stock !== undefined && product.stock < item.quantity) {
        return new Response(JSON.stringify({ error: `Stock insuficiente para ${product.name}. Disponible: ${product.stock}` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    // Decrement stock
    for (const item of items) {
      const product = products.find(p => p.id === item.productId);
      if (product && product.stock !== undefined) {
        product.stock = Math.max(0, product.stock - item.quantity);
      }
    }
    
    saveProducts(products);
    window.allProducts = products;
    
    return new Response(JSON.stringify({ message: "Compra registrada y stock actualizado", products }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 7. POST /api/auth/register
  if (pathname === '/api/auth/register' && method === 'POST') {
    const users = getUsers();
    const email = body.email;
    const name = body.name;
    const password = body.password;
    
    if (users.some(u => u.email === email)) {
      return new Response(JSON.stringify({ error: "El correo ya está registrado" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const cleanName = escapeHTML(name);
    const newUser = { name: cleanName, email, password, isAdmin: ADMIN_EMAILS.includes(email) };
    users.push(newUser);
    saveUsers(users);
    
    const userResult = { name: cleanName, email, isAdmin: newUser.isAdmin };
    return new Response(JSON.stringify({ success: true, user: userResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 8. POST /api/auth/login
  if (pathname === '/api/auth/login' && method === 'POST') {
    const users = getUsers();
    const email = body.email;
    const password = body.password;
    
    let user = users.find(u => u.email === email && u.password === password);
    if (!user && ADMIN_EMAILS.includes(email) && password === 'admin123') {
      user = { name: "Administrador", email, isAdmin: true };
    }
    
    if (user) {
      const userResult = { name: user.name, email: user.email, isAdmin: user.isAdmin };
      return new Response(JSON.stringify({ success: true, user: userResult }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: "Credenciales incorrectas" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // 9. GET /api/admin/emails
  if (pathname === '/api/admin/emails' && method === 'GET') {
    const emails = getEmails();
    return new Response(JSON.stringify(emails), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 10. GET /api/admin/users
  if (pathname === '/api/admin/users' && method === 'GET') {
    const users = getUsers();
    const sanitized = users.map(u => ({ name: u.name, email: u.email, isAdmin: u.isAdmin }));
    return new Response(JSON.stringify(sanitized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 11. POST /api/contact
  if (pathname === '/api/contact' && method === 'POST') {
    const emails = getEmails();
    const cleanName = escapeHTML(body.name);
    const cleanEmail = escapeHTML(body.email);
    const cleanMessage = escapeHTML(body.message);

    emails.unshift({
      id: 'support-' + Math.random().toString(36).substring(2, 11),
      toName: 'S&C Support Team',
      toEmail: 'sales@sc-bodycare.com',
      fromName: cleanName,
      fromEmail: cleanEmail,
      subject: `Support: Message from ${cleanName}`,
      body: `<h3>Consulta de Soporte Recibida</h3>
             <p><strong>Nombre del Cliente:</strong> ${cleanName}</p>
             <p><strong>Correo del Cliente:</strong> ${cleanEmail}</p>
             <p><strong>Mensaje / Consulta:</strong></p>
             <div style="background:#f9f9f9; padding:15px; border-left:4px solid #D4AF37; border-radius:4px;">
               ${(cleanMessage || '').replace(/\n/g, '<br>')}
             </div>`,
      timestamp: new Date().toISOString()
    });
    saveEmails(emails);
    
    return new Response(JSON.stringify({ message: "Mensaje de contacto registrado" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response(JSON.stringify({ error: 'Endpoint mock no implementado' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
// --- END OF MOCK DATABASE FALLBACK ---

// Funcionalidad compartida en el cliente para scbodycare

// Gestión de Carrito de Compras
let cart = JSON.parse(localStorage.getItem('sc_cart')) || [];

function saveCart() {
  localStorage.setItem('sc_cart', JSON.stringify(cart));
  updateCartCountHeader();
}

function addToCart(productId, name, price, quantity = 1, type = 'regular') {
  // Comprobar si el producto ya existe en el carrito con el mismo tipo de compra
  const existingItemIndex = cart.findIndex(item => item.productId === productId && item.type === type);
  
  let availableStock = 999;
  if (window.allProducts) {
    const p = window.allProducts.find(prod => prod.id === productId);
    if (p && p.stock !== undefined) {
      availableStock = p.stock;
    }
  }

  if (existingItemIndex > -1) {
    const newQty = cart[existingItemIndex].quantity + parseInt(quantity);
    if (newQty > availableStock) {
      cart[existingItemIndex].quantity = availableStock;
      const lang = localStorage.getItem('lang') || 'es';
      showToast(lang === 'en' ? `Limited to available stock (${availableStock})` : `Limitado al stock disponible (${availableStock})`);
    } else {
      cart[existingItemIndex].quantity = newQty;
    }
  } else {
    const finalQty = Math.min(parseInt(quantity), availableStock);
    cart.push({
      productId,
      name,
      price: parseFloat(price),
      quantity: finalQty,
      type
    });
  }
  
  saveCart();
  const lang = localStorage.getItem('lang') || 'es';
  const purchaseTypeStr = type === 'autoship' ? (lang === 'en' ? 'Autoship' : 'Autoship') : (lang === 'en' ? 'One-time Purchase' : 'Compra Única');
  showToast(lang === 'en' ? `Added to cart: ${name} (${purchaseTypeStr})!` : `¡Agregado al carrito: ${name} (${purchaseTypeStr})!`);
  
  // Disparar evento para actualizar la página del carrito si está abierta
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId, type) {
  cart = cart.filter(item => !(item.productId === productId && item.type === type));
  saveCart();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? "Item removed from cart" : "Artículo eliminado del carrito");
  window.dispatchEvent(new Event('cartUpdated'));
}

function clearCart() {
  cart = [];
  saveCart();
  window.dispatchEvent(new Event('cartUpdated'));
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartCountHeader() {
  const count = getCartCount();
  
  const cartBadge = document.getElementById('cart-badge-count');
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  
  const mobileCartBadge = document.getElementById('mobile-cart-badge-count');
  if (mobileCartBadge) {
    mobileCartBadge.textContent = count;
    mobileCartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  
  const mobileTabCartBadge = document.getElementById('mobile-tab-cart-badge');
  if (mobileTabCartBadge) {
    mobileTabCartBadge.textContent = count;
    mobileTabCartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

// Mostrar notificaciones Toast Premium
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="fa fa-check-circle" style="color: #D4AF37; margin-right: 8px;"></i> ${message}`;
  toast.style.display = 'block';
  
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

// Sesión de Usuario
let currentUser = JSON.parse(localStorage.getItem('sc_user')) || null;

function loginUser(user) {
  localStorage.setItem('sc_user', JSON.stringify(user));
  currentUser = user;
  updateUserHeader();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? `Welcome, ${user.name}!` : `¡Bienvenido/a, ${user.name}!`);
}

function logoutUser() {
  localStorage.removeItem('sc_user');
  currentUser = null;
  updateUserHeader();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? "Session closed" : "Sesión cerrada");
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

function updateUserHeader() {
  const loginLink = document.getElementById('nav-login-link');
  if (loginLink) {
    const lang = localStorage.getItem('lang') || 'es';
    if (currentUser) {
      const greeting = lang === 'en' ? 'Hello' : 'Hola';
      const logoutText = lang === 'en' ? 'Logout' : 'Salir';
      loginLink.innerHTML = `<i class="fa fa-user" style="color:#D4AF37;"></i> ${greeting}, ${currentUser.name} | <a href="#" onclick="logoutUser(); return false;" style="margin-left: 5px; color: #8E959A; font-weight: normal;">${logoutText}</a>`;
    } else {
      const loginText = lang === 'en' ? 'Login / Register' : 'Ingresar / Registrarse';
      loginLink.innerHTML = `<a href="login.html"><i class="fa fa-user"></i> ${loginText}</a>`;
    }
  }

  // Show or hide admin panel links dynamically
  const adminLinks = document.querySelectorAll('.admin-panel-link');
  adminLinks.forEach(link => {
    if (currentUser && currentUser.isAdmin) {
      if (link.tagName === 'A' && link.id === 'mobile-admin-panel-link') {
        link.style.display = 'inline-flex';
      } else {
        link.style.display = 'inline-block';
      }
    } else {
      link.style.display = 'none';
    }
  });
}

// Inicializar elementos comunes al cargar
document.addEventListener('DOMContentLoaded', () => {
  updateCartCountHeader();
  updateUserHeader();
  
  // Agregar FontAwesome de forma dinámica para iconos premium
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fontAwesomeLink);
  }
});
