import { SidebarContainer } from "./styled";
import { useConfig, useCollapsed } from "@/common/hooks";
import { normalizeCssSize } from "@/common/utils";
import {
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  CategoriesContainer,
} from "./styled";
import { useRecoilState } from "recoil";
import { currCategoryIdState } from "@/store";
import { CategoryBlock } from "@/components";

const SidebarWeb = ({ categories }: any) => {
  const [collapsed] = useCollapsed();
  const [{ layout, sidebar }] = useConfig();
  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  return (
    <SidebarContainer
      style={{
        width: collapsed ? "0px" : normalizeCssSize(layout.sidebar.width),
      }}
      className={collapsed ? "fadeOutLeft" : "fadeInLeft"}
    >
      <SidebarHeader>
        <SidebarTitle>{sidebar.title} </SidebarTitle>
      </SidebarHeader>
      <SidebarContent>
        <CategoriesContainer>
          {categories.map((item) => (
            <CategoryBlock
              key={item.id}
              active={item.id === currCategoryId}
              item={item}
              onClick={(item) => {
                setCurrCategoryId(item.id);
              }}
            />
          ))}
        </CategoriesContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default SidebarWeb;
