import { Page, Wrapper } from "@/components/LayoutWidgets";
import { initI18n } from "@/i18n";
import "@/styles/fonts.css";
import "@/styles/utils.css";

import menu1 from "@/assets/images/menu/1.png";
import menu2 from "@/assets/images/menu/2.png";
import menu3 from "@/assets/images/menu/3.png";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
          <img src={menu3} className="md:border-2 rounded border-[#edc5b3]" />
        </div>

        <Link to={RouteDefinition.INDEX}>
          <Button
            className="mt-20 bg-gradient-to-r from-[#fee6a0] to-[#fec29b] hover:brightness-[95%]"
            variant="outline"
            size="lg"
          >
            <ArrowLeft />
            <span>Back To Home</span>
          </Button>
        </Link>
      </Wrapper>
    </Page>
  );
}

export default Menu;
