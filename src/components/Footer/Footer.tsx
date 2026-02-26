import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer id="footer" className="bg-main overflow-hidden">
      <div className="container mx-auto">
        <div className="py-12 border-b flex justify-between  gap-4 max-[600px]:grid max-[600px]:grid-cols-2">
          <div className="flex flex-col gap-2 max-[600px]:border-b">
            <p className="text-xl">
              <span className="font-asosiy text-second">Sof</span>{" "}
              <span className="font-bold text-white">Mebel</span>
            </p>
            <p className="text-[#ece7dc] max-w-[250px]">
              Premium interyer uchun zamonaviy mebel yechimlari.
            </p>
          </div>
          <div className="max-[600px]:border-b max-[600px]:pb-4">
            <p className="text-[16px] font-semibold text-white mb-4">Do'kon</p>
            <ul className="flex flex-col gap-2 text-[#ece7dc]">
              <li>
                <a href="">Yotoqxona</a>
              </li>
              <li>
                <a href="">Oshxona</a>
              </li>
              <li>
                <a href="">Mehmonxona</a>
              </li>
              <li>
                <a href="">Ofis</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-white mb-4">
              Kompaniya
            </p>
            <ul className="flex flex-col gap-2 text-[#ece7dc]">
              <li>
                <a href="">Biz haqimizda</a>
              </li>
              <li>
                <a href="">Hunarmandchilik</a>
              </li>
              <li>
                <a href="">Barqarorlik</a>
              </li>
              <li>
                <a href="">Bog'lanish</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-white mb-4">Yordam</p>
            <ul className="flex flex-col gap-2 text-[#ece7dc]">
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Operator</a>
              </li>
              <li>
                <a href="">Xizmat uchun qo'llanma</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ece7dc]">
            © 2024 Sof Mebel. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center p-2 rounded-full border border-[#ece7dc] text-[#ece7dc] hover:bg-white/20"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center p-2 rounded-full border border-[#ece7dc] text-[#ece7dc] hover:bg-white/20"
            >
              <LuFacebook />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center p-2 rounded-full border border-[#ece7dc] text-[#ece7dc] hover:bg-white/20"
            >
              <LiaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
