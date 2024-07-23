import { cva } from "class-variance-authority";

interface Props {
  color?: string;
}

const ball = cva(["box-border", "relative", "w-[20px]", "h-[20px]", "rounded-full"]);

const Loading = ({ color = "bg-white" }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        <div
          className={ball({
            class: `animate-[pulse_500ms_linear_100ms_infinite] ${color}`,
          })}
        ></div>
        <div
          className={ball({
            class: `animate-[pulse_500ms_linear_200ms_infinite] ${color}`,
          })}
        ></div>
        <div
          className={ball({
            class: `animate-[pulse_500ms_linear_300ms_infinite] ${color}`,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
