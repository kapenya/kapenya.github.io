import { Page, Wrapper } from "@/components/LayoutWidgets";
import { initI18n } from "@/i18n";
import "@/styles/fonts.css";
import "@/styles/utils.css";

import menu1 from "@/assets/images/menu/1.png";
import menu2 from "@/assets/images/menu/2.png";

import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { RouteDefinition } from "./main";

function Menu() {
  initI18n();

  return (
    <Page className="!overflow-auto">
      <Wrapper className="flex flex-col items-center !min-h-screen pt-4 pb-20 !px-0">
        <div className="space-y-4 h-fit w-full md:w-2/3">
          <img src={menu1} className="md:border-2 rounded border-[#edc5b3]" />
          <img src={menu2} className="md:border-2 rounded border-[#edc5b3]" />
        </div>

        <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-20">
          <Link
            to={"https://m.me/100087288325076"}
            target="_blank"
            className="w-[230px]"
          >
            <Button
              className="bg-gradient-to-r from-[#5a99ff] to-[#0866ff] hover:brightness-[95%] text-white hover:text-white"
              variant="outline"
              size="lg"
            >
              <MessageCircle />
              <span>Message us on Facebook</span>
            </Button>
          </Link>
          <Link to={RouteDefinition.INDEX} className="w-[230px] md:w-fit">
            <Button
              className="bg-gradient-to-r from-[#fee6a0] to-[#fec29b] hover:brightness-[95%] w-full"
              variant="outline"
              size="lg"
            >
              <ArrowLeft />
              <span>Back To Home</span>
            </Button>
          </Link>
        </div>
      </Wrapper>
    </Page>
  );
}

export default Menu;
