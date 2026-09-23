import { useState } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/ef410.svg`;
const imgMapFrame = `${assetPathPrefix}/50da6.svg`;

const partners = ['Horra', 'Gabana', 'Horra Real Estate', 'Gabana Tech'];

export function Contact() {
  const pageRef = useRevealAll();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div ref={pageRef} className="bg-[#f5f6f2] flex flex-col items-start w-full min-h-dvh">
      {/* Contact section */}
      <section className="bg-[#f5f6f2] flex flex-col lg:flex-row gap-[70px] items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col items-start shrink-0 w-full lg:w-[600px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">REACH US</p>
          </div>
          <div className="h-5" />
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Tell us where you're starting from
          </p>
          <div className="h-9" />
          <div className="flex flex-col items-start w-full">
            {[
              { label: 'EMAIL', value: 'contact@origintechnologies.org' },
              { label: 'PHONE', value: '+251 931 203 211' },
              { label: 'OFFICE', value: 'Sarbet, near Canada Embassy, Horra Real Estate, 1st Flr, Addis Ababa' },
            ].map((row, i) => (
              <div key={i} className={`reveal delay-${i} border-[#d8d8d0] border-solid border-t flex items-center justify-between py-4 w-full flex-wrap gap-2`}>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">{row.label}</p>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>{row.value}</p>
              </div>
            ))}
            <div className="border-[#d8d8d0] border-b border-solid h-px w-full" />
          </div>
          <div className="h-9" />
          <div className="reveal border border-[#12151b] border-solid flex items-center rounded-[2px] overflow-hidden">
            <div className="flex items-start pl-4 py-[14px] w-[280px]">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5] outline-none w-full placeholder:text-[#4b5058]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              />
            </div>
            <button
              onClick={() => { if (email) setSubscribed(true); }}
              className="btn-primary bg-[#12151b] flex items-start px-[22px] py-[14px] shrink-0 transition-all duration-150"
            >
              <span className="font-['IBM_Plex_Sans:Medium'] font-medium text-white text-[14px] leading-[1.5] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </span>
            </button>
          </div>
          <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5] mt-2" style={{ fontVariationSettings: '"wdth" 100' }}>
            One update a month. No noise.
          </p>
        </div>

        <div className="reveal-right bg-[#f5f6f2] border border-[#d8d8d0] border-solid overflow-hidden relative shrink-0 w-full lg:w-[420px] h-[360px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapFrame} />
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[53%] top-[39%] whitespace-nowrap">ADDIS ABABA</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[12px] leading-[1.4] left-[53%] top-[46%] whitespace-nowrap">9.01°N, 38.76°E</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-5 bottom-9 tracking-[0.22px] whitespace-nowrap">HORRA REAL ESTATE, SARBET — 1ST FLOOR</p>
        </div>
      </section>

      {/* Horra Ecosystem marquee */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-t border-solid flex flex-col items-start w-full">
        <div className="reveal flex gap-[10px] items-center px-6 md:px-24 pt-14 pb-14">
          <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
          <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">THE HORRA ECOSYSTEM</p>
        </div>
        <div className="border-[#d8d8d0] border-solid border-t overflow-hidden w-full">
          <div className="marquee-track-slow flex">
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="partner-cell border-[#d8d8d0] border-r border-solid flex h-[108px] items-center pl-10 pr-10 shrink-0"
              >
                <p className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#4b5058] text-[22px] leading-[1.06] tracking-[0.044px] whitespace-nowrap">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
