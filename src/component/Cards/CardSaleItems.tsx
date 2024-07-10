import { CardSmall } from "./Card";
import { DL } from "@/component/DL/DL";

interface Props {
  items: number;
}
export const CardSaleItems = ({items}: Props) => {
  return (
    <CardSmall style={{marginTop: '4px'}}>
      <DL>
        <dt>Items:</dt>
        <dd>{items}</dd>
      </DL>
    </CardSmall>
  );
};
