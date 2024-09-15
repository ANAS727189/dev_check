import '../index.css';
import { Swords } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="card w-full mt-12">
      <div className="flex flex-col  gap-3 py-24">
        <span className="icon">
          <Swords className='p-2 w-14 h-14 border-2 rounded-full' />
        </span>
        
        <div className=" flex flex-col gap-4 ml-4 text-3xl">
            <h1>{title}</h1>
            <p className='font-thin'>{text}</p>
        </div>
      </div>
      <div className="shine"></div>
      <div className="background">
        
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>

      </div>
    </div>
  );
}

export default Card;
