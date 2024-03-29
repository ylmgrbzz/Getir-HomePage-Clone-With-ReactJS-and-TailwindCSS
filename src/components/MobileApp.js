export default function MobileApp() {
    return (
        <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app md:rounded-lg text-white">
            <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="font-semibold">
                    İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
                </p>
                <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img
                            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
                            className="md:h-8 lg:h-auto"
                        />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img
                            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
                            className="md:h-8 lg:h-auto"
                        />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img
                            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
                            className="md:h-8 lg:h-auto"
                        />
                    </a>
                </nav>
            </div>
        </div>
    );
}
