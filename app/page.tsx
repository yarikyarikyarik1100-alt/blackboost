export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">

      {/* HERO */}
      <section className="text-center px-6 py-28">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          BLACK BOOST PARTS
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10">
          Антихром тюнинг для Ford и Toyota Camry XV50.
          Премиальные детали. Быстрая отправка по России.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+79055599153" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition">
            Позвонить
          </a>
          <a href="https://t.me/BlackBoostParts" target="_blank" className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            Telegram
          </a>
        </div>
      </section>

      {/* ДЛЯ КАКИХ АВТО */}
      <section className="py-20 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-10">Для каких авто</h2>
        <div className="flex flex-wrap justify-center gap-8 text-zinc-400">
          <span>Ford Focus</span>
          <span>Ford Mondeo</span>
          <span>Toyota Camry XV50</span>
        </div>
      </section>

      {/* МИНИ-КАТАЛОГ */}
      <section className="py-24 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Популярные товары
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Карточка 1 */}
          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Решётка радиатора Camry XV50</h3>
            <p className="text-zinc-400 mb-6">
              Антихром стиль. Идеальная посадка.
            </p>
            <div className="flex gap-3">
              <a href="https://www.avito.ru/brands/5d8ea72200de2195d1a7568ae8798337" target="_blank" className="text-sm underline">
                Avito
              </a>
              <a href="https://www.ozon.ru/seller/black-boost-parts/?miniapp=seller_3658317" target="_blank" className="text-sm underline">
                Ozon
              </a>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Антихром молдинги</h3>
            <p className="text-zinc-400 mb-6">
              Премиальный внешний вид без лишнего хрома.
            </p>
            <div className="flex gap-3">
              <a href="https://www.avito.ru/brands/5d8ea72200de2195d1a7568ae8798337" target="_blank" className="text-sm underline">
                Avito
              </a>
              <a href="https://www.ozon.ru/seller/black-boost-parts/?miniapp=seller_3658317" target="_blank" className="text-sm underline">
                Ozon
              </a>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-3">Антихром комплект</h3>
            <p className="text-zinc-400 mb-6">
              Комплексное решение для обновления экстерьера.
            </p>
            <div className="flex gap-3">
              <a href="https://www.avito.ru/brands/5d8ea72200de2195d1a7568ae8798337" target="_blank" className="text-sm underline">
                Avito
              </a>
              <a href="https://www.ozon.ru/seller/black-boost-parts/?miniapp=seller_3658317" target="_blank" className="text-sm underline">
                Ozon
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* БЛОК ДОВЕРИЯ */}
      <section className="py-24 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-12">Почему выбирают BLACK BOOST</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-zinc-400">
          <div>✔ Премиальный антихром стиль</div>
          <div>✔ OEM посадка деталей</div>
          <div>✔ Быстрая отправка по России</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Подберём детали под ваш автомобиль
        </h2>
        <p className="text-zinc-400 mb-8">
          Напишите нам в Telegram или позвоните — проконсультируем.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+79055599153" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition">
            +7 905 559 91 53
          </a>
          <a href="https://t.me/BlackBoostParts" target="_blank" className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            Telegram
          </a>
        </div>
      </section>

    </div>
  );
}