import { features, stats } from "../../static"

const Features = () => {
  return (
    <section id="features" className=" text-white px-6 py-6 md:py-10">
        <div className="container mx-auto">
            <div className="bg-main px-10 py-8 rounded-3xl shadow-[0px_15px_30px_rgba(46,73,54,0.50)]">
                <p data-aos="fade-down" className="text-xs uppercase tracking-widest text-emerald-300 mb-4">Nega Sof Mebel</p>
                <h1 data-aos="fade-down" className="text-xl md:text-5xl font-light mb-8 font-asosiy">
                    Sifat, uslub va qulaylik bir joyda
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    {features.map((feature) => {
                    const IconComponent = feature.icon
                    return (
                        <div
                        key={feature.id}
                        data-aos="zoom-in-up"
                        className="group border border-emerald-600/40 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-400/60 hover:bg-emerald-700/30 transition-all duration-500 cursor-pointer"
                        >
                        <div className="mb-3 inline-block p-2 bg-emerald-700/50 rounded-lg group-hover:bg-emerald-600/70 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-emerald-300" />
                        </div>
                        <h3 className="text-lg font-semibold text-emerald-300 mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-emerald-100/80 leading-relaxed group-hover:text-emerald-50 transition-colors duration-300">
                            {feature.description}
                        </p>
                        </div>
                    )
                    })}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-12 max-[600px]:grid-cols-1 max-[600px]:gap-2">
                    {stats.map((stat, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in-up"
                        className="border border-emerald-600/40 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-400/60 hover:bg-emerald-700/30 transition-all duration-500 text-center group"
                    >
                        <div className="text-3xl md:text-4xl font-light text-emerald-300 mb-2 group-hover:text-emerald-100 transition-colors duration-500">
                        {stat.value}
                        </div>
                        <div className="text-sm text-emerald-100/80 group-hover:text-emerald-50 transition-colors duration-300">
                        {stat.label}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
  )
}

export default Features