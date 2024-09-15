import { ProjectCard } from "@/components";
import { ProjectContainer, ProjectFlex, ProjectCardWrapper } from "./styled";
import { IProjectItem } from "@/components/ProjectCard/type";

const ProjectPanelMobile = ({ list }: { list: IProjectItem[] }) => {
  return (
    <>
      <ProjectContainer>
        <ProjectFlex>
          {list?.map((project) => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCard item={project} />
            </ProjectCardWrapper>
          ))}
        </ProjectFlex>
      </ProjectContainer>
    </>
  );
};

export default ProjectPanelMobile;
