import { FC } from "react";
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import usePrevious from "../../Hooks/usePrevious";
import { TickableStyles } from "../../config";

interface Tickable { 
  value: string;
}

interface styling {
  iconName: string,
  color: string
}

const ContentContainer = styled.div<{color: string}>`
  color: ${props => props.color};
  font-size: 30px;
  & > * {
    padding: 0 10px;
  }
`;

const getIndex = (val: number) => val > 0 ? 'greater' : val < 0 ? 'less' : 'equal';

const TickableTS: FC<Tickable> = ({ value }) => { 
  const previousValue : string = usePrevious(value);
  const diff: number = parseInt(value) - parseInt(previousValue);
  const TickableStyle: styling = TickableStyles[getIndex(diff)];

  return(
    <ContentContainer color={TickableStyle.color}>
      <label>{value}</label>
      <i className={`fa fa-${TickableStyle.iconName}`} />
    </ContentContainer>
  );
}

export default TickableTS;