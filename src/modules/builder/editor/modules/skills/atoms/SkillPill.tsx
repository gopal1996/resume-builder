import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SkillPill = ({
  name,
  score,
  onDelete,
  showScore,
}: {
  name: string;
  score?: number;
  onDelete: (v: string) => void;
  showScore: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: name,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="bg-custom-grey flex items-center pl-4 pr-2 py-2 rounded-full text-sm cursor-default"
      style={style}
      ref={setNodeRef}
      {...attributes}
    >
      <div className="flex items-center min-w-max" {...listeners}>
        <Image src="/icons/equals.svg" width={16} height={6} alt="close" className="cursor-grab" />
      </div>
      <span className="flex-1 ml-2 cursor-grab" {...listeners}>
        {name}
      </span>
      {showScore && <span className="ml-2">{score}</span>}
      <button className="ml-2 min-w-max flex items-center" onClick={() => onDelete(name)}>
        <Image src="/icons/close.svg" width={16} height={16} alt="close" />
      </button>
    </div>
  );
};

export default SkillPill;