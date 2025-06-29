'use client'; // 👈 Phải có dòng này ở đầu file

import RequireAuth from './RequireAuth';
import AppLayout from '@/components/AppLayout/AppLayout';

export default function HomePage() {
  return (
    <RequireAuth>
        <AppLayout></AppLayout>
    </RequireAuth>
  );
}
