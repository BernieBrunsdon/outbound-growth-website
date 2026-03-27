import fs from 'fs';
import path from 'path';
import { getFirebaseDb } from '../../../lib/firebaseAdmin';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const db = getFirebaseDb();

    if (db) {
      const snapshot = await db.collection('contacts').orderBy('timestamp', 'desc').get();
      const contacts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(contacts);
    }

    const contactsFile = path.join(process.cwd(), 'data', 'contacts.json');

    if (!fs.existsSync(contactsFile)) {
      return res.status(200).json([]);
    }

    const fileContent = fs.readFileSync(contactsFile, 'utf8');
    const contacts = JSON.parse(fileContent);
    contacts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ message: 'Error reading contacts' });
  }
}
