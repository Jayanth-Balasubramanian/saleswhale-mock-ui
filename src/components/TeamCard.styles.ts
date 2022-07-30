import styled from "styled-components";

export const Avatar = styled.img`
  position: absolute;
  left: 5.21%;
  right: 83.06%;
  top: 8.84%;
  bottom: 71.27%;
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 3px;
`

export const Name = styled.h3`
  display: flex;
  position: absolute;
  height: 19px;
  //left: 19.87%;
  margin-left: 61px;
  margin-top: 17px;
  //top: calc(50% - 19px / 2 - 64px);
  color: #444444;
  font-family: 'ProximaNova';
  font-size: 16px;
  line-height: 19px;
  /* identical to box height, or 119% */
`

export const Date = styled.p`
  position: absolute;
  height: 16px;
  margin-left: 61px;
  margin-top: 38px;
  //left: 19.87%;
  //right: 27.69%;
  //top: calc(50% - 16px / 2 - 44.5px);

  font-family: 'ProximaNova';
  font-size: 13px;
  line-height: 16px;
  /* identical to box height, or 123% */


  color: #565656;

  mix-blend-mode: normal;
  opacity: 0.5;
`

export const Description = styled.p`
  position: absolute;
  display: flex;
  height: 34px;
  left: 4.89%;
  right: 5.86%;
  top: calc(50% - 34px / 2 - 3.5px);

  font-family: 'ProximaNova';
  font-size: 14px;
  line-height: 17px;
  /* or 121% */
  color: #565656;
`
export const Card = styled.div<{is_archived: boolean}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 307px;
  height: 181px;
  min-width: 307px;
  min-height: 181px;
  background: ${({is_archived}) => is_archived?"#EBEEF2": "#FFFFFF"};
          
  border: 1px solid #E4E7EC;
  border-radius: 4px;
`
