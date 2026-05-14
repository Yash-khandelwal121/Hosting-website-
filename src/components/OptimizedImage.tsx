import React, { useState } from 'react';
import { Server, Cloud, Cpu, Globe, Image as ImageIcon } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'server' | 'cloud' | 'cpu' | 'globe' | 'generic';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackType = 'generic' 
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const renderFallback = () => {
    const iconClass = "w-1/2 h-1/2 text-primary/40";
    
    let icon = <ImageIcon className={iconClass} />;
    if (fallbackType === 'server') icon = <Server className={iconClass} />;
    if (fallbackType === 'cloud') icon = <Cloud className={iconClass} />;
    if (fallbackType === 'cpu') icon = <Cpu className={iconClass} />;
    if (fallbackType === 'globe') icon = <Globe className={iconClass} />;

    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl ${className}`}>
        {icon}
      </div>
    );
  };

  if (error || !src) {
    return renderFallback();
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm animate-pulse flex items-center justify-center z-10">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`max-w-full max-h-full object-contain transition-all duration-500 ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        onLoad={() => setLoading(false)}
        onError={(e) => {
          if (!error) {
            setError(true);
            e.currentTarget.src = "/fallback-logo.png";
          } else {
            setLoading(false);
          }
        }}
        loading="lazy"
      />
      {(error && src !== "/fallback-logo.png") && (
        <div className="absolute inset-0 z-20">
          {renderFallback()}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
