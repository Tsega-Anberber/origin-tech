import { useRevealAll } from '../hooks/useScrollReveal';

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/ef410.svg`;
const imgEllipse1 = `${assetPathPrefix}/d36f9.svg`;
const imgEllipse2 = `${assetPathPrefix}/e7141.svg`;
const imgFrame3 = `${assetPathPrefix}/8a815.svg`;
const imgFrame4 = `${assetPathPrefix}/8a7d6.svg`;
const imgFrame5 = `${assetPathPrefix}/94f2e.svg`;
const imgFrame6 = `${assetPathPrefix}/dbdc9.svg`;

const services = [
  { icon: imgFrame3, coord: '0, 3', name: 'Custom Software', desc: 'Bespoke applications built around how your team actually works, from first sketch to the version you rely on every day.' },
  { icon: imgFrame4, coord: '2, 0', name: 'Technology Consulting', desc: 'Direct, informed guidance on the calls that are hard to reverse — architecture, vendors, and where to invest engineering time next.' },
  { icon: imgFrame5, coord: '0, -3', name: 'Data Services', desc: 'We turn scattered records into analytics you can act on, with pipelines and dashboards built for the questions your business actually asks.' },
  { icon: imgFrame6, coord: '-2, 0', name: 'IT Infrastructure', desc: "We design, build, and manage the systems underneath everything else — sized for today's load and built to grow with the next one." },
];

const steps = [
  { dot: imgEllipse1, coord: '0,0', label: 'Locate', desc: 'Understand where you actually stand today — systems, constraints, and the real goal.' },
  { dot: imgEllipse2, coord: '1,1', label: 'Define', desc: 'Set the target coordinates: scope, architecture, and what "done" looks like.' },
  { dot: imgEllipse2, coord: '2,3', label: 'Build', desc: 'Ship in real increments, with your team seeing working progress every week.' },
  { dot: imgEllipse2, coord: '3,2', label: 'Calibrate', desc: 'Test against real usage, not assumptions, and adjust before it matters.' },
  { dot: imgEllipse2, coord: '4,4', label: 'Launch', desc: 'Hand over something you understand fully and can keep building on yourself.' },
];

export function Services() {
  const pageRef = useRevealAll();

  return (
    <div ref={pageRef} className="bg-[#f5f6f2] flex flex-col items-start w-full min-h-dvh">
      {/* Services list */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col gap-14 items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[14px] items-start w-full">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">SERVICES</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Four ways we start something with you
          </p>
        </div>
        <div className="flex flex-col items-start w-full">
          {services.map((svc, i) => (
            <div key={i} className={`reveal delay-${i} service-row border-[#d8d8d0] border-solid border-t flex flex-col md:flex-row gap-8 items-start md:items-center py-[34px] w-full`}>
              <div className="flex flex-col gap-[10px] items-start shrink-0 w-[110px]">
                <div className="shrink-0 size-[42px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={svc.icon} />
                </div>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[12px] leading-[1.4] whitespace-nowrap">{svc.coord}</p>
              </div>
              <div className="shrink-0 w-full md:w-[300px]">
                <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">{svc.name}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>{svc.desc}</p>
              </div>
            </div>
          ))}
          <div className="border-[#d8d8d0] border-solid border-b w-full" />
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col gap-16 items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[14px] items-start w-full">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">HOW WE WORK</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Five moves, from origin to launch
          </p>
          <p className="reveal delay-2 font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] max-w-[680px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Every engagement follows the same path we'd want as a client: plotted honestly, adjusted in the open, and never further from your goals than it has to be.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {steps.map((step, i) => (
            <div key={i} className={`reveal delay-${i} timeline-step flex flex-col gap-[14px] items-start`}>
              <div className="flex items-center w-full">
                <div className="shrink-0 size-[10px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={step.dot} />
                </div>
                {i < steps.length - 1 && <div className="bg-white border-[#d8d8d0] border-solid border-t flex-1 h-px ml-1" />}
              </div>
              <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[12px] leading-[1.4] whitespace-nowrap">{step.coord}</p>
              <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">{step.label}</p>
              <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
