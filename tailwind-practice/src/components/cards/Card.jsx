import imgs from '../../assets/women.jpg'
import Button from '../buttons/Button';

function Card() {
  return (
    <div className="bg-white 
    rounded-xl
     transition-all 
     duration-200
      focus:outline-none 
      focus:ring-2 focus:ring-offset-2 
      focus:ring-white-400 
      shadow-md hover:shadow-2xl
       transition-all
        duration-300
         overflow-hidden
         shadow-lg hover:shadow-lg 
         transform hover:-translate-y-0.5
         max-w-sm m-4">
      
      
      <img 
        className="w-full h-48 object-contain" 
        src={imgs} 
        alt="Card image" 
      />

      
      <div className="p-5 space-y-3">
        <h1 className="text-lg font-semibold text-purple-400">
          The Main Title
        </h1>

        <p className="text-gray-600 leading-relaxed">
          This is a modern card description. Clean, simple, and readable.
        </p>

        <Button>
          Read More
        </Button>
      </div>
    </div>
  );
}

export default Card;
