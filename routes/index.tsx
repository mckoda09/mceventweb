import type { Handlers } from "$fresh/server.ts";
import { cn } from "../utils/web.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    return new Response("301 LOL", {
      headers: {
        Location: "https://mckoda09.ru/",
      },
      status: 301,
      statusText: "LOL",
    });
  },
};

export default function Home() {
  return (
    <main>
      <div class="container p-7">
        <img src="/cup.png" alt="Cup" width={42} />
      </div>
      <div
        class={cn(
          "bg-gradient-to-t from-yellow-500/10 to-transparent",
          "",
        )}
      >
        <div class="container flex items-center justify-center px-7 py-24">
          <div class="text-center space-y-5">
            <div class="space-y-3">
              <div class="text-4xl font-semibold font-exo">
                Minecraft Турнир
              </div>
              <div>Все новости самого большого Minecraft Турнира в СНГ</div>
            </div>
            <div class="grid gap-3 grid-cols-2 w-fit mx-auto">
              <a
                href="https://discord.gg/minecraft-turnir-911259088837550180"
                class="px-3 py-2 rounded-xl bg-yellow-500 font-semibold md:hover:bg-yellow-600 transition-colors active:scale-95"
              >
                Discord
              </a>
              <a
                href="/support"
                class="px-3 py-2 rounded-xl text-yellow-500 font-semibold bg-yellow-500/10 md:hover:bg-yellow-500/20 transition-colors active:scale-95"
              >
                Поддержать
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
