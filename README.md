# Cartástrofe Landing

Landing page moderna para la app móvil **Cartástrofe**, construida con:

- Next.js (App Router + TypeScript)
- Tailwind CSS
- shadcn/ui

## Requisitos

- Node.js 20+
- npm 10+

## Empezar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Scripts

- `npm run dev` - entorno de desarrollo
- `npm run build` - build de producción
- `npm run start` - ejecutar build
- `npm run lint` - linting

## Docker (despliegue cloud)

El proyecto está dockerizado para producción con `Next.js standalone`.

- Puerto interno del contenedor: `3000`
- Puerto publicado por defecto: `3000:3000`

### Build de imagen

```bash
docker build -t cartastrofe-landing:latest .
```

### Ejecutar contenedor

```bash
docker run -d --name cartastrofe-landing -p 3000:3000 cartastrofe-landing:latest
```

### Usar Docker Compose

```bash
docker compose up -d --build
```

### Variables de entorno incluidas en runtime

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

### Despliegue en cualquier cloud

Puedes desplegar esta imagen directamente en proveedores que acepten contenedores (AWS ECS/Fargate, GCP Cloud Run, Azure Container Apps, DigitalOcean Apps, Render, Fly.io, etc.).

Solo necesitas exponer el puerto `3000` del contenedor.
