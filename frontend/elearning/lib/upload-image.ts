'use server';
import { put } from '@vercel/blob';

export default async function mediaUpload(formData: FormData) {
    const file = formData.get('file') as File;
    if (!file) throw new Error('File not provided.');

    const res = await put(file.name, file, {
        contentType: file.type,
        access: 'public',
        token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    return res.url;
}
