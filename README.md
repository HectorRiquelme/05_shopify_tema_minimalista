# Tema Shopify Minimalista

Tema personalizado para Shopify Online Store 2.0 con estetica minimalista: colores neutros, tipografia limpia y espacios amplios. Basado en la estructura de Dawn.

**Autor:** Hector Riquelme

---

## Requisitos previos

- Node.js v18+
- Ruby (requerido por Shopify CLI en algunos sistemas)
- Cuenta de Shopify Partner (gratuita)
- Tienda de desarrollo

---

## 1. Crear cuenta de Shopify Partner

1. Ir a [partners.shopify.com](https://partners.shopify.com).
2. Hacer clic en **"Unirse ahora"**.
3. Completar el formulario con nombre, correo electronico y contrasena.
4. Confirmar el correo electronico recibido.
5. Completar el perfil del partner (tipo de negocio, etc.).

## 2. Crear tienda de desarrollo

1. En el panel de Partners, ir a **Tiendas** en el menu lateral.
2. Hacer clic en **"Agregar tienda"**.
3. Seleccionar **"Tienda de desarrollo"**.
4. Completar el nombre de la tienda y seleccionar el plan de desarrollo.
5. Elegir la region y configurar la contrasena de la tienda.
6. Hacer clic en **"Crear tienda de desarrollo"**.

## 3. Instalar Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

Verificar la instalacion:

```bash
shopify version
```

## 4. Usar este tema

Clonar o copiar esta carpeta a tu maquina local y posicionarse dentro:

```bash
cd 05_shopify_tema_minimalista
```

### Vista previa con hot reload

```bash
shopify theme dev --store tu-tienda.myshopify.com
```

Esto abrira un servidor local con hot reload. Cada cambio en los archivos Liquid, CSS o JS se reflejara automaticamente en el navegador.

### Subir el tema a la tienda

```bash
shopify theme push --store tu-tienda.myshopify.com
```

Para publicar como tema activo:

```bash
shopify theme push --store tu-tienda.myshopify.com --live
```

## 5. Configurar Shopify Payments en modo test

1. En el admin de la tienda, ir a **Configuracion > Pagos**.
2. Activar **Shopify Payments** (o Bogus Gateway para pruebas).
3. Hacer clic en **"Administrar"** en Shopify Payments.
4. Activar **"Modo de prueba"** (test mode).
5. Usar las tarjetas de prueba de Shopify:
   - **Visa aprobada:** `4242 4242 4242 4242`
   - **Visa rechazada:** `4000 0000 0000 0002`
   - Fecha de vencimiento: cualquier fecha futura.
   - CVV: cualquier numero de 3 digitos.
   - Nombre: cualquier nombre.

## 6. Crear Metafields de producto

Los metafields permiten agregar datos adicionales a cada producto.

1. En el admin de Shopify, ir a **Configuracion > Datos personalizados > Productos**.
2. Hacer clic en **"Agregar definicion"**.
3. Crear los siguientes metafields:

| Nombre    | Namespace y clave   | Tipo                     |
|-----------|---------------------|--------------------------|
| Material  | `custom.material`   | Texto de una linea       |
| Origen    | `custom.origen`     | Texto de una linea       |
| Cuidados  | `custom.cuidados`   | Texto de varias lineas   |

4. Al editar un producto, estos campos aparecen al final del formulario.

## 7. Crear Metaobjects para Reviews

Los metaobjects permiten crear una estructura de datos personalizada para reviews sin necesidad de apps externas.

### Paso 1: Crear el metaobject "review"

1. Ir a **Configuracion > Datos personalizados > Metaobjetos**.
2. Hacer clic en **"Agregar definicion"**.
3. Nombre: `review`.
4. Agregar los siguientes campos:

| Campo      | Tipo                           | Validacion     |
|------------|--------------------------------|----------------|
| autor      | Texto de una linea             | -              |
| rating     | Numero entero                  | Min: 1, Max: 5 |
| comentario | Texto de varias lineas         | -              |
| fecha      | Fecha                          | -              |
| producto   | Referencia de producto         | -              |

5. Guardar la definicion.

### Paso 2: Crear entradas de review

1. Ir a **Contenido > Metaobjetos > review**.
2. Hacer clic en **"Agregar entrada"**.
3. Completar autor, rating (1-5), comentario, fecha y seleccionar el producto.
4. Guardar.

### Paso 3: Vincular reviews al producto

1. Ir a **Configuracion > Datos personalizados > Productos**.
2. Agregar un metafield:
   - Nombre: `Reviews`
   - Namespace y clave: `custom.reviews`
   - Tipo: **Lista de referencias de metaobjeto** (tipo: review)
3. Al editar un producto, seleccionar las entradas de review correspondientes.

## 8. Personalizar el tema

1. En el admin de Shopify, ir a **Tienda online > Temas**.
2. Hacer clic en **"Personalizar"** en el tema Minimalista.
3. Desde el editor se puede configurar:
   - Colores principales, de botones y de texto.
   - Tipografia de titulares y cuerpo.
   - Logo, favicon y nombre de marca.
   - Redes sociales.
   - Barra de anuncios.
   - Contenido del hero banner, coleccion destacada, testimonios y newsletter.

---

## Estructura del tema

```
config/          - Configuracion del tema (settings_schema.json)
layout/          - Layout principal (theme.liquid)
templates/       - Templates JSON para cada tipo de pagina
sections/        - Secciones Liquid reutilizables
snippets/        - Fragmentos reutilizables (tarjeta producto, estrellas, iconos)
assets/          - CSS y JavaScript
locales/         - Traducciones (espanol por defecto)
```

## Secciones disponibles

- **Banner principal** - Hero banner configurable con imagen, texto y boton.
- **Coleccion destacada** - Muestra productos de una coleccion seleccionada.
- **Testimonios** - Tarjetas de testimonios con estrellas de valoracion.
- **Newsletter** - Formulario de suscripcion al boletin.
- **Informacion del producto** - Galeria, precio, opciones y boton de compra.
- **Metafields del producto** - Material, origen y cuidados.
- **Reviews del producto** - Opiniones basadas en metaobjects.
- **Grilla de coleccion** - Listado paginado con ordenacion.
