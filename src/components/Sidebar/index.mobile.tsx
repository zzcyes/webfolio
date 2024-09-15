import { css } from "@emotion/css";
import { CategoryList } from "@/components";
import { useConfig, useCollapsed } from "@/common/hooks";
import { normalizeCssSizeNumber } from "@/common/utils";
import { SideBarContainerMobile, SidebarContentMobile } from "./styled";
import { useRecoilState } from "recoil";
import { currCategoryIdState } from "@/store";

const SidebarMobile = ({ categories }: any) => {
  const [collapsed, toggleCollapsed] = useCollapsed();
  const [{ layout }] = useConfig();
  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  return (
    <SideBarContainerMobile
      className={`
      ${css`
        top: ${normalizeCssSizeNumber(layout.navbar.height) +
        normalizeCssSizeNumber(layout.mainContent.padding)}px;
        visibility: ${collapsed ? "hidden" : "visible"};
        left: ${layout.mainContent.padding}px;
        width: calc(
          100% - ${normalizeCssSizeNumber(layout.mainContent.padding) * 2}px
        );
        height: ${collapsed
          ? "0px"
          : `calc(
          100vh -
            ${normalizeCssSizeNumber(layout.mainContent.padding) * 2}px -
            ${normalizeCssSizeNumber(layout.navbar.height)}px
        )`};
      `}`}
    >
      <SidebarContentMobile>
        <CategoryList
          currCategoryId={currCategoryId}
          list={categories}
          onClick={(id) => {
            setCurrCategoryId(id);
            toggleCollapsed(true);
          }}
        />
      </SidebarContentMobile>
    </SideBarContainerMobile>
  );
};

export default SidebarMobile;
