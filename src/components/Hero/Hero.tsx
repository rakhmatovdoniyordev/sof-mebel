import { MdSearch } from "react-icons/md";
import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
      }
  return (
    <section id="hero" className="pb-10 pt-20">
      <div className="container mx-auto">
        <div className="mt-6 flex items-center gap-4 bg-[#f8efd3] px-6 pb-10 pt-6 rounded-2xl shadow-[0px_10px_20px_rgba(46,73,54,0.50)] max-[1284px]:flex-col">
          <div data-aos="fade-right" className="flex-1 flex flex-col gap-4">
            <h1 className="font-asosiy text-main font-bold text-5xl max-[478px]:text-3xl">
              Zamonaviy hayot uchun qulay va nafis mebellar
            </h1>
            <p className="text-[14px] text-gray-500 font-mono font-semibold max-[478px]:text-[12px]">
              Sof Mebel O'zbekistinning eng yaxshi mebel ishlab chiqaruvchi
              kompaniyalaridan biri. Bizning maqsadimiz mijozlarimizga sifatli,
              zamonaviy va qulay mebellar taqdim etishdir. Bizning
              mahsulotlarimiz uy va ofis uchun ideal tanlovdir, chunki ular
              nafaqat chiroyli ko'rinishga ega, balki uzoq muddat xizmat qiladi.
              Sof Mebel bilan siz o'zingizning uyingizni yoki ish joyingizni
              yanada go'zal va qulay qilish uchun eng yaxshi mebellarni
              tanlashingiz mumkin.
            </p>
            <form className="flex flex-col md:flex-row items-center gap-4 mt-8 max-[650px]:mt-4 max-[478px]:mt-2 max-[1284px]:justify-center" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Qidiruv..."
                className="
                w-full md:w-[350px]
                px-6 py-3
                rounded-full
                border-2 border-[#2E4936]
                bg-[#ECE7DC]
                text-[#2E4936]
                placeholder:text-[#7A7A7A]
                focus:outline-none
                focus:ring-4 focus:ring-[#2E4936]/30
                focus:shadow-lg
                transition-all duration-300 ease-in-out
                hover:border-[#3A5B43]
                hover:shadow-xl
                hover:scale-105
                "
              />
              <button
                type="submit"
                className="
                px-8 py-3
                rounded-full
                bg-gradient-to-r from-[#2E4936] to-[#3A5B43]
                text-[#ECE7DC]
                font-semibold
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                transition-transform duration-300 ease-in-out
                flex items-center gap-2
                "
              >
                Qidirish <MdSearch className="text-xl"/>
              </button>
            </form>
            <div className="flex items-center gap-8 mt-4 font-asosiy max-[620px]:gap-4 justify-center max-[485px]:flex-col max-[485px]:gap-1 max-[650px]:mt-0">
              <div className="flex flex-col items-center px-4 py-2 rounded-2xl bg-white/20 border-2 border-main text-main">
                <p className="text-[#d1bb32] font-bold text-xl">500+</p>
                <p className="max-[620px]:text-[12px]">Mahsulotlar</p>
              </div>
              <div className="flex flex-col items-center px-4 py-2 rounded-2xl bg-white/20 border-2 border-main text-main">
                <p className="text-[#d1bb32] font-bold text-xl">24/7</p>
                <p className="max-[620px]:text-[12px]">Qo'llab quvvatlash</p>
              </div>
              <div className="flex flex-col items-center px-4 py-2 rounded-2xl bg-white/20 border-2 border-main text-main">
                <p className="text-[#d1bb32] font-bold text-xl">10 kun</p>
                <p className="max-[620px]:text-[12px]">O'rtacha yetkazish</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex-1">
            <div className="w-full h-full flex items-center max-[1280px]:justify-center justify-end pr-10 max-[1280px]:pr-0 rounded-2xl">
              <img
                src={heroImg}
                alt="Hero Furniture Image"
                className="max-h-[500px] rounded-2xl shadow-[0px_10px_20px_rgba(46,73,54,0.50)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
