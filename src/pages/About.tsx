import { useRevealAll } from '../hooks/useScrollReveal';

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/ef410.svg`;
const imgPortrait = `${assetPathPrefix}/ef86e.svg`;

export function About() {
  const pageRef = useRevealAll();

  return (
    <div ref={pageRef} className="bg-[#f5f6f2] flex flex-col items-start w-full min-h-dvh">
      {/* About section */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-[70px] items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[22px] items-start shrink-0 w-full lg:w-[400px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">ABOUT</p>
          </div>
          <div className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            <p>Not adapting to change.</p>
            <p>Driving it.</p>
          </div>
        </div>

        <div className="reveal-right flex flex-1 flex-col gap-5 items-start min-w-0">
          <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Origin Technologies sits inside the Horra corporate group, built on the same entrepreneurial drive that has grown seven businesses across Ethiopia. We started as the group's own technology arm and have grown into a company that builds for clients well beyond it.
          </p>
          <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Under CEO Adem Kedir, our work is judged on what it does for the people using it: software that fits how a business actually runs, infrastructure that holds up under real load, and data systems that make decisions easier, not harder.
          </p>
          <div className="flex flex-col gap-7 items-start pt-3 w-full">
            {[
              { label: 'MISSION', title: 'Give people and businesses a real starting point.', body: 'We build products that raise efficiency and connectivity, so our customers can put their full potential to work in a digital economy that moves fast.' },
              { label: 'VISION', title: 'Set the pace for technology in the region.', body: 'We stay close to where the industry is heading and build for that, not for where it already was — with the craft and sustainability to keep delivering as it changes.' },
            ].map((mv, i) => (
              <div key={i} className={`reveal delay-${i} flex flex-col gap-2 items-start w-full`}>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#2647ff] text-[12px] leading-[1.4] whitespace-nowrap">{mv.label}</p>
                <p className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#12151b] text-[22px] leading-[1.06] tracking-[0.044px]">{mv.title}</p>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{mv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#eceee7] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-20 items-center px-6 md:px-24 py-[120px] w-full">
        <div className="reveal-left bg-[#f5f6f2] border border-[#d8d8d0] border-solid overflow-hidden shrink-0 size-[280px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPortrait} />
        </div>
        <div className="reveal-right flex flex-1 flex-col gap-6 items-start min-w-0">
          <div className="flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">LEADERSHIP</p>
          </div>
          <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">
            "We don't measure ourselves against where the industry was. We build for where it's going — and we hold every line of code to the same standard we'd want from a partner we were trusting with our own business."
          </p>
          <div className="flex flex-col gap-1 items-start whitespace-nowrap">
            <p className="font-['IBM_Plex_Sans:Medium'] font-medium text-[#12151b] text-[15px] leading-[1.3]" style={{ fontVariationSettings: '"wdth" 100' }}>Adem Kedir</p>
            <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>Chief Executive Officer, Origin Technologies</p>
          </div>
        </div>
      </section>
    </div>
  );
}
