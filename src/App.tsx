import pre_image from "./assets/pare.jpg";
import pre_1_image from "./assets/pare_1.png";
import pre_2_image from "./assets/pare_2.png";

const WeddingInvitation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose text-grass-500 p-8 relative">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-left mb-[80px] sm:text-6xl">
          СВАДЬБА 2025
        </h1>
        <img
          alt=""
          src={pre_1_image}
          className="w-[30vw] left-[7vw] sm:hidden absolute top-[50px]"
        />
        <img
          alt=""
          src={pre_2_image}
          className="w-[44vw] left-[7vw] hidden sm:block absolute top-[7vh] lg:w-[30vw]"
        />
        <h2 className="text-3xl font-semibold text-right sm:text-4xl">
          МАРГАРИТА <br /> & ДМИТРИЙ
        </h2>
        <h3 className="text-5xl font-bold text-lime-700 pr-10 text-right mb-[150px]">
          30/08
        </h3>
        <img alt="" src={pre_image} className="mt-[150px] relative z-50" />
        <p className="text-xl">ЕДА - КОКТЕЙЛИ - ТАНЦЫ</p>
        <div className="flex flex-col text-left text-lg">
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
