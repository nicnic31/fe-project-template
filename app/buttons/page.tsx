'use client';

import Button from '@/src/components/ui/button';
import { Home } from 'lucide-react';

export default function ButtonsPage() {
  return (
    <section className="bg-background h-screen w-screen px-24 py-24">
      {/* Contained Buttons */}
      <h1 className="mb-2 text-2xl font-bold">Contained Buttons</h1>

      <div className="mb-16 grid grid-cols-6 gap-4">
        <Button>Button</Button>
        <Button color="secondary">Button</Button>
        <Button color="info">Button</Button>
        <Button color="success">Button</Button>
        <Button color="warning">Button</Button>
        <Button color="danger">Button</Button>
      </div>

      {/* Outlined Buttons */}
      <h1 className="mb-2 text-2xl font-bold">Outlined Buttons</h1>

      <div className="mb-16 grid grid-cols-6 gap-4">
        <Button variant="outlined">Button</Button>
        <Button variant="outlined" color="secondary">
          Button
        </Button>
        <Button variant="outlined" color="info">
          Button
        </Button>
        <Button variant="outlined" color="success">
          Button
        </Button>
        <Button variant="outlined" color="warning">
          Button
        </Button>
        <Button variant="outlined" color="danger">
          Button
        </Button>
      </div>

      {/* Text Buttons */}
      <h1 className="mb-2 text-2xl font-bold">Text Buttons</h1>

      <div className="mb-16 grid grid-cols-6 gap-4">
        <Button variant="text">Button</Button>
        <Button variant="text" color="secondary">
          Button
        </Button>
        <Button variant="text" color="info">
          Button
        </Button>
        <Button variant="text" color="success">
          Button
        </Button>
        <Button variant="text" color="warning">
          Button
        </Button>
        <Button variant="text" color="danger">
          Button
        </Button>
      </div>

      {/* Icon Buttons */}
      <h1 className="mb-2 text-2xl font-bold">Icon Buttons</h1>

      <div className="mb-16 grid grid-cols-6 gap-4">
        <Button startIcon={<Home size={16} />}>Button</Button>
        <Button color="secondary" startIcon={<Home size={16} />}>
          Button
        </Button>
        <Button color="info" startIcon={<Home size={16} />}>
          Button
        </Button>
        <Button color="success" startIcon={<Home size={16} />}>
          Button
        </Button>
        <Button color="warning" startIcon={<Home size={16} />}>
          Button
        </Button>
        <Button color="danger" startIcon={<Home size={16} />}>
          Button
        </Button>
      </div>

      {/* Loading and Disabled Buttons */}
      <h1 className="mb-2 text-2xl font-bold">Loading Buttons</h1>

      <div className="mb-16 grid grid-cols-6 gap-4">
        <Button loading>Button</Button>
        <Button disabled>Button</Button>
      </div>
    </section>
  );
}
