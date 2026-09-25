import { Link, useLocation } from 'react-router-dom';

const assetPathPrefix = '/assets';
const imgOriginTech2 = "/assets/logo.png";
const imgEllipse = `${assetPathPrefix}/ef410.svg`;

const links = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Values', to: '/values' },
 
];

export function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex h-[60px] items-center justify-between px-6 md:px-24 py-5 w-full sticky top-0 z-50 transition-shadow duration-300">
      <Link to="/" className="flex items-center gap-[10px] shrink-0">
        <div className="h-[40px] w-auto flex items-center shrink-0">
          <img alt="Origin Technologies" className="h-[32px] w-auto object-contain" src={imgOriginTech2} />
          </div>
        <div className="shrink-0 size-[6px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <span className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#12151b] text-[22px] leading-[1.06] tracking-[0.044px]">
          ORIGIN TECHNOLOGIES
        </span>
      </Link>

      <div className="flex gap-7 items-center">
        <div className="hidden md:flex gap-[34px] items-start">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link font-['IBM_Plex_Sans:Medium'] font-medium text-[15px] leading-[1.3] ${pathname === l.to ? 'text-[#12151b]' : 'text-[#4b5058]'}`}
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="btn-primary border border-[#12151b] border-solid flex items-center px-[18px] py-[9px] rounded-[2px] shrink-0"
        >
          <span
            className="font-['IBM_Plex_Sans:Medium'] font-medium text-[#12151b] text-[15px] leading-[1.3] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Reach us
          </span>
        </Link>
      </div>
    </nav>
  );
}
