import classNames from "classnames";
import React from "react";

type Props = {
  historySequence: Array<string>;
  navFunction?: (path: string) => void;
};

const BreadCrumbs = ({ historySequence, navFunction }: Props) => {
  return (
    <div className="flex gap-1 md:gap-2 items-center flex-wrap">
      {historySequence.map((path: string, index: number) => {
        return (
          <div key={path}>
            <button
              className={classNames(
                "capitalize hover:text-yellow-500 transition-all text-xs md:text-base",
                {
                  "text-slate-400": index !== historySequence.length - 1,
                  "text-yellow-500": index === historySequence.length - 1,
                }
              )}
              onClick={() => navFunction(`/${path}`)}
            >
              {path.includes("-") ? path.split("-").join(" ") : path}
            </button>
            {index !== historySequence.length - 1 && (
              <span className="ml-2 text-slate-400">\</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
