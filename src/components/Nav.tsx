import { Link, useLocation } from 'react-router-dom';

const assetPathPrefix = '/assets';
const imgOriginTech2 = `${assetPathPrefix}/d2b8a.png`;
const imgEllipse = `${assetPathPrefix}/ef410.svg`;

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Values', to: '/values' },
  { label: 'Contact', to: '/contact' },
];

export function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex h-[60px] items-center justify-between px-6 md:px-24 py-5 w-full sticky top-0 z-50 transition-shadow duration-300">
      <Link to="/" className="flex items-center gap-[10px] shrink-0">
        <div className="h-[31px] w-[32px] relative overflow-hidden shrink-0">
          <img alt="" className="absolute h-[195.21%] left-[-53.92%] max-w-none top-[-0.18%] w-[208.82%]" src={imgOriginTech2} />
        </div>
        <div className="shrink-0 size-[6px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <span className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#12151b] text-[22px] leading-[1.06] tracking-[0.044px]">
          ORIGIN
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
