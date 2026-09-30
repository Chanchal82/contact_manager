
import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { FiEdit } from "react-icons/fi";
import { deleteContactAction } from "../actions/contact";

function ContactList({ contacts }: { contacts: ContactType[] }) {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {contact.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">{contact.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/contact/edit/${contact.id}`}
              className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
            >
              <FiEdit size={16} />
              Edit
            </Link>

            <DeleteButton action={deleteContactAction} contact={contact} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
