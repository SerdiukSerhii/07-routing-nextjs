'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import css from './NotePreview.module.css';

type Props = {
  children: React.ReactNode;
};

const NotePreview = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        {children}
        <button
          onClick={close}
          className={css.close}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotePreview;
