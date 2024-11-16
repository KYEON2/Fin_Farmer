import React from 'react';
import styled from 'styled-components';

// 전체 컨테이너 스타일
const Con = styled.div`
  background-color: #f0f4f8; 
  color: black;
  height: 100%; 
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;


// 폼 컨테이너
const FormSection = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// 제목 스타일
const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

// 라벨 스타일
const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  margin-bottom: 8px;
  display: block;
`;

// 입력 필드 스타일
const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3a86ff;
    box-shadow: 0 0 5px rgba(58, 134, 255, 0.3);
  }
`;

// 텍스트 영역 스타일
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3a86ff;
    box-shadow: 0 0 5px rgba(58, 134, 255, 0.3);
  }
`;

// 체크박스, 라디오 컨테이너
const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  margin-right: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;

  input {
    margin-right: 8px;
  }
`;

// 단위 스타일
const Unit = styled.span`
  font-size: 14px;
  color: #666;
`;

// 설명 텍스트
const SmallText = styled.small`
  font-size: 12px;
  color: #888;
  display: block;
  margin-top: -15px;
  margin-bottom: 15px;
`;

// 버튼 스타일
const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  background-color: #006400; /* 기본 버튼 색상 */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d00; /* 호버 상태의 색상 */
  }
`;

function Landadd() {
  return (
    <Con>
      <FormSection>
        <FormTitle>땅 내놓기</FormTitle>

        {/* 제목 */}
        <div>
          <Label htmlFor="landTitle">땅 정보</Label>
          <Input
            type="text"
            id="landTitle"
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        {/* 주소 */}
        <div>
          <Label htmlFor="landAddress">주소</Label>
          <Input
            type="text"
            id="landAddress"
            placeholder="주소를 입력하세요"
            required
          />
        </div>

        {/* 크기 */}
        <div>
          <Label htmlFor="landSize">크기</Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              type="number"
              id="landSize"
              placeholder="평수를 입력하세요"
              required
              style={{ flex: '1', marginRight: '10px' }}
            />
            <Unit>평</Unit>
          </div>
          <SmallText>1평 ≈ 3.3058m²</SmallText>
        </div>

        {/* 거래 종류 */}
        <div>
          <Label>거래 종류</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="radio"
                name="dealType"
                value="전세"
                required
              />
              전세
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="radio"
                name="dealType"
                value="월세"
                required
              />
              월세
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="radio"
                name="dealType"
                value="체험"
                required
              />
              체험
            </CheckboxLabel>
          </CheckboxGroup>
        </div>

        {/* 가격 */}
        <div>
          <Label htmlFor="priceInfo">가격 정보 (전세가)</Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              type="number"
              id="priceInfo"
              placeholder="가격을 입력하세요"
              required
              style={{ flex: '1', marginRight: '10px' }}
            />
            <Unit>만원</Unit>
          </div>
        </div>

        {/* 시설 정보 */}
        <div>
          <Label>시설 정보</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <input type="checkbox" value="논" />
              논
            </CheckboxLabel>
            <CheckboxLabel>
              <input type="checkbox" value="밭" />
              밭
            </CheckboxLabel>
            <CheckboxLabel>
              <input type="checkbox" value="비닐하우스" />
              비닐하우스
            </CheckboxLabel>
          </CheckboxGroup>
        </div>

        {/* 상세 설명 */}
        <div>
          <Label htmlFor="detailedDescription">상세 설명</Label>
          <TextArea
            id="detailedDescription"
            rows="5"
            placeholder="상세 설명을 입력하세요 (최대 1000자)"
            maxLength="1000"
            required
          ></TextArea>
          <SmallText>최대 1000자까지 입력 가능합니다.</SmallText>
        </div>

        {/* 제출 버튼 */}
        <SubmitButton type="submit">등록하기</SubmitButton>
      </FormSection>
    </Con>
  );
}

export default Landadd;
