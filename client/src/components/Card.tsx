import '../index.css';
import { Swords } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="card w-full mt-36">
      <div className="flex flex-col items-center gap-12 py-36">
        <span className="icon">
          <Swords />
        </span>
        <div className="ml-4">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      <div className="shine "></div>
      <div className="background">
        <div className="tiles ">
          {[...Array(10)].map((_, i) => (
            <div key={i} id={`tile tile-${i + 1}`} ></div>
          ))}
        </div>
        <div id="line line-1"></div>
        <div id="line line-2"></div>
        <div id="line line-3"></div>
      </div>
    </div>
  );
}

export default Card;
