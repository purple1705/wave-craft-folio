import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  showBadges?: boolean;
  children?: ReactNode;
}

const ProfilePhoto = ({ 
  src, 
  alt = "Profile Photo", 
  size = 'lg',
  showBadges = true,
  children 
}: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-80 h-80',
    lg: 'w-80 h-80 md:w-96 md:h-96',
    xl: 'w-96 h-96 md:w-[28rem] md:h-[28rem]',
    responsive: 'w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96',
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
      
      {/* Main photo container */}
      <motion.div 
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/20 shadow-2xl profile-photo-container`}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary-glow)))',
        }}
      >
        {src ? (
          // Actual profile photo
          <div className="w-full h-full relative cursor-pointer">
            <img 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover"
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut" 
              }}
            />
          </div>
        ) : (
          // Placeholder
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10">
            {children || (
              <div className="text-center space-y-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-3xl md:text-5xl font-bold text-white">HA</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Add your photo here
                </p>
              </div>
            )}
          </div>
        )}
      </motion.div>
      
      {/* Floating badges */}
      {showBadges && (
        <>
          <motion.div
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white floating-badge"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white font-bold text-xs"></span>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r  from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white floating-badge"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="text-white font-bold text-xs"></span>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProfilePhoto; 