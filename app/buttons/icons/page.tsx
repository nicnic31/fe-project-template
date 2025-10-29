'use client';

import { IconButton } from '@/src/components/ui/button';
import { Home } from 'lucide-react';

export default function IconButtonsPage() {
  return (
    <section className="bg-background h-screen w-screen px-24 py-24">
      <div className="mb-16 grid grid-cols-6 gap-4">
        <IconButton>
          <Home />
        </IconButton>
        <IconButton color="secondary">
          <Home />
        </IconButton>
        <IconButton color="info">
          <Home />
        </IconButton>
        <IconButton color="success">
          <Home />
        </IconButton>
        <IconButton color="warning">
          <Home />
        </IconButton>
        <IconButton color="danger">
          <Home />
        </IconButton>
      </div>

      {/* Outlined Icon Buttons */}
      <div className="mb-16 grid grid-cols-6 gap-4">
        <IconButton variant="outlined">
          <Home />
        </IconButton>
        <IconButton color="secondary" variant="outlined">
          <Home />
        </IconButton>
        <IconButton color="info" variant="outlined">
          <Home />
        </IconButton>
        <IconButton color="success" variant="outlined">
          <Home />
        </IconButton>
        <IconButton color="warning" variant="outlined">
          <Home />
        </IconButton>
        <IconButton color="danger" variant="outlined">
          <Home />
        </IconButton>
      </div>

      {/* Text Icon Buttons */}
      <div className="mb-16 grid grid-cols-6 gap-4">
        <IconButton variant="text">
          <Home />
        </IconButton>
        <IconButton color="secondary" variant="text">
          <Home />
        </IconButton>
        <IconButton color="info" variant="text">
          <Home />
        </IconButton>
        <IconButton color="success" variant="text">
          <Home />
        </IconButton>
        <IconButton color="warning" variant="text">
          <Home />
        </IconButton>
        <IconButton color="danger" variant="text">
          <Home />
        </IconButton>
      </div>

      {/* Loading and Disabled Icon Buttons */}
      <div className="mb-16 grid grid-cols-6 gap-4">
        <IconButton loading>
          <Home />
        </IconButton>
        <IconButton disabled>
          <Home />
        </IconButton>
      </div>
    </section>
  );
}
