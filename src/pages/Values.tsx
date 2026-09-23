import { useRevealAll } from '../hooks/useScrollReveal';

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/ef410.svg`;
const imgEllipse1 = `${assetPathPrefix}/6dc0b.svg`;
const imgEllipse2 = `${assetPathPrefix}/867a2.svg`;
const imgEllipse3 = `${assetPathPrefix}/4538e.svg`;
const imgEllipse4 = `${assetPathPrefix}/fb2b8.svg`;
const imgQuadFrame = `${assetPathPrefix}/b1a37.svg`;

const values = [
  { dot: imgEllipse1, text: 'Quality & integrity — the highest ethical standard, every time.' },
  { dot: imgEllipse2, text: 'Agility & innovation — ahead of the trend, not chasing it.' },
  { dot: imgEllipse3, text: 'Customer focus — solving the problem that actually matters.' },
  { dot: imgEllipse4, text: 'Collaboration — partnerships built on trust, not just contracts.' },
];

export function Values() {
  const pageRef = useRevealAll();

  return (
    <div ref={pageRef} className="bg-[#f5f6f2] flex flex-col items-start w-full min-h-dvh">
      {/* Values section */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-[70px] items-center px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[18px] items-start shrink-0 w-full lg:w-[520px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">WHAT WE VALUE</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Where we choose to stand
          </p>
          <p className="reveal delay-2 font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Four commitments, plotted against how we work and who we work for. Each one pulls slightly differently, and we hold all four at once.
          </p>
          <div className="flex flex-col gap-[14px] items-start pt-[14px] w-full">
            {values.map((v, i) => (
              <div key={i} className={`reveal delay-${i} flex gap-3 items-center`}>
                <div className="shrink-0 size-[9px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.dot} />
                </div>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right overflow-hidden shrink-0 size-[380px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuadFrame} />
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[130px] top-[4px] tracking-[0.22px] whitespace-nowrap">FUTURE-FOCUSED</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[145px] top-[358px] tracking-[0.22px] whitespace-nowrap">DEPENDABLE</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[290px] top-[172px] tracking-[0.22px] whitespace-nowrap">CUSTOMER-LED</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[8px] top-[172px] tracking-[0.22px] whitespace-nowrap">PRINCIPLED</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[200px] top-[112px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Agility &amp; innovation</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[40px] top-[118px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Quality &amp; integrity</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[206px] top-[292px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Customer focus</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[44px] top-[284px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Collaboration</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col md:flex-row items-start justify-between px-6 md:px-24 py-16 w-full gap-10">
        {[
          { n: '4', label: 'Core service lines' },
          { n: '7', label: 'Businesses in the Horra ecosystem' },
          { n: '1', label: 'Vanguard mission, no exceptions' },
        ].map((s, i) => (
          <div key={i} className={`reveal delay-${i} flex flex-col gap-[10px] items-start w-full md:w-[280px]`}>
            <p className="font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(72px,9vw,132px)] leading-[0.9] tracking-[0.264px] whitespace-nowrap">
              {s.n}
            </p>
            <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {s.label}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
