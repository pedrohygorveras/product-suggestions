import React from "react";

import { MdArrowBack } from "react-icons/md";

interface iHeaderProps {
  title: string;
  subtitle?: string | null;
  className?: string;
  badge?: boolean;
  goBack: () => void;
}

const Header: React.FC<iHeaderProps> = ({
  title,
  subtitle,
  className = "",
  badge = true,
  goBack,
}) => {
  return (
    <div className="py-8">
      <div className="flex items-center">
        {goBack && (
          <button
            className="btn btn-circle btn-primary btn-lg mr-4"
            onClick={goBack}
          >
            <MdArrowBack className="text-2xl" />
          </button>
        )}
        <div>
          <h1 className={`text-2xl font-bold text-primary ${className}`}>
            {title}
          </h1>
          {subtitle && (
            <div className={badge ? `badge badge-ghost mt-3` : `mt-2`}>
              <h2
                className={
                  badge
                    ? `text-sm font-normal ${className}`
                    : `text-sm font-normal`
                }
              >
                {subtitle}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Header };
