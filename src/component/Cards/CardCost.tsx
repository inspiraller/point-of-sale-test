import { CardSmall } from "./Card";
import { DL } from "@/component/DL/DL";

interface Props {
  cost: string;
}
export const CardCost = ({cost}: Props) => {
  return (
    <CardSmall style={{marginTop: '4px'}}>
      <DL>
        <dt>Cost:</dt>
        <dd>${cost}</dd>
      </DL>
    </CardSmall>
  );
};
