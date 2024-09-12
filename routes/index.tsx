export default function Home() {
  return (
    <main class="p-7">
      {/* <img
        src="https://crafatar.com/renders/head/ad879cc141714fac8b5c6129828cf232?overlay"
        alt="mckoda09"
      /> */}
      <img src="/cup.png" alt="Logo" width={48} />
      <div class="text-center p-24 space-y-3">
        <div class="text-3xl font-exo font-bold">Minecraft Турнир</div>
        <div>Все новости самого большого Minecraft Турнира в СНГ</div>
      </div>

      <div class="absolute right-0 bottom-0 p-3 text-sm text-neutral-500 flex gap-3">
        <div>webapp by mckoda09</div>
        <a href="https://github.com/mckoda09/mceventweb">github</a>
        <a href="/dashboard">dashboard</a>
      </div>
    </main>
  );
}
