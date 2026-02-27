export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          BLACK BOOST PARTS
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-400">
          Антихром тюнинг для Ford и Toyota Camry XV50.  
          Премиальный внешний вид. Быстрая отправка по России.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+79055599153"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            📞 Позвонить
          </a>

          <a
            href="https://t.me/BlackBoostParts"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Telegram
          </a>

          <a
            href="https://vk.com/fordfocus_club"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            VK
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Основные направления
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Решётки радиатора</h3>
            <p className="text-zinc-400">
              Антихром решётки для Ford и Toyota Camry XV50.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Молдинги и накладки</h3>
            <p className="text-zinc-400">
              Премиальные элементы экстерьера в чёрном стиле.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Антихром комплекты</h3>
            <p className="text-zinc-400">
              Полный комплект для обновления внешнего вида автомобиля.
            </p>
          </div>
        </div>
      </section>

      {/* BUY BLOCK */}
      <section className="px-6 py-20 text-center border-t border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Где купить
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.avito.ru/brands/5d8ea72200de2195d1a7568ae8798337"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Avito
          </a>

          <a
            href="https://www.ozon.ru/seller/black-boost-parts/?miniapp=seller_3658317"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Ozon
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 py-10 border-t border-zinc-800">
        © {new Date().getFullYear()} BLACK BOOST PARTS  
        <div className="mt-2">
          Телефон: +7 905 559-91-53
        </div>
      </footer>
    </div>
  );
}