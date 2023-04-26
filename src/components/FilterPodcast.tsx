import styled from 'styled-components';
import { Entry } from '../interfaces';

interface Props {
  FilteredPodTunes: Entry[];
  setFilterPodTunes: (podcast: string) => void;
}

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
  column-gap: 1rem;
  display: flex;
  margin: 1rem 0;
  align-items: center;
  width: 100%;
  justify-content: end;
`;
const CounterPodcast = styled.span`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundButton};
  color: var(--white);
`;
const InputSearch = styled.input`
  position: relative;
  display: flex;
  border: 1px solid var(--gray-300);
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 450px;
`;

export const FilterPodcast = ({
  FilteredPodTunes,
  setFilterPodTunes,
}: Props) => {
  return (
    <>
      <WrpFilter>
        <ContainerSearch>
          <CounterPodcast>{FilteredPodTunes?.length}</CounterPodcast>
          <InputSearch
            placeholder="Search your podcast..."
            onChange={({ target }) => {
              setFilterPodTunes(target.value);
            }}
          />
        </ContainerSearch>
      </WrpFilter>
    </>
  );
};
