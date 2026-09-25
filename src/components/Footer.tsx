import { Link } from 'react-router-dom';

const assetPathPrefix = '/assets';
const imgOriginTech2 = "/assets/logo.png";
const imgEllipse = `${assetPathPrefix}/ef410.svg`;

export function Footer() {
  return (
    <footer className="bg-[#f5f6f2] border-[#d8d8d0] border-solid border-t flex flex-col gap-9 items-start pb-10 pt-14 px-6 md:px-24 w-full">
      <div className="border-[#d8d8d0] border-b border-solid flex flex-col md:flex-row items-start justify-between pb-9 w-full gap-10">
        <div className="flex flex-col gap-[14px] items-start w-full md:w-[280px]">
          <Link to="/" className="flex gap-[10px] items-center">
           <div className="h-[40px] w-auto flex items-center shrink-0">
  <img
    alt="Origin Technologies"
    className="h-[32px] w-auto object-contain"
    src={imgOriginTech2}
  />
</div>
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <span className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#12151b] text-[22px] leading-[1.06] tracking-[0.044px]">
              ORIGIN TECHNOLOGIES
            </span>
          </Link>
          <p
            className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            The tech vanguard of the Horra corporate group, working out of Addis Ababa, Ethiopia.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-16">
          <div className="flex flex-col gap-[14px] items-start whitespace-nowrap">
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px]">
              COMPANY
            </p>
            <div className="flex flex-col gap-[10px] font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <Link to="/" className="hover:text-[#2647ff] transition-colors duration-200">Home</Link>
              <Link to="/about" className="hover:text-[#2647ff] transition-colors duration-200">About</Link>
              <Link to="/contact" className="hover:text-[#2647ff] transition-colors duration-200">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-[14px] items-start whitespace-nowrap">
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px]">
              INFO
            </p>
            <div className="flex flex-col gap-[10px] font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">Terms of service</a>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">Privacy policy</a>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">FAQ</a>
            </div>
          </div>
          <div className="flex flex-col gap-[14px] items-start whitespace-nowrap">
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px]">
              FOLLOW
            </p>
            <div className="flex flex-col gap-[10px] font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">Facebook</a>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">Twitter</a>
              <a href="#" className="hover:text-[#2647ff] transition-colors duration-200">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-[#4b5058] whitespace-nowrap flex-wrap gap-2">
        <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Origin Technologies © 2026. All rights reserved.
        </p>
        <p className="font-['IBM_Plex_Mono:Regular'] text-[11px] leading-[1.4] tracking-[0.22px]">
          9.0092°N, 38.7645°E — ADDIS ABABA
        </p>
      </div>
    </footer>
  );
}
