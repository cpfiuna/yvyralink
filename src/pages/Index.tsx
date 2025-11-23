import React, { useRef } from 'react';
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaLinkedin, FaDiscord, FaEnvelope, FaUserPlus, FaRegHeart} from 'react-icons/fa6';
import { CiHeart } from "react-icons/ci";
import { FaDesktop} from 'react-icons/fa';
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import profileAvatar from "@/assets/profile-avatar.webp";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  // Edit these values to customize your link hub
  const profile = {
    name: "Club de Programación",
    institution: "FIUNA",
    bio: "Por amor al código y a la innovación.",
    avatar: profileAvatar,
  };

  // Order optimized for: showcase + short-form content first
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/cpfiuna", label: "GitHub" },
    { icon: FaDiscord, href: "https://discord.com/invite/UtRpKw2ay4", label: "Discord" },
    { icon: FaXTwitter, href: "https://x.com/cpfiuna", label: "X" },
    { icon: FaInstagram, href: "https://instagram.com/cpfiuna", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com/@cpfiuna", label: "YouTube" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/cpfiuna", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:clubdeprogramacion@ing.una.py", label: "Email" },
  ];

  const links = [
    {
      title: "Llamado a miembros",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdkWB9wghW-aVhKQMQYipnavry75uNCiFouGwBiBo68-B9eMQ/viewform",
      description: "",
      icon: FaUserPlus,
    },
    {
      title: "Página Web",
      url: "https://cpfiuna.io",
      description: "",
      icon: FaDesktop,
    },
  ];

  const { toast } = useToast();

  const copyToClipboard = async (url: string, e?: React.SyntheticEvent) => {
    // Prevent navigation when button is inside an anchor
    if (e && 'preventDefault' in e) {
      (e as unknown as { preventDefault?: () => void; stopPropagation?: () => void }).preventDefault?.();
      (e as unknown as { preventDefault?: () => void; stopPropagation?: () => void }).stopPropagation?.();
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        // fallback for older browsers / some mobile WebViews
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      toast({
        title: 'Enlace copiado',
        description: 'El enlace se ha copiado al portapapeles.',
      });
    } catch (err) {
      // Graceful failure notification
      toast({
        title: 'Error al copiar',
        description: 'No se pudo copiar el enlace en este dispositivo.',
      });
    }
  };

  // Refs used to detect long-press vs quick tap/mouse click
  const pressTimerRef = useRef<number | null>(null);
  const movedRef = useRef(false);
  const copiedRef = useRef(false);
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const PRESS_THRESHOLD = 300; // ms required for long-press to trigger copy

  const clearPress = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    movedRef.current = false;
  };

  const makePointerHandlers = (url: string) => ({
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      movedRef.current = false;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;

      // Start timer for long-press copy (touch/pen). We don't preventDefault here
      // so scrolling still works. If timer fires, we perform copy.
      pressTimerRef.current = window.setTimeout(() => {
        copiedRef.current = true;
        copyToClipboard(url);
        pressTimerRef.current = null;
      }, PRESS_THRESHOLD) as unknown as number;
    },
    onPointerMove: (e: React.PointerEvent<HTMLButtonElement>) => {
      if (startXRef.current == null || startYRef.current == null) return;
      const dx = Math.abs(e.clientX - startXRef.current);
      const dy = Math.abs(e.clientY - startYRef.current);
      // If finger moved more than a small threshold, cancel the press (user is scrolling)
      if (dx > 10 || dy > 10) {
        movedRef.current = true;
        clearPress();
      }
    },
    onPointerCancel: () => clearPress(),
    onPointerUp: (e: React.PointerEvent<HTMLButtonElement>) => {
      // If pointer was a mouse, treat as immediate click (copy on click).
      // Long-press for touch will have already fired the timeout.
      if (pressTimerRef.current) {
        clearPress();
      }
      startXRef.current = null;
      startYRef.current = null;
    },
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      // If a long-press already triggered a copy, prevent navigation/click side-effects.
      if (copiedRef.current) {
        e.preventDefault();
        e.stopPropagation();
        copiedRef.current = false;
        return;
      }

      // Otherwise, handle normal mouse click copy immediately
      copyToClipboard(url, e as unknown as React.SyntheticEvent);
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-0 md:pt-12 pb-12">
      <div className="w-full max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="profile-avatar mb-6"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center">
            <span className="text-white">{profile.name}</span>
            <span className="ml-2 gradient-text">{profile.institution}</span>
          </h1>
          <p className="text-[#94A3B8] text-center max-w-md mb-6 text-lg">
            {profile.bio}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 px-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            const hasDescription = link.description && link.description.trim() !== "";
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button group relative"
                style={{ animationDelay: `${(index + socialLinks.length) * 0.1}s` }}
              >
                <div className={`flex items-center gap-4 w-full ${hasDescription ? '' : 'justify-center'}`}>
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="font-semibold">{link.title}</div>
                    {hasDescription && (
                      <div className="text-sm opacity-70 mt-1">{link.description}</div>
                    )}
                  </div>
                  <button
                    type="button"
                    {...makePointerHandlers(link.url)}
                    className="flex-shrink-0 p-2 -mr-2 rounded-lg hover:bg-background/50 transition-colors"
                    aria-label="Copy link"
                  >
                    <HiMiniEllipsisVertical className="w-5 h-5" />
                  </button>
                </div>
              </a>
          );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center mt-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                title={social.label}
                data-testid="SocialIcon"
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                aria-label={social.label}
                className="text-[#94A3B8] hover:text-primary [&svg]pointer-events-none z-0 overflow-hidden p-2 transition-transform hover:scale-[107.5%]"
                style={{ animationDelay: `${(index + links.length) * 0.1}s` }}
              >
                <Icon className="w-8 h-8" />
                <span className="sr-only">{social.label}</span>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-[#94A3B8]">
          <p>
            Desarrollado con el
            <FaRegHeart className="inline w-3 h-4 mx-1 align-text-bottom" aria-hidden="true" />
            <span className="sr-only">corazón</span>
            por el <a href="https://cpfiuna.io" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-foreground transition-colors">Club de Programación FIUNA</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
