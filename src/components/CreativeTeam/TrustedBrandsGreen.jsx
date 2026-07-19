export default function TrustedBrandsGreen() {
  return (
    <section className="bg-[#006838] px-6 py-[58px] text-white">
      <div className="mx-auto max-w-[980px] text-center">
        <h2 className="mx-auto max-w-[560px] text-[25px] font-normal leading-[1.35] tracking-[-0.045em] text-white md:text-[30px]">
          Trusted by 500+ of the world&apos;s biggest enterprise
          <br />
          brands
        </h2>

        <div className="mt-[42px] flex items-center justify-center gap-[58px]">
          <LogoWikipedia />
          <LogoAmazon />
          <LogoGoogle />
          <LogoDropbox />
        </div>
      </div>
    </section>
  );
}

function LogoWikipedia() {
  return (
    <div className="flex flex-col items-center justify-center opacity-45">
      <p className="font-serif text-[25px] leading-none tracking-[-0.035em] text-white">
        Wikipedia
      </p>
      <p className="mt-1 text-[9px] leading-none text-white/80">
        The Free Encyclopedia
      </p>
    </div>
  );
}

function LogoAmazon() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-[34px] font-black leading-none tracking-[-0.075em] text-white">
        amazon
      </p>
      <div className="mt-1 h-[8px] w-[62px] rounded-[50%] border-b-[4px] border-white" />
    </div>
  );
}

function LogoGoogle() {
  return (
    <p className="text-[38px] font-medium leading-none tracking-[-0.075em] text-white">
      Google
    </p>
  );
}

function LogoDropbox() {
  return (
    <p className="whitespace-nowrap text-[35px] font-bold leading-none tracking-[-0.075em] text-white/45">
      ◆ Dropbox
    </p>
  );
}