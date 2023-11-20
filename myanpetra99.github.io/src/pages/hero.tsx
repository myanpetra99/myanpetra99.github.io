export default function Hero() {
  return (
    <section className="z-10 relative" id="Home">
      <svg width="0" height="0" style={{ display: "none" }}>
        <symbol id="underlinePathMobile" viewBox="0 0 300 5">
          <path
            d="M0,2.5 Q75,5 150,2.5 T300 2.5"
            fill="none"
            stroke="red"
            strokeWidth="2"
          ></path>
        </symbol>

        <symbol id="underlinePathDesktop" viewBox="0 0 600 5">
          <path
            d="M0,2.5 Q2,5 250,2.5 T350 2.5"
            fill="none"
            stroke="red"
            strokeWidth="2"
          ></path>
        </symbol>
      </svg>

      <div className="flex flex-col  w-screen h-[90vh] justify-center justify-items-start items-start bg-gradient-to-b from-[#06bad4]/25 via-[#06bad4]/25 via-blue-600/25 z-10 p-5">
        <div className="w-full md:p-32">
          <h1 data-aos="fade-right" className="font-poppins text-6xl md:text-7xl font-bold text-cyan-600 text-left my-3">
            Michael Yan Petra.
          </h1>
          <h2 className="font-poppins text-3xl text-blue-950 font-bold text-start my-3">
            A passionate{" "}
            <span id="underline">
              <div className="font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Software Developer
                </span>
              </div>
              <svg
                width="300"
                height="5"
                className="underline-svg underline-svg-mobile"
              >
                <use xlinkHref="#underlinePathMobile"></use>
              </svg>

              <svg
                width="400"
                height="5"
                className="underline-svg underline-svg-desktop"
              >
                <use xlinkHref="#underlinePathDesktop"></use>
              </svg>
            </span>{" "}
            with a flair for curiosity.
          </h2>
          <h3 className="font-caveat text-[2em] md:text-[2em] text-cyan-900 text-start my-3">
            over two years in web development, I started with node.js and
            vue.js. Lately, I've been drawn to React.js and Golang. 😄
          </h3>
        </div>
      </div>
    </section>
  );
}
