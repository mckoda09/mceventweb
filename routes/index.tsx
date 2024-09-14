import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <main>
      <Header />

      <div class="py-36 flex items-center justify-center p-7">
        <div class="space-y-9">
          <div class="space-y-5 text-center">
            <div class="flex justify-center">
              <div class="border rounded-full px-3 py-0.5 text-sm">с 2021</div>
            </div>
            <div class="text-4xl md:text-6xl font-semibold font-exo">
              Minecraft Турнир
            </div>
            <div class="text-sm md:text-lg">
              Новости крупнейшего Minecraft Турнира в СНГ
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 text-center px-5">
            <a
              href="https://discord.gg/minecraft-turnir-911259088837550180"
              class="flex items-center justify-center px-4 py-2 rounded-lg grow bg-yellow-500 text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              Дискорд
            </a>
            <a
              href="/support"
              class="flex items-center justify-center px-4 py-2 rounded-lg grow border border-yellow-500 text-yellow-500 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              Поддержать
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
