import { LiaCopyrightSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-15 w-full flex justify-center items-center fixed bottom-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 ">
      <div className="w-1/2 flex pl-4 justify-start items-center">
        <p className="flex justify-center items-center">
          <LiaCopyrightSolid />
          2018,Clothico Retails.All rights reserved.
        </p>
      </div>

      <div className="w-1/2 ">
        <ul className="flex justify-evenly">
          <li className="flex items-center ml-10">
            Follow Us:
          </li>
          <li className="flex items-center ">
            <FaInstagram />
            Instagram
          </li>
          <li className="flex items-center">
            <FaFacebook />
            Facebook
          </li>
          <li className="flex items-center">
            <FaXTwitter />
            Twitter
          </li>
          <li className="flex items-center">
            <TiSocialYoutubeCircular />
            Youtube
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
