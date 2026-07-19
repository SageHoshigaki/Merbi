const teamMembers = [
  {
    name: "EMANUEL BEN",
    image:
      "./images/creativeteam/ben.jpg",
  },
  {
    name: "MARTIN",
    image:
      "./images/creativeteam/martin.jpg",
  },
  {
    name: "ANNA",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "CRISTIAN",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=900&auto=format&fit=crop",
  },
];

export default function ExecutiveTeamSection() {
  return (
    <section className="overflow-hidden bg-[#fbfaf8] pb-[48px] pt-[34px] text-[#050505]">
      <div className="mx-auto max-w-[1728px] overflow-hidden">
        {/* Heading */}
        <div className="mx-auto mb-[50px] max-w-[980px] px-8 text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[-0.02em] text-black">
            Our Executive Team
          </p>

          <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.065em] text-black md:text-[50px]">
            A team of{" "}
            <span className="font-serif italic font-normal tracking-[-0.05em]">
              experts and leaders
            </span>{" "}
            helping
            <br />
            democratize access to{" "}
            <span className="font-serif italic font-normal tracking-[-0.05em]">
              good creative
            </span>
          </h2>
        </div>

        {/* Team row — intentionally starts left and clips right */}
        <div className="flex gap-[18px] overflow-visible pl-[52px] pr-0">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <article className="h-[350px] w-[270px] shrink-0 overflow-hidden rounded-[10px] bg-[#e5e1da]">
      <div className="h-[300px] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
          draggable="false"
        />
      </div>

      <div className="flex h-[50px] items-center justify-center bg-[#73736f] px-4">
        <p className="font-serif text-[22px] font-normal uppercase leading-none tracking-[-0.035em] text-white">
          {member.name}
        </p>
      </div>
    </article>
  );
}