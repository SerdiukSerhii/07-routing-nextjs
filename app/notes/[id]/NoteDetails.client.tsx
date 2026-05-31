'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';

import css from './NoteDetails.module.css';

type NotePreviewProps = {
  id: string;
};

const NoteDetailsClient = ({ id }: NotePreviewProps) => {
  const router = useRouter();

  const goBack = () => router.back();

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
    <section>
      <button
        onClick={goBack}
        className={css.backButton}
      >
        Go Back
      </button>
      <NoteRenderDetails note={note} />
    </section>
  );
};

export default NoteDetailsClient;
