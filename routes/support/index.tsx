import { Header } from "../../components/Header.tsx";

export default function Support() {
  return (
    <main>
      <Header />

      <div class="p-7 space-y-3">
        <div class="text-3xl font-semibold font-exo">Поддержать нас</div>
        <div>Любая сумма поможет проекту!</div>
        <br />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div class="border p-5 flex flex-col gap-3 rounded-xl">
            <div class="text-lg">DonationAlerts</div>
            <a
              href="http://donationalerts.com/r/random4ikov"
              class="text-yellow-500"
            >
              http://donationalerts.com/r/random4ikov
            </a>
          </div>

          <div class="border p-5 flex flex-col gap-3 rounded-xl">
            <div class="text-lg">Сбербанк</div>
            <div class="text-yellow-500">4817 7602 2917 7104</div>
          </div>

          <div class="border p-5 flex flex-col gap-3 rounded-xl">
            <div class="text-lg">Т-Банк</div>
            <div class="text-yellow-500">5536 9139 4000 7657</div>
          </div>
        </div>
      </div>
    </main>
  );
}
