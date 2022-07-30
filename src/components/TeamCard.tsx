import {Avatar, Name, Date, Description, Card} from "./TeamCard.styles";
import {Team} from "../types";

const TeamCard = (team: Team) => {
  console.log(team.is_archived);
  return (
    <Card className='team-card' id={`team card-${team.name}`} is_archived={team.is_archived}>
      <Avatar src={team.image}/>
      <Name>{team.name}</Name>
      <Date>Created {team.created_at}</Date>
      <Description> {team.description} </Description>
    </Card>
  )
}

export default TeamCard;
