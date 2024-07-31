import styled from "styled-components"


const Services = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  color: white;
  padding-left: ${({serviceActive}) => serviceActive ? '0' : '10px'};
  transition: max-height 0.3s ease-in-out;


  li {
  padding: 18px 10px;
  display: ${({serviceActive}) => serviceActive ? 'initial' : 'none'};
    transition: transform 0.3s ease-in-out;
  }
`

export default function ServiceList ({serviceActive, setServiceActive}) {
  return(
    <Services serviceActive={serviceActive} onClick= {() => {setServiceActive(!serviceActive)}}>
    Services {serviceActive ? '▲' : '▼'}
    <li>Coaching</li>
    <li>Consulting</li>
  </Services>
  )
}