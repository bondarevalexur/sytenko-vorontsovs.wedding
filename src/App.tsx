import pre_image from "./assets/pare.jpg";
import hands from "./assets/hands.png";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const WeddingInvitation = () => {
  return (
    <div className="flex flex-col font-seawave items-center justify-center min-h-screen bg-grass-700 text-grass-500 p-8 relative">
      <h2 className="text-9xl font-seawave text-white font-semibold w-full text-right sm:text-6xl relative h-[200px] flex justify-center">
        <span className="absolute -top-[10px] left-[22vw] transform">M</span>
        <span className="absolute text-8xl top-[40px] left-[45vw] text-white text-opacity-50">
          &
        </span>
        <span className="absolute top-[20px] left-[58vw]">D</span>
        <h3 className="text-5xl font-bold text-white absolute text-opacity-50 top-[130px]">
          30/08
        </h3>
      </h2>
      <div className="bg-white relative shadow-lg rounded-lg p-8 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-left sm:text-6xl">
          WEDDING 2025
        </h1>
        <div className="flex items-center justify-center">
          <img alt="" src={hands} className="w-[250px]" />
        </div>

        <h2 className="text-3xl font-semibold text-right sm:text-6xl mb-[150px]">
          MARGARITA & DMITRY
        </h2>
        <div className="relative mt-[150px] overflow-hidden rounded">
          <img className="" alt="" src={pre_image} />
        </div>
        <p className="text-4xl font-bold font-alumniSansPinstripe">
          ЕДА - КОКТЕЙЛИ - ТАНЦЫ
        </p>
        <div className="flex flex-col text-left text-xl font-bold font-alumniSansPinstripe">
          <div className="grid grid-cols-[100px_1fr] border-y-grass-500 border-y-2 py-4 items-center space-y-1 col-span-2">
            <span className="font-semibold">ГДЕ:</span>
            <a
              className="hover:underline"
              target="_blank"
              href="https://yandex.ru/maps/10672/voronezh-oblast/house/pereulok_rovenki_2/Z0EYfwFhQUEAQFtrfXp1dHhkZA==/"
            >
              Загородный клуб «Барабара» пер. Ровенки, 2Б, село Девица
            </a>
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
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9220e7e054e6348ddba156cf687908bb5e716b496df249edc53113cd943bae2&amp;source=constructor"
          width="100%"
          height="405"
        />

        <table className="spacing m-auto" cellSpacing="15px" cellPadding="15px">
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr></tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td className="relative">
                <FavoriteBorderIcon className="absolute left-[6px] top-[8px] !w-[40px] !h-[40px] text-rose-100 text-opacity-60" />
                30
              </td>
              <td>31</td>
            </tr>
          </tbody>
        </table>

        <div className="grid gap-x-4 gap-y-24 grid-cols-[80px_1fr] mx-10 !mb-20">
          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <LocalBarIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            15:00 <br /> Сбор гостей
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <LocalBarIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            16:00 <br /> Церемония
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <LocalBarIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            17:00 <br /> Банкет
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            {/*<CakeSvg className="!h-16 !w-16 block" />*/}
            <LocalBarIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            20:00 <br /> Торт
          </p>
          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            {/*<CakeSvg className="!h-16 !w-16 block" />*/}
            <LocalBarIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            22:00 <br /> Завершение торжества
          </p>
        </div>
        <p className="text-sm">Заполни анкету гостя</p>
        <p className="text-sm">Все вопросы можно задать дальше организатору</p>
      </div>
    </div>
  );
};

export default WeddingInvitation;
