import ProjectCard from "@/components/ProjectCard";
import { ProjectContainer, ProjectFlex, ProjectCardWrapper } from "./styled";
import { IProjectItem } from "@/components/ProjectCard";

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
