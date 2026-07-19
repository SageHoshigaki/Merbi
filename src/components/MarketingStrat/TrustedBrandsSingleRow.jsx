export default function TrustedBrandsSingleRow() {
  return (
    <section className="bg-[#fbfaf8] px-6 py-[72px] text-[#050505]">
      <div className="mx-auto flex max-w-[1728px] flex-col items-center">
        <h2 className="mx-auto max-w-[760px] text-center text-[34px] font-light leading-[1.35] tracking-[-0.045em] text-black/40 md:text-[39px]">
          Trusted by 500+ of the world&apos;s biggest enterprise
          <br />
          brands
        </h2>

        <div className="mt-[34px] flex h-[180px] w-full max-w-[1358px] items-center justify-center overflow-hidden">
          <div className="flex w-full items-center justify-between gap-10">
            <LogoSpotify />
            <LogoWikipedia />
            <LogoAmazon />
            <LogoGoogle />
            <LogoDropbox />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoSpotify() {
  return (
    <div className="flex min-w-[170px] items-center justify-center">
      <p className="text-[34px] font-black leading-none tracking-[-0.08em] text-[#cfcfcf]">
        Spotify
      </p>
    </div>
  );
}

function LogoWikipedia() {
  return (
    <div className="flex min-w-[210px] flex-col items-center justify-center">
      <p className="font-serif text-[34px] leading-none tracking-[-0.04em] text-black/75">
        Wikipedia
      </p>
      <p className="mt-1 text-[13px] leading-none text-black/55">
        The Free Encyclopedia
      </p>
    </div>
  );
}

function LogoAmazon() {
  return (
    <div className="flex min-w-[210px] flex-col items-center justify-center">
      <p className="text-[45px] font-black leading-none tracking-[-0.08em] text-black">
        amazon
      </p>
      <div className="mt-1 h-[11px] w-[82px] rounded-[50%] border-b-[5px] border-black" />
    </div>
  );
}

function LogoGoogle() {
  return (
    <div className="flex min-w-[210px] items-center justify-center">
      <p className="text-[52px] font-medium leading-none tracking-[-0.08em] text-black">
        Google
      </p>
    </div>
  );
}

function LogoDropbox() {
  return (
    <div className="flex min-w-[210px] items-center justify-center overflow-hidden">
      <p className="whitespace-nowrap text-[44px] font-bold leading-none tracking-[-0.08em] text-[#cfcfcf]">
        ◆ Dropbox
      </p>
    </div>
  );
}