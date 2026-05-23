import fs from 'fs';

async function download() {
  try {
    const res = await fetch('https://drive.google.com/uc?export=download&id=1zwu8Uh1JU5IVBPQiKhZe6NQ4cJVIbItj');
    console.log('Status:', res.status);
    const contentType = res.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (contentType && contentType.includes('text/html')) {
      console.log('Received HTML, probably a warning page or login page.');
      const text = await res.text();
      console.log('Preview of response:', text.substring(0, 200));
    } else {
      const buffer = await res.arrayBuffer();
      fs.writeFileSync('public/logo.png', Buffer.from(buffer));
      console.log('Downloaded successfully.');
    }
  } catch (err) {
    console.error(err);
  }
}

download();
