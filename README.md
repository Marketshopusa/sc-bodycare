# S&C Body Care - Tienda Online Premium de Péptidos de Investigación

**scbodycare** es una plataforma de comercio electrónico bilingüe premium y responsive diseñada específicamente para la distribución y gestión de péptidos liofilizados de investigación científica. Ofrece una experiencia de usuario fluida, soporte multilingüe integrado, un Panel de Administración robusto y un sistema dinámico de control de stock/inventario.

---

## 🚀 Características Clave

### 1. 🔒 Acceso Seguro al Panel de Administración
*   **Correos de Administrador Autorizados (Fijos)**:
    *   `scbodycare26@gmail.com`
    *   `carmen.arnaud@big-bargain-world.com`
    *   `marketshopusafl@gmail.com`
*   **Control de Acceso Dinámico**: Los enlaces del Panel Admin (menú superior en computadoras y un ícono de engranaje dorado en cabecera móvil) están ocultos por defecto y solo se muestran si el usuario inicia sesión con uno de los correos autorizados.
*   **Protección de Ruta Front-end**: Se incluye un script de redirección inmediata en `admin.html` que impide el acceso a usuarios no autorizados, enviándolos de vuelta a `index.html` de forma instantánea.

### 2. 📦 Control Dinámico de Inventario (Stock)
*   **Visualización en Catálogo**: Cada péptido o pack del catálogo muestra insignias personalizadas de inventario (`En Stock: X` o `Agotado`).
*   **Bloqueo de Agotados**: Si el stock llega a `0`, el botón de compra se deshabilita automáticamente tanto en el catálogo como en el modal detallado de producto.
*   **Límites de Selección**: El selector de cantidad limita al usuario a no poder agregar más unidades del stock disponible.
*   **Decremento de Stock en Checkout**: Al completar una compra a través del formulario de pago rápido, la plataforma envía una petición POST a la API `/api/products/purchase` para restar el stock en el backend en tiempo real.

### 3. 🌐 Soporte Multilingüe Integrado (Español / Inglés)
*   La aplicación completa (catálogo, filtros, botones, modal detallado de especificaciones, políticas, boletines y avisos legales) se traduce en tiempo real al hacer clic en el botón de idioma con la bandera del país correspondiente.

### 4. ⚖️ Blindaje Legal y Políticas
*   **Página de Políticas (`policies.html`)**: Incluye Aviso de Exclusión de Responsabilidad Médica, Políticas de Compra y Prevención de Fraudes, Políticas de Envío y Reembolsos (con reglas estrictas de bioseguridad, como no reembolsar viales abiertos y solicitar pruebas fotográficas de sellos intactos).
*   **Prevención de Abuso de Sustancias**: Sección dedicada que advierte sobre los peligros del abuso de fármacos y proporciona líneas de asistencia internacionales las 24 horas (como SAMHSA en EE. UU.).
*   **Aviso de Responsabilidad Global**: Pie de página detallado presente en todas las interfaces del sitio.

---

## 🛠️ Pila Tecnológica

*   **Backend**: Node.js & Express (Servidor REST local en puerto 3000 con persistencia en memoria para demostración).
*   **Frontend**: HTML5 Semántico, CSS3 Vanilla (Premium Responsive), Vanilla JavaScript.
*   **Iconografía y Tipografía**: Google Fonts (Inter & Playfair Display) y FontAwesome 6.4.0.

---

## 📂 Estructura del Proyecto

```text
scbodycare/
├── public/
│   ├── about.html          # Página "Sobre Nosotros" (Historia, estudios, calidad)
│   ├── admin.html          # Panel de Administración (Gestión de productos y stock)
│   ├── app.js              # Funciones compartidas (carrito, sesión, cabeceras)
│   ├── index.html          # Tienda principal (Landing page, catálogo, modal)
│   ├── login.html          # Pantalla de ingreso y registro con boletín automático
│   ├── policies.html       # Página legal (aviso médico, prevención de adicciones)
│   ├── styles.css          # Estilos CSS de alta fidelidad, animaciones y responsive
│   └── *.png/*.jpg         # Activos de imagen locales (viales oficiales de S&C)
├── server.js               # Servidor local Express y APIs (Auth, Productos, Compra)
├── package.json            # Configuración de dependencias del servidor Node.js
└── .gitignore              # Archivos excluidos del control de versiones
```

---

## 💻 Instalación y Ejecución Local

### Prerrequisitos
*   Tener instalado [Node.js](https://nodejs.org/) (Versión 16 o superior recomendada).

### Paso 1: Instalar dependencias
Abre tu terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### Paso 2: Iniciar el servidor local
Inicia la aplicación ejecutando:
```bash
npm start
```
O bien:
```bash
node server.js
```

### Paso 3: Abrir en el navegador
El servidor web local se levantará en:
[http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Gestión de Administradores

Si necesitas modificar, agregar o remover correos electrónicos de administradores, puedes hacerlo directamente editando el arreglo `ADMIN_EMAILS` ubicado en la parte superior del archivo `server.js`:

```javascript
const ADMIN_EMAILS = [
  'scbodycare26@gmail.com',
  'carmen.arnaud@big-bargain-world.com',
  'marketshopusafl@gmail.com'
  // Agrega nuevos correos aquí en minúsculas
];
```

Al registrarse o iniciar sesión con cualquiera de estos correos en `/login.html`, la aplicación le otorgará automáticamente acceso premium.
