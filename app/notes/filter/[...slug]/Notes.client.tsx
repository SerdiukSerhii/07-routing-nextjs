'use client';

import NotesClient from '../../Notes.client';

type Props = {
  tag?: string;
};

export default function NotesFilterClient({ tag }: Props) {
  return <NotesClient tag={tag} />;
}
