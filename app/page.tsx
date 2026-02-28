export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6">
          BLACK BOOST PARTS
        </h1>

        <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10">
          Антихром тюнинг для Ford и Toyota Camry.  
          Премиальный внешний вид. Быстрая отправка по России.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+79055599153"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Позвонить
          </a>

          <a
            href="https://t.me/BlackBoostParts"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Telegram
          </a>
        </div>
      </section>

      {/* ПЛАТФОРМЫ */}
      <section className="py-20 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-12">Мы на платформах</h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg text-zinc-400">
          <a href="https://vk.com/fordfocus_club" target="_blank" className="hover:text-white transition">
            VK
          </a>

          <a href="https://www.avito.ru/brands/5d8ea72200de2195d1a7568ae8798337" target="_blank" className="hover:text-white transition">
            Avito
          </a>

          <a href="https://www.ozon.ru/seller/black-boost-parts/?miniapp=seller_3658317" target="_blank" className="hover:text-white transition">
            Ozon
          </a>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-24 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-16">Почему выбирают нас</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-zinc-400">
          <div>
            <h3 className="text-xl text-white mb-3">Премиальный стиль</h3>
            <p>Антихром детали, которые меняют внешний вид автомобиля.</p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">Проверенные решения</h3>
            <p>Работаем с Ford и Toyota Camry XV50 рестайлинг.</p>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">Быстрая отправка</h3>
            <p>Оперативная обработка заказов и доставка по России.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Готов обновить внешний вид своего авто?
        </h2>

        <p className="text-zinc-400 mb-10">
          Свяжись с нами любым удобным способом.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+79055599153"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            +7 905 559 91 53
          </a>

          <a
            href="https://t.me/BlackBoostParts"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-800">
        © {new Date().getFullYear()} BLACK BOOST PARTS. Все права защищены.
      </footer>

    </div>
  );
}