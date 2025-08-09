import { Page, Wrapper } from "@/components/LayoutWidgets";
import { initI18n } from "@/i18n";
import "@/styles/fonts.css";
import "@/styles/utils.css";

import bgAppetizers from "@/assets/images/appetizers.png";
import bgCroffles from "@/assets/images/croffles.png";
import logo from "@/assets/logo-transparent.png";

import { Button } from "@/components/ui/button";
import { ArrowRight, BikeIcon } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RouteDefinition } from "./main";

function App() {
  initI18n();

  return (
    <Page className="!h-screen relative overflow-hidden !flex-none">
      <Wrapper className="flex-col-center !h-full z-2 relative">
        <div className="h-[100px]">
          <img src={logo} className="w-auto h-full object-cover" />
        </div>

        <div className="flex-row-v-center mt-8">
          <Link to={"https://www.facebook.com/kapenya.cafe"} target="_blank">
            <Button
              variant={"ghost"}
              className=" hover:brightness-125 !text-foreground"
            >
              <FaFacebook className="size-10" />
              <span>Kapenya Cafe</span>
            </Button>
          </Link>
          <Link to="https://www.instagram.com/kapenya.cafe/" target="_blank">
            <Button
              variant={"ghost"}
              className=" hover:brightness-125 !text-foreground"
            >
              <FaInstagram className="size-10" />
              <span>@kapenya.cafe</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-2">
          <Link
            to={
              "https://food.grab.com/ph/en/restaurant/online-delivery/2-C7KFRXWUNB4XCN"
            }
            target="_blank"
            className="w-[230px] md:w-fit"
          >
            <Button
              className="w-full bg-gradient-to-r from-[#00b14f] to-[#00ce5d] hover:brightness-[95%] text-white hover:text-white"
              variant="outline"
              size="lg"
            >
              <BikeIcon />
              <span>Order on GrabFood</span>
            </Button>
          </Link>

          <Link to={RouteDefinition.MENU} className="w-[230px] md:w-fit">
            <Button
              className="w-full bg-gradient-to-r from-[#fee6a0] to-[#fec29b] hover:brightness-[95%]"
              variant="outline"
              size="lg"
            >
              <span>Browse Our Menu</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </Wrapper>

      <div className="absolute top-0 md:top-0 -right-[50%] md:-right-[5%] opacity-10 rotate-45">
        <img src={bgCroffles} className="h-full w-auto object-cover" />
      </div>

      <div className="absolute top-[50%] md:top-0 -left-[50%] md:-left-[10%] opacity-10">
        <img src={bgAppetizers} className="h-full w-auto object-cover" />
      </div>
    </Page>
  );
}

export default App;
