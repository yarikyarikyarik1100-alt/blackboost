export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        BLACK BOOST PARTS
      </h1>

      <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        Антихром тюнинг для Ford и Toyota Camry.
        Премиальный внешний вид. Быстрая отправка по России.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+79055599153"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
        >
          Позвонить
        </a>

        <a
          href="https://t.me/BlackBoostParts"
          target="_blank"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          Написать в Telegram
        </a>
      </div>
    </main>
  );
}