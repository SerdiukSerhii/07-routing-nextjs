import { fetchNoteById } from '@/lib/api';
import NotePreview from './NotePreview.client';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';

interface NotePageDetailsProps {
  params: Promise<{ id: string }>;
}

const NotePageDetails = async ({ params }: NotePageDetailsProps) => {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <NotePreview>
      <NoteRenderDetails note={note} />
    </NotePreview>
  );
};

export default NotePageDetails;
