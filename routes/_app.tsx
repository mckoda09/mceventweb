import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html class="bg-neutral-900 text-white">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Minecraft Турнир</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/cup.png" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
