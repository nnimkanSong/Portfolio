import React from "react";
import Image from "next/image";
const Footer: React.FC = () => {
    return (
        <footer
            id="contact"
            className="bg-[#151414] text-white z-1000 relative"
        >
            {/* CTA Section */}
            <div className="border-b border-[#373636] py-10 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Find us */}
                    <div
                        className="flex items-start gap-4"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <i className="fas fa-map-marker-alt text-[#B30000] text-3xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold">Find us</h4>
                            <span className="text-gray-400 text-sm">
                                Nathakon Nimkanchana, 263 Moo.5, Bang Khan, Ban Lamnao,
                                Nakhon Si Thammarat
                            </span>
                        </div>
                    </div>

                    {/* Call us */}
                    <div
                        className="flex items-start gap-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <i className="fas fa-phone text-[#B30000] text-3xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold">Call us</h4>
                            <span className="text-gray-400 text-sm">0809582001</span>
                        </div>
                    </div>

                    {/* Mail us */}
                    <div
                        className="flex items-start gap-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <i className="far fa-envelope-open text-[#B30000] text-3xl"></i>
                        <div>
                            <h4 className="text-lg font-semibold">Mail us</h4>
                            <span className="text-gray-400 text-sm">
                                66200345@kmitl.ac.th
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo & About */}
                    <div data-aos="fade-up" data-aos-delay="0">
                        <div className="mb-6">
                            <Image
                                src="/img/logo.png"   
                                alt="logo"
                                width={120}           
                                height={40}
                                className="w-max"
                                priority              
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-6 mb-4">
                            ติดตามอัปเดตผลงานและบทความใหม่ ๆ ได้ที่โซเชียลมีเดีย
                        </p>
                        <div>
                            <span className="block font-bold text-lg mb-4">Follow us</span>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/nathakon.nimkachana"
                                    className="w-10 h-10 rounded-full bg-[#3B5998] flex items-center justify-center text-white"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nathakon-nimkanchana/"
                                    className="w-10 h-10 rounded-full bg-[#55ACEE] flex items-center justify-center text-white"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="https://github.com/nnimkanSong"
                                    className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white text-[40px]"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Useful Links
                            <span className="absolute bottom-[-6px] left-0 w-12 h-[2px] bg-[#B30000]"></span>
                        </h3>
                        <ul className="flex gap-3 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-[#B30000]">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#resume" className="hover:text-[#B30000]">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="#portfolios" className="hover:text-[#B30000]">
                                    Portfolios
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#B30000]">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Subscribe (ถ้าอยากเปิดใช้งาน) */}
                    {/* <div data-aos="fade-up" data-aos-delay="200"> ... </div> */}
                    {/* <!-- Subscribe --> <div> <h3 className="text-lg font-semibold mb-6 relative inline-block"> Subscribe <span className="absolute bottom-[-6px] left-0 w-12 h-[2px] bg-[#B30000]"></span> </h3> <p className="text-gray-400 text-sm mb-6"> Don’t miss to subscribe to our new feeds, kindly fill the form below. </p> <form action="#" className="relative"> <input type="text" placeholder="Email Address" className="w-full py-3 px-5 bg-[#2E2E2E] border border-[#2E2E2E] text-white text-sm focus:outline-none" /> <button type="submit" className="absolute right-0 top-0 h-full px-5 bg-[#B30000] flex items-center justify-center"> <i className="fab fa-telegram-plane text-white text-xl transform -rotate-6"></i> </button> </form> </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
