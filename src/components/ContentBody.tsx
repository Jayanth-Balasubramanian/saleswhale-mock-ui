import {BodyContainer as Container} from "./ContentBody.styles";
import {Team} from "../types";
import TeamCard from "./TeamCard";
import {Title} from "./ContentBody.styles";
interface Props {
  teams: Array<Team>,
}

const ContentTitle = ({title, text}) => {
  return(
    <Title>
      <h3> {title} </h3>
      <p> {text} </p>
    </Title>


  )
}
const ContentBody = ({teams}: Props) => {
  console.log(teams);

  return (
      <Container>
        {/*<ContentTitle title="All Teams" text="showing 65 of 65 teams" />*/}
        {teams.map(team => <TeamCard id={team.id} name={team.name} image={team.image} description={team.description}
                                     created_at={team.created_at} is_archived={team.is_archived}/>)}
      </Container>
  )

}
export default ContentBody;
