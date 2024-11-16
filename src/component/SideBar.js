import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SidebarContainer = styled.div`
  width: 110px; 
  min-width: 110px;
  max-width: 110px;
  height: auto;
  background-color: #333; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 같은 높이에 배치 */
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 15px;

  &:hover {
    color: lightgray;
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px; 
`;

export default function SideBar() {
  return (
    <SidebarContainer>
      <SidebarLink to="/List">
        <IconWrapper>
          <FiSearch size={13}/>
        </IconWrapper>
        토지찾기
      </SidebarLink>
      <SidebarLink to="/Info">
        <IconWrapper>
          <FiSearch size={13}/>
        </IconWrapper>
        정보
      </SidebarLink>
      <SidebarLink to="/Purchase">
        <IconWrapper>
          <FiSearch size={13}/>
        </IconWrapper>
        상품구매
      </SidebarLink>
      <SidebarLink to="/Landadd">
        <IconWrapper>
          <FiSearch size={13}/>
        </IconWrapper>
        토지추가
      </SidebarLink>
    </SidebarContainer>
  );
}
