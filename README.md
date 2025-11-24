# Yvyralink - Linktree humilde

<div align="center">

<img src="https://drive.google.com/uc?export=view&id=1Xeh8QXsF7RsnKm6STWHAT_PkAg-qd7Xr" alt="Yvyralink" style="width:60%;height:auto;display:block;margin:0 auto;" />

</div>

### ¿Qué gua'u es esto?

Yvyralink _(cariñosamente Linktreen't)_ es un clon de Linktree _(de escasos recursos)_ desarrollado por el **Club de Programación FIUNA**. 

Su propósito es ofrecer un lugar claro y controlado donde centralizar enlaces importantes del club (formularios, Discord, GitHub, redes sociales, etc.).

### ¿Por qué gua'u hicimos esto?

Debido a su nueva política de publicidad más agresiva, al usar Linktree algunos alumnos se confundían con un gran botón que aparece en la interfaz que decía "Únete a cpfiuna en Linktree" (o similar). 

Ese botón dirige a la creación de una cuenta en Linktree y no al formulario de postulación del club. Muchos estudiantes terminaban creando cuentas en Linktree en lugar de completar el formulario correcto.

Este clon elimina esa ambigüedad: los enlaces personalizados llevan directamente a los recursos correctos (p. ej. el formulario de inscripción), sin CTAs externos que desvíen a los usuarios.

## Características

- Interfaz limpia y enfocada en links.
- Botón de copiar con detección de "presionar y mantener" para evitar copias accidentales en móviles.
- Iconos sociales estilizados y ordenables según la estrategia del club.
- Fácil personalización desde `src/pages/Index.tsx`.

## Agregar o quitar links

- `src/pages/Index.tsx`: archivo principal donde se definen los arrays de `socialLinks` y `links` y donde se encuentran los handlers de copia y estilos.

En este archivo simplemente hay que agregar un enlace al array de enlaces o de ser necesario un enlace al array de redes sociales.

Cuidando siempre de importar los íconos necesarios y/o eliminar los que están en desuso.

## Ejecutar

Instalá las dependencias y ejecutá el servidor de desarrollo:

```powershell
npm install
npm run dev
```

Abrí `http://localhost:5173` (o el puerto que indique Vite) en tu navegador.

## Construir

```powershell
npm run build
npm run preview
```

## Contribuir

1. Abre un issue describiendo tu propuesta o bug.
2. Haz un fork y crea una rama con cambios pequeños y claros.
3. Envía un Pull Request con descripción y pruebas si aplica.

## Visitanos

<head>
  <style>
    /* Minimal, neutral styling for embedding (keeps background transparent) */
    :root{--gap:10px}
    html,body{height:100%;margin:0;background:transparent}
    body{font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;color:inherit}
    .cpf-badges{display:flex;flex-wrap:wrap;gap:var(--gap);align-items:center;justify-content:center;padding:8px}
    .cpf-badges a{display:inline-block}
    .cpf-badges img{display:block;border:0;height:auto}
    /* Keep layout compact when embedded in small containers */
    @media (max-width:420px){.cpf-badges{gap:8px}}
  </style>
  </head>
  <body>
    <div class="cpf-badges" role="group" aria-label="CPF social links">
      <a href="https://instagram.com/cpfiuna" target="_blank" rel="noopener noreferrer" title="Instagram — cpf">
        <img src="https://img.shields.io/badge/Instagram-cpf?style=plastic&logo=instagram&logoColor=%23fafafa&labelColor=%23FF0069&color=%23FF0069" alt="Instagram: cpf" />
      </a>
      <a href="https://x.com/cpfiuna" target="_blank" rel="noopener noreferrer" title="X — cpf">
        <img src="https://img.shields.io/badge/X-cpf?style=plastic&logo=x&logoColor=%23fafafa&labelColor=%23000000&color=%23000000" alt="X: cpf" />
      </a>
      <a href="https://discord.gg/UtRpKw2ay4" target="_blank" rel="noopener noreferrer" title="Discord — cpf">
        <img src="https://img.shields.io/badge/Discord-cpf?style=plastic&logo=discord&logoColor=%23fafafa&labelColor=%235865F2&color=%235865F2" alt="Discord: cpf" />
      </a>
      <a href="https://youtube.com/@cpfiuna" target="_blank" rel="noopener noreferrer" title="YouTube — cpf">
        <img src="https://img.shields.io/badge/YouTube-cpf?style=plastic&logo=youtube&logoColor=%23fafafa&labelColor=%23FF0000&color=%23FF0000" alt="YouTube: cpf" />
      </a>
      <a href="https://www.linkedin.com/company/cpfiuna" target="_blank" rel="noopener noreferrer" title="LinkedIn — cpf">
        <img src="https://img.shields.io/badge/LinkedIn-cpf?style=plastic&logo=inspire&logoColor=%23FAFAFA&labelColor=%230A66C2&color=%230A66C2" alt="LinkedIn: cpf" />
      </a>
    </div>
    <div style="width:100%;text-align:center;margin-top:8px;">
      Visitá nuestra <a href="https://cpfiuna.io" target="_blank" rel="noopener noreferrer" title="Página web — cpf">página web</a> :)
    </div>
    
  </body>
