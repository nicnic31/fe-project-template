import { Textarea } from '@/src/components/ui/form';

export default function TextareaPage() {
  return (
    <div className="bg-background h-screen w-screen px-24 py-12">
      {/* Filled Textarea */}
      <div className="flex flex-col gap-4 pb-8">
        <Textarea important id="message" label="Filled Textarea" />
        <Textarea disabled important id="message" label="Filled Textarea" />
        <Textarea
          important
          id="message"
          label="Filled Textarea"
          //   error="Message is required"
        />
        <Textarea
          important
          id="message"
          label="Filled Textarea"
          helperText="This is a helper text"
        />
      </div>

      {/* Outlined Textarea */}
      <div className="flex flex-col gap-4 pb-8">
        <Textarea
          important
          id="message"
          variant="outlined"
          label="Filled Textarea"
        />
        <Textarea
          disabled
          important
          id="message"
          variant="outlined"
          label="Filled Textarea"
        />
        <Textarea
          important
          id="message"
          variant="outlined"
          label="Filled Textarea"
          //   error="Message is required"
        />
        <Textarea
          important
          id="message"
          variant="outlined"
          label="Filled Textarea"
          helperText="This is a helper text"
        />
      </div>
    </div>
  );
}
