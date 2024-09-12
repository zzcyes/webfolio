import React from "react";
import styled from "@emotion/styled";
import { useConfig } from "@/common/hooks";

interface SidebarProps {
  width?: string | number;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [{ sidebar }] = useConfig();

  return (
    <>
      <SidebarHeader>
        <SidebarTitle>{sidebar.title} </SidebarTitle>
      </SidebarHeader>
      <SidebarContent>{children}</SidebarContent>
    </>
  );
};

export default Sidebar;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 20px;
`;

const SidebarTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const SidebarContent = styled.div`
  padding: 20px;
  overflow-y: auto;
`;
