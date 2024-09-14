import styled from "@emotion/styled";

export const PROJECT_CONTAINER_PADDING = 20;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const ProjectFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 20px - 40px);
  margin-left: 8px;
`;

export const ProjectCardWrapper = styled.div`
  margin-block-end: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MessageBlock = styled.div`
  align-self: flex-start;
  padding-left: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.textSecondary};
`;
