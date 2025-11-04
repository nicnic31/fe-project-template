import { Input } from '@/src/components/ui/form';

export default function InputPage() {
  return (
    <div className="bg-background h-screen w-screen px-24 py-12">
      {/*Filled Input */}
      <div className="mb-8 flex flex-col gap-4">
        <Input important id="name" label="Filled Input" placeholder="Filled" />

        {/* Helper Text */}
        <Input
          important
          id="name"
          variant="filled"
          label="Filled Input"
          placeholder="Filled"
          helperText="This is a helper text"
        />

        {/* Error */}
        <Input
          important
          id="name"
          variant="filled"
          label="Filled Input"
          placeholder="Filled"
          error="Name is required"
        />

        {/* Disabled */}
        <Input
          disabled
          important
          id="name"
          variant="filled"
          label="Filled Input"
          placeholder="Filled"
          error="Name is required"
        />
      </div>

      {/* Outlined Input */}
      <div className="mb-8 flex flex-col gap-4">
        <Input
          important
          id="name"
          variant="outlined"
          label="Outlined Input"
          placeholder="Outlined"
        />

        {/* Helper Text */}
        <Input
          important
          id="name"
          variant="outlined"
          label="Outlined Input"
          placeholder="Outlined"
          helperText="This is a helper text"
        />

        {/* Error */}
        <Input
          important
          id="name"
          variant="outlined"
          label="Outlined Input"
          placeholder="Outlined"
          error="Name is required"
        />

        {/* Disabled */}
        <Input
          disabled
          important
          id="name"
          variant="outlined"
          label="Outlined Input"
          placeholder="Outlined"
          error="Name is required"
        />
      </div>
    </div>
  );
}
