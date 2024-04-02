import { IoCopy } from "react-icons/io5";
import image from "../../../../public/vite.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import { GoSponsorTiers } from "react-icons/go";
import OptionII from "./OptionII";
import { FaAddressCard, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { PiCardsFill } from "react-icons/pi";
import { TbMessageReport } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";
import { changeToggled, logOut } from "../../../Components/global/globalState";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Account = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(changeToggled());
  }, 10000);

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
        className={`w-full min-h-[100vh] flex flex-col items-center  ${
          toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
        }`}
        onClick={() => {
          dispatch(changeToggled());
        }}
      >
        <div className="my-1 text-[#40196D] font-bold text-[20px]">Account</div>
        <div className="my-3" />
        <div className="w-[75%] max-md:w-[95%] border border-gray-100 flex flex-col items-center min-h-[80vh] rounded-lg ">
          <div className="w-full min-h-[150px]  flex items-center justify-center">
            <div className="w-[95%] h-full flex items-center justify-between max-lg:flex-col">
              <div className="w-[40%] max-lg:w-full flex justify-between items-center  ">
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="Profile"
                    className="w-[80px] max-w-[65px] max-h-[65px] h-[80px] rounded-full border border-[gray]"
                  />
                  <div className="ml-4 font-bold">
                    <div className="leading-[1.2] my-1">
                      <div>Kossyrisochukwu</div>
                      <div>Uzoigwe</div>
                    </div>
                    <div className="my-2">
                      <div className="leading-[1.1] font-extralight">
                        <div className="text-[13px] text-[#40196D]">
                          Copy username
                        </div>
                        <CopyToClipboard
                          text="@francisuzoigwe"
                          onCopy={handleCopy}
                        >
                          <button className="flex items-center text-[16px] text-[#40196D]">
                            <IoCopy className="mr-1 text-[#40196D]" />
                            @francisuzoigwe
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="leading-[1.1] font-extralight">
                        <div className="text-[13px] text-[#40196D]">
                          Copy account
                        </div>
                        <CopyToClipboard
                          text="@francisuzoigwe"
                          onCopy={handleCopy}
                        >
                          <button className="flex items-center text-[16px] text-[#40196D]">
                            <IoCopy className="mr-1 text-[#40196D]" />
                            2049681053
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GoSponsorTiers className="text-[#40196D]" />I
                </div>
              </div>
              <div className="w-[45%] h-[110px] justify-center max-lg:w-full flex flex-col items-center max-lg:mt-3 bg-[#40196D] rounded-md">
                <div className="text-white">Invite & Earn</div>
                <div className="my-[2px]" />
                <button className="bg-[green] px-4 py-2 rounded-[5px]  text-[12px] max-lg:w-[90%] text-white">
                  View Code
                </button>
              </div>
            </div>
          </div>
          {copySuccess && (
            <p className="absolute top-[50%]">Text Copied successfully!</p>
          )}
          <div className="my-2" />
          <div className="w-[95%] grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-3">
            <OptionII
              text="View Profile"
              icon={<FaAddressCard />}
              link="/auth/view-profile"
            />
            <OptionII
              text="Security"
              link="/auth/security"
              icon={<AiOutlineSecurityScan />}
            />
            <OptionII
              text="Statement & Reports"
              link="/auth/statement"
              icon={<TbMessageReport />}
            />
            <OptionII
              text="Legal"
              link="/auth/legal"
              icon={<SiYoutubestudio />}
            />
            <OptionII
              text="Saved Cards"
              link="/auth/cards"
              icon={<PiCardsFill />}
            />
            <OptionII text="FAQs" link="/auth/FAQs" icon={<FaQuestion />} />
          </div>
          <div className="my-4" />
          <div
            className="text-[red] hover:cursor-pointer "
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Sign Out
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Account;
