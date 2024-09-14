import '../index.css';
import { Swords } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="card w-80 min-h-80 mt-36 border border-white">
      <div className="flex flex-col items-center">
        <div className="flex w-full">
          <span className="icon ml-4 rounded-full border-white border flex justify-center w-12 h-12 items-center">
            <Swords />
          </span>
        </div>
        <div className="ml-4 mt-1 flex flex-col gap-5">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      <div className="shine"></div>
      <div className="background">
        <div className="tiles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`tile tile-${i + 1}`}></div>
          ))}
        </div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
}

export default Card;
