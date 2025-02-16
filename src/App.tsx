import pre_image from "./assets/pare.jpg";
import hands from "./assets/hands.png";

import LogoIcon from "./assets/icons/logo.svg";
import CakeIcon from "./assets/icons/cake.svg";
import CelebrationIcon from "./assets/icons/celebration-svgrepo-com.svg";
import DancingIcon from "./assets/icons/dancing-svgrepo-com.svg";
import SvgrepoIcon from "./assets/icons/wedding-svgrepo-com.svg";
import WeddingIcon from "./assets/icons/wedding-svgrepo.svg";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const WeddingInvitation = () => {
  return (
    <div className="flex flex-col font-seawave items-center justify-center min-h-screen bg-grass-700 text-grass-500 py-8 px-4 sm:px-8  relative">
      <LogoIcon className="mb-10" />

      <div className="bg-white relative shadow-lg rounded-lg w-full py-8 px-2 sm:px-8 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-left sm:text-6xl">
          WEDDING 2025
        </h1>
        <div className="flex items-center justify-center">
          <img alt="" src={hands} className="w-[250px]" />
        </div>

        <h2 className="text-3xl font-semibold text-right sm:text-6xl mb-[150px]">
          MARGARITA & DMITRY
        </h2>

        <h3 className="font-alumniSansPinstripe font-semibold !my-20 text-3xl sm:text-6xl">
          Родные и близкие, приглашаем вас на свадебное торжество!
        </h3>

        <table className="[&_td]:p-[8px] m-auto sm:[&_td]:p-[16px] mb-20">
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
                <FavoriteBorderIcon className="absolute left-[-4px] top-[1px] sm:left-[5px] sm:top-[9px] !w-[40px] !h-[40px] text-rose-100 text-opacity-60" />
                30
              </td>
              <td>31</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-alumniSansPinstripe font-semibold text-3xl sm:text-6xl mb-[150px]">
          Тайминг дня
        </h3>

        <div className="grid gap-x-4 gap-y-24 grid-cols-[64px_1fr] mx-10 !mb-20">
          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <CelebrationIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            14:30 <br /> Сбор гостей
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <SvgrepoIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            15:00 <br /> Церемония
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <DancingIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            16:00 <br /> Банкет
          </p>

          <span className="relative after:absolute after:block after:left-1/2 after:h-20 after:w-[1px] after:bg-grass">
            <CakeIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            20:30 <br /> Торт
          </p>
          <span className="relative">
            <WeddingIcon className="!h-16 !w-16 block" />
          </span>
          <p className="text-left text-2xl font-alumniSansPinstripe font-bold">
            22:00 <br /> Завершение торжества
          </p>
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
            <span>30 августа / 15:30</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] border-b-grass-500 border-b-2 py-4 items-center space-y-1">
            <span className="font-semibold">ДРЕСС-КОД:</span>
            <div className="flex gap-2">
              <span className="block w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-grass-500" />
              <span className="block  w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-grass-300" />
              <span className="block w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-grass-400" />
              <span className="block w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-rose" />
              <span className="block w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-gray-500" />
            </div>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9220e7e054e6348ddba156cf687908bb5e716b496df249edc53113cd943bae2&amp;source=constructor"
          width="100%"
          height="405"
        />

        <div className="text-2xl sm:text-4xl font-bold font-alumniSansPinstripe !my-20">
          <h3 className="text-3xl sm:text-5xl mb-4">Пожалуйста!</h3>
          <p className="mb-4">
            Не дарите нам цветы – сразу после свадьбы мы уедем в путешествие и
            не успеем насладиться их красотой и ароматом!
          </p>
          <p>
            Обратите внимание, что формат мероприятия не предполагает детской
            площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы
            провести этот вечер без детей.
          </p>
        </div>

        <h3 className="text-3xl sm:text-5xl font-alumniSansPinstripe">
          Просим подтвердить свое присутствие на торжестве до 15.08
        </h3>

        <div className="w-full overflow-hidden max-h-[700px] sm:max-h-[620px]">
          <script src="https://forms.yandex.ru/_static/embed.js"></script>
          <iframe
            className="-mb-[124px]"
            src="https://forms.yandex.ru/u/67adb862493639445be7145c/?iframe=1"
            frameBorder="0"
            name="ya-form-67adb862493639445be7145c"
            width="100%"
            height="900px"
          ></iframe>
        </div>

        <div className="text-xl font-bold font-alumniSansPinstripe sm:text-3xl !my-20">
          <p>
            По всем вопросам, связанным с трансфером, торжеством и сюрпризами,
            вы можете обращаться к нашему свадебному организатору/координатору
            <span className="text-3xl font-semibold block">
              {" "}
              Екатерина
              <a className="hover:text-grass-200" href="tel:+79681221573">
                {" "}
                +7 (968) 122-15-73
              </a>
            </span>
          </p>
        </div>

        <div className="relative mt-[150px] overflow-hidden rounded">
          <img className="" alt="" src={pre_image} />
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
