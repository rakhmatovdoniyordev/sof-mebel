import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { furnitureData } from "../../static";

export default function Furniture() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ");
  };

  return (
    <section id="furniture" className="bg-white/40 py-8">
      <div className="container mx-auto">
        <div className="bg-[#f8efd3] rounded-2xl shadow-[0px_10px_20px_rgba(46,73,54,0.50)] p-4 md:p-6">
          <div className="mb-4">
            <div className="mx-auto max-w-7xl">
              <h1 className="text-2xl text-amber-600">Mebellar</h1>
              <div className="flex items-center justify-between">
                <p className="mt-2 text-xl text-gray-700 font-asosiy">
                  Zamonaviy va qulay mebel to'plamlari
                </p>
                <button className="px-3 py-2 rounded-3xl border-2 border-[#9c9c9c] text-gray-700 bg-white/40">
                  Barchasini ko'rish
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {furnitureData.map((item) => (
                  <div
                    key={item.id}
                    data-aos="zoom-out-up"
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
                  >
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        className="transition-transform duration-500 ease-out group-hover:scale-105 object-cover h-full w-full"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="absolute left-0 top-0 flex w-full items-start justify-between p-4">
                        {item.originalPrice > item.price && (
                          <div className="inline-flex items-center rounded-full bg-main px-3 py-1 text-sm font-medium text-white">
                            <span className="text-xs">
                              -
                              {Math.round(
                                ((item.originalPrice - item.price) /
                                  item.originalPrice) *
                                  100
                              )}
                              %
                            </span>
                          </div>
                        )}
                        {!item.inStock && (
                          <div className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
                            Sotilgan
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="absolute bottom-3 right-3 rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg flex justify-center items-center"
                        aria-label="Sevimli qo'shish"
                      >
                        {favorites.includes(item.id) ? (
                          <IoMdHeart
                            size={20}
                            className="transition-colors duration-300  text-red-500"
                          />
                        ) : (
                          <IoMdHeartEmpty
                            size={20}
                            className="transition-colors duration-300 text-gray-400"
                          />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 cursor-pointer">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-2xl font-light text-gray-900">
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                        <span className="text-xs text-gray-600 ml-auto">
                          so'm
                        </span>
                      </div>
                      <button
                        onClick={() => toggleCart(item.id)}
                        disabled={!item.inStock}
                        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                          item.inStock
                            ? cart.includes(item.id)
                              ? "bg-gray-900 text-white hover:bg-gray-800 active:scale-95"
                              : "border border-gray-900 text-gray-900 hover:bg-gray-200 active:scale-95"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <HiOutlineShoppingCart size={18} />
                        {item.inStock
                          ? cart.includes(item.id)
                            ? "Savatchada"
                            : "Savatchaga qo'shish"
                          : "Sotilgan"}
                      </button>
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center pointer-events-none">
                          <span className="text-lg font-medium text-gray-900">
                            Mavjud emas
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
