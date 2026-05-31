'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
import Modal from '@/components/Modal/Modal';

type NotePreviewProps = {
  id: string;
};

const NotePreview = ({ id }: NotePreviewProps) => {
  const router = useRouter();

  const close = () => router.back();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait..</p>;

  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <Modal onClose={close}>
      <NoteRenderDetails note={note} />
    </Modal>
  );
};

export default NotePreview;
