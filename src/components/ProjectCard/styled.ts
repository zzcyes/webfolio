import styled from "@emotion/styled";

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 改为左对齐
  justify-content: space-between; // 使内容均匀分布
  /* padding: 20px; */
  /* height: 200px; // 设置最小高度，确保卡片有一致的高度 */
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const ProjectIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.theme.cardBackground};
`;

export const ProjectIconPlaceholder = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

export const ProjectName = styled.h3`
  font-size: 22px;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
  width: 100%; // 确保宽度为100%
  display: -webkit-box;
  -webkit-line-clamp: 2; // 限制为两行
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${(props) => props.theme.text};

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const ProjectStats = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.textSecondary};
  font-size: 14px;

  svg {
    font-size: 16px;
  }

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
