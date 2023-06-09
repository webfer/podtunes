import styled from 'styled-components';
import { Entry } from '../../../interfaces';

const WrpFilter = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0px 1rem;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const ContainerSearch = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  justify-content: end;
  margin: 3rem 0;
  width: 100%;
`;
const CounterPodcast = styled.span`
  background-color: ${({ theme }) => theme.backgroundButton};
  border-radius: 0.5rem;
  color: var(--white);
  padding: 0.5rem;
  position: relative;
`;
const InputSearch = styled.input`
  border-radius: 0.5rem;
  border: 1px solid var(--gray-300);
  display: flex;
  max-width: 450px;
  padding: 0.75rem;
  position: relative;
  width: 100%;
`;
interface Props {
  FilteredPodtunes: Entry[];
  setFilterPodtunes: (podcast: string) => void;
}

export const FilterTunes = ({ ...props }: Props) => {
  return (
    <>
      <WrpFilter>
        <ContainerSearch>
          <CounterPodcast>{props.FilteredPodtunes?.length}</CounterPodcast>
          <InputSearch
            placeholder="Search your podtunes..."
            onChange={({ target }) => {
              props.setFilterPodtunes(target.value);
            }}
          />
        </ContainerSearch>
      </WrpFilter>
    </>
  );
};
