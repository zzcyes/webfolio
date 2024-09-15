import { css } from "@emotion/css";
import { useConfig, useCollapsed } from "@/common/hooks";
import { normalizeCssSizeNumber } from "@/common/utils";
import {
  SideBarContainerMobile,
  SidebarContentMobile,
  CategoriesContainer,
} from "./styled";
import { useRecoilState } from "recoil";
import { currCategoryIdState } from "@/store";
import { CategoryBlock } from "@/components";

const SidebarMobile = ({ categories }: any) => {
  const [{ layout }] = useConfig();
  const [expanded, toggleExpanded] = useCollapsed();
  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  return (
    <SideBarContainerMobile
      className={`
      ${css`
        visibility: ${expanded ? "visible" : "hidden"};
        top: ${normalizeCssSizeNumber(layout.navbar.height) +
        normalizeCssSizeNumber(layout.mainContent.padding)}px;
        left: ${layout.mainContent.padding}px;
        width: calc(
          100% - ${normalizeCssSizeNumber(layout.mainContent.padding) * 2}px
        );
        height: ${expanded
          ? `calc(
          100vh -
            ${normalizeCssSizeNumber(layout.mainContent.padding) * 2}px -
            ${normalizeCssSizeNumber(layout.navbar.height)}px
        )`
          : "0px"};
      `}`}
    >
      <SidebarContentMobile>
        <CategoriesContainer>
          {categories.map((item) => (
            <CategoryBlock
              style={{
                fontSize: 14,
                padding: 10,
              }}
              key={item.id}
              active={item.id === currCategoryId}
              item={item}
              onClick={(item) => {
                setCurrCategoryId(item.id);
                toggleExpanded(false);
              }}
            />
          ))}
        </CategoriesContainer>
      </SidebarContentMobile>
    </SideBarContainerMobile>
  );
};

export default SidebarMobile;
