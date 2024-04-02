
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Ng from "../../../assets/NG.png";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";
import { changeToggled } from "../../../Components/global/globalState";

const SendBank = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(changeToggled());
  }, 10000);
  const toggle = useSelector((state: any) => state.toggle);
  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };
  return (
    <div className="w-[82%] bg-white absolute  right-0 h-[100%] rounded-tl-[30px] md:rounded-tl-none sm:rounded-tl-none rounded-bl-[30px] md:rounded-bl-none sm:rounded-bl-none p-[20px] md:p-0 sm:p-0 sm:w-[100%] md:w-[100%] ">
      <div>
        <MobileSideBar />
      </div>

      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className={`w-full h-[100vh]  flex-col flex   items-center ${
          toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
        } `}
        onClick={() => {
          dispatch(changeToggled());
        }}
      >
        <header className="w-full py-3  text-xl font-extrabold text-[#40196D] flex justify-center items-center">
          Send to a Bank Account <img src={Ng} alt="Nigeria" width={30} />
        </header>
        <section className="w-[40%] min-h-[60%] border rounded-[10px] max-md:w-[90%]">
          <div
            className="w-full h-[12%] flex justify-start items-center p-5 cursor-pointer text-[#40196D] "
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft className="text-[#40196D]" /> Back
          </div>
          <header className="w-full h-[10%] flex justify-center items-center text-xl font-extrabold">
            New NGN Recipient
          </header>
          <section className="w-[100%] h-[25%] flex flex-col justify-center items-center">
            <div className="w-[90%] h-[80%]  flex justify-center items-start p-3 flex-col">
              <label htmlFor="">Bank</label>
              <select
                name=""
                id=""
                className="w-[95%] h-[80%] hover:cursor-pointer rounded-[6px] outline-none p-2 font-extrabold max-sm:h-[90%]"
              >
                <option selected>Select Bank</option>
                <option selected>Access Bank</option>
                <option selected>GTB</option>
                <option selected>Kuda</option>
              </select>
            </div>
          </section>
          <section className="w-[100%] h-[30%] flex flex-col justify-center items-center">
            <div className="w-[90%] h-[80%]  flex justify-center items-start p-3 flex-col">
              <label htmlFor="">Account Number</label>
              <input
                type="text"
                className="w-[95%] h-[80%] rounded-[6px] outline-none p-2"
                placeholder="1234567890"
              />
            </div>
          </section>
          <section className="w-[100%] h-[17%] flex justify-center items-center">
            <button className="w-[90%] h-[80%] bg-purple-500 text-white font-semibold rounded-[10px]">
              Next
            </button>
          </section>
        </section>
      </motion.div>
    </div>
  );
};

export default SendBank;
