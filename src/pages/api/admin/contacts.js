import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const contactsFile = path.join(process.cwd(), 'data', 'contacts.json');
    
    if (!fs.existsSync(contactsFile)) {
      return res.status(200).json([]);
    }

    const fileContent = fs.readFileSync(contactsFile, 'utf8');
    const contacts = JSON.parse(fileContent);

    // Sort by timestamp (newest first)
    contacts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ message: 'Error reading contacts' });
  }
}
