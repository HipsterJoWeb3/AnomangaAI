import { FC } from "react";
import Input from "../../UI/Input";

interface Props {
  label: string;
}

const InputRange: FC<Props> = ({label}) => {
  return (
    <div className="col-start-1 col-end-7 h-10 mb-10 flex gap-y-5 flex-col">
      <div className="text-sm font-bold">{label}</div>
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-3 h-10">
          <Input placeholder={"от"} />
        </div>
        <div className="col-start-4 col-end-6 h-10">
          <Input placeholder={"до"} />
        </div>
      </div>
    </div>
  );
};

export default InputRange;