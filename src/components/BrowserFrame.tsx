import { useState } from 'react';

type BrowserFrameProps = {
  src: string;
  alt?: string;
};

export default function BrowserFrame({ src, alt }: BrowserFrameProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='browser-frame shadow-hover'>
      <div className='browser-header'>
        <div className='browser-dots'>
          <span className='dot dot-red' />
          <span className='dot dot-yellow' />
          <span className='dot dot-green' />
        </div>
      </div>
      <div className='browser-image-container'>
        <img
          src={src}
          alt={alt || 'Interface preview'}
          className={`browser-image ${loaded ? 'loaded' : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}