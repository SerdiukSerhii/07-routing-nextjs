import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0];

  const realTag = tag === 'all' ? undefined : tag;

  const { notes } = await fetchNotes('', 1, realTag);

  return (
    <div>
      {' '}
      <h1>Notes List</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default NotesByTag;
