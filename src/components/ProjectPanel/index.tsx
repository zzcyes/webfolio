import { MessageBlock } from "./styled";
import ProjectPanelWeb from "./index.web";
import ProjectPanelMobile from "./index.mobile";
import { projectsLoadingState } from "@/store";
import { useRecoilValue } from "recoil";
import { useConfig } from "@/common/hooks";
import { useMediaQuery } from "react-responsive";
import type { IProjectItem } from "@/components/ProjectCard/type";

const ProjectPanel = ({ list }: { list?: IProjectItem[] }) => {
  const [{ mediaQuery }] = useConfig();
  const loading = useRecoilValue(projectsLoadingState);

  const hasNoProjects = !loading && !list?.length;

  const isWeb = useMediaQuery({ minWidth: mediaQuery.web });

  const messageBlockStyle = isWeb ? {} : { paddingLeft: 10, fontSize: 14 };

  return (
    <>
      {loading ? (
        <MessageBlock style={messageBlockStyle}>Loading...</MessageBlock>
      ) : hasNoProjects ? (
        <MessageBlock style={messageBlockStyle}>
          No projects found.
        </MessageBlock>
      ) : isWeb ? (
        <ProjectPanelWeb list={list || []} />
      ) : (
        <ProjectPanelMobile list={list || []} />
      )}
    </>
  );
};

export default ProjectPanel;
