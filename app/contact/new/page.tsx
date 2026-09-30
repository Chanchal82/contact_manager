
import ContactForm from "@/app/_components/ContactForm";
import { createContactAction } from "@/app/actions/contact";

function NewContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Contact
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new contact to your contact list.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <ContactForm action={createContactAction} />
        </div>
      </div>
    </div>
  );
}

export default NewContactPage;

