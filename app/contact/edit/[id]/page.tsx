
import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactsById } from "@/app/api/contact";

async function EditContactPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contact = await getContactsById(id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Contact
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Update the contact information below.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <ContactForm
            action={updateContactAction}
            contact={contact}
          />
        </div>
      </div>
    </div>
  );
}

export default EditContactPage;

