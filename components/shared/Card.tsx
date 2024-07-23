import Image from 'next/image';
import { ReactNode } from 'react';

interface BaseCardProps {
  avatar?: string;
  name: string;
  children: ReactNode;
}

const BaseCard = ({ avatar, name, children }: BaseCardProps) => {
  return (
    <div className="p-4">
      {avatar && (
        <div className="flex justify-center mb-4">
          <Image
            src={avatar}
            alt={name}
            className="rounded-full object-cover"
            width={128}
            height={128}
          />
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white h-14">
        {name}
      </h1>
      {children}
    </div>
  );
};

export default BaseCard;
