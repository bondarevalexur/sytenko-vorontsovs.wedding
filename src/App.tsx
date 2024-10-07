import pre_image from "./assets/pare.jpg";
import hands from "./assets/hands.png";

const WeddingInvitation = () => {
  return (
    <div className="flex flex-col font-seawave items-center justify-center min-h-screen bg-rose text-grass-500 p-8 relative">
      <h2 className="text-9xl font-seawave text-white font-semibold w-full text-right sm:text-6xl relative h-[200px] flex justify-center">
        <span className="absolute -top-[10px] left-[22vw] transform">M</span>
        <span className="absolute text-8xl top-[40px] left-[45vw] text-white text-opacity-50">
          &
        </span>
        <span className="absolute top-[10px]  left-[58vw]">D</span>
        <h3 className="text-5xl font-bold text-white absolute text-opacity-50 top-[130px]">
          30/08
        </h3>
      </h2>

      <div className="bg-white relative shadow-lg rounded-lg p-8 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-left mb-[80px] sm:text-6xl">
          WEDDING 2025
        </h1>
        <img
          alt=""
          src={hands}
          className="w-[40vw] left-[120px] absolute top-[60px] rounded"
        />
        <h2 className="text-3xl font-semibold text-right sm:text-6xl mb-[150px]">
          MARGARITA <br /> & DMITRY
        </h2>
        {/*<h3 className="text-5xl font-bold text-lime-700 pr-10 absolute top-[190px]">*/}
        {/*  30/08*/}
        {/*</h3>*/}
        <div className="relative mt-[150px] overflow-hidden rounded">
          <h1 className="font-alumniSansPinstripe flex items-center font-bold text-6xl text-white absolute top-0 left-0 w-full h-ful bg-rose-100 h-[700px] bg-opacity-70">
            Любовь навеки
          </h1>
          <img className="" alt="" src={pre_image} />
        </div>
        <p className="text-4xl font-bold font-alumniSansPinstripe">
          ЕДА - КОКТЕЙЛИ - ТАНЦЫ
        </p>
        <div className="flex flex-col text-left text-xl font-bold font-alumniSansPinstripe">
          <div className="grid grid-cols-[100px_1fr] border-y-grass-500 border-y-2 py-4 items-center space-y-1 col-span-2">
            <span className="font-semibold">ГДЕ:</span>
            <span>villa politica, 10 км, жилой комплекс усово, д. 8</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] border-b-grass-500 border-b-2 py-4 items-center space-y-1">
            <span className="font-semibold">КОГДА:</span>
            <span>30 августа / 18:00</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] border-b-grass-500 border-b-2 py-4 items-center space-y-1">
            <span className="font-semibold">ДРЕСС-КОД:</span>
            <div className="flex gap-2">
              <span className="block w-8 h-8 rounded-full bg-grass-500" />
              <span className="block w-8 h-8 rounded-full bg-grass-300" />
              <span className="block w-8 h-8 rounded-full bg-grass-400" />
              <span className="block w-8 h-8 rounded-full bg-rose" />
              <span className="block w-8 h-8 rounded-full bg-gray-500" />
            </div>
          </div>
          {/*<div className="grid grid-cols-[100px_1fr] border-b-grass-500 border-b-2 py-4 items-center space-y-1">*/}
          {/*  <span className="font-semibold">ВИШ-ЛИСТ:</span>*/}
          {/*  <span>жми скорее</span>*/}
          {/*</div>*/}
        </div>
        <p className="text-sm">Заполни анкету гостя</p>
        <p className="text-sm">Все вопросы можно задать дальше организатору</p>
      </div>
    </div>
  );
};

export default WeddingInvitation;
