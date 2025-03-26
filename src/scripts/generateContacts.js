
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, createFakeContact);

    await writeContacts( [...contacts, ...newContacts]);
  } catch (error) {
    console.error('Error:', error);
  }
};

generateContacts(5);
