import { Stats } from "../../domain/model/Stats.model";
import {
  StyledStatsContainer,
  StyledStatsLabel,
  StyledStatsValue,
} from "./index.styles";

export default function StatsComponent({ label, value }: Stats) {
  return (
    <StyledStatsContainer>
      <StyledStatsValue>{value}</StyledStatsValue>
      <StyledStatsLabel>{label}</StyledStatsLabel>
    </StyledStatsContainer>
  );
}
